#!/usr/bin/env node
// Refreshes packages.json with npm + PyPI download totals for the published packages.
// Markdown cannot compute a sum, so the README's headline badge reads this file through
// shields' dynamic/json endpoint. Run by .github/workflows/package-downloads.yml.
//
// npm is asked directly (exact, and its range endpoint covers all time since publish).
// PyPI has no first-party totals API, so it goes through shields' pepy proxy, which is
// the same source the per-package badges use, keeping the headline and the rows agreed.
//
// A card may cover more than one published name. jevkit is a suite: six packages on npm,
// six on PyPI, and the two registries do not carry the same set (vitest is npm-only,
// pytest is PyPI-only), so the card lists each registry's members explicitly.
//
// @jevkit/all is deliberately absent. It is a meta-package whose only content is a
// dependency list, so every install of it already increments all six members. Counting
// it as well would inflate the total by double-counting the same install.
import { writeFileSync, readFileSync, existsSync } from "node:fs";

const JEVKIT = ["core", "lint", "drift", "bench", "calibrate"].map((x) => `jevkit-${x}`);

const PKGS = [
  { key: "cmd-risk" },
  { key: "cassette-fn" },
  { key: "apply-edit-block" },
  { key: "ctx-compact" },
  { key: "prompt-cache-fit" },
  {
    key: "jevkit",
    npm: [...JEVKIT, "jevkit-vitest"],
    pypi: [...JEVKIT, "jevkit-pytest"],
  },
].map((p) => ({ key: p.key, npm: p.npm ?? [p.key], pypi: p.pypi ?? [p.key] }));
const SINCE = "2026-09-01";

const asInt = (v) => {
  if (typeof v === "number") return v;
  const m = String(v ?? "").replace(/,/g, "").match(/^([\d.]+)\s*([kKmM])?/);
  if (!m) return null;
  const n = parseFloat(m[1]);
  if (!Number.isFinite(n)) return null;
  const s = (m[2] || "").toLowerCase();
  return Math.round(s === "k" ? n * 1e3 : s === "m" ? n * 1e6 : n);
};

const get = async (url) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { "user-agent": "pjdurden-profile" } });
      if (r.ok) return await r.json();
    } catch {}
    await new Promise((r) => setTimeout(r, 2000 * (i + 1)));
  }
  return null;
};

const today = new Date().toISOString().slice(0, 10);
const out = { updated: new Date().toISOString(), total: 0, npm: 0, pypi: 0, packages: {} };
let hardFail = false;

// A member that answers null is a fetch failure, not a zero, and must never be summed
// as one. shields' pepy proxy throttles readily once a run asks for a dozen packages,
// and flooring those to 0 silently erased every PyPI figure on a previous run while the
// aggregate still grew, because a newly added package masked the loss.
//
// Two guards, because the aggregate one alone is not enough:
//   1. npm answering null hard-fails the run outright.
//   2. every figure is clamped to its previous value per card and per registry. These
//      are all-time counters, so a real one only ever grows; anything smaller is a
//      throttled fetch, and the last known-good number is carried forward instead.
const prev = existsSync("packages.json")
  ? JSON.parse(readFileSync("packages.json", "utf8"))
  : { packages: {} };
const floorAt = (key, reg, v) => Math.max(v ?? 0, prev.packages?.[key]?.[reg] ?? 0);

for (const p of PKGS) {
  let npm = 0;
  for (const name of p.npm) {
    const d = await get(`https://api.npmjs.org/downloads/range/${SINCE}:${today}/${encodeURIComponent(name)}`);
    if (!d) { hardFail = true; continue; }     // npm is the floor
    npm += (d.downloads || []).reduce((a, x) => a + x.downloads, 0);
  }
  let pypi = 0;
  for (const name of p.pypi) {
    const s = await get(`https://img.shields.io/pepy/dt/${encodeURIComponent(name)}.json`);
    pypi += (s ? asInt(s.value) : null) ?? 0;
    await new Promise((r) => setTimeout(r, 400));   // pace shields; it throttles in bursts
  }
  npm = floorAt(p.key, "npm", npm);
  pypi = floorAt(p.key, "pypi", pypi);
  out.packages[p.key] = { npm, pypi };
  out.npm += npm;
  out.pypi += pypi;
}
out.total = out.npm + out.pypi;

// Never publish a regression caused by a flaky upstream: a real total only grows.
{
  if (hardFail || out.total < (prev.total ?? 0)) {
    console.log(`refusing update: new total ${out.total} < previous ${prev.total} (or npm fetch failed)`);
    process.exit(0);
  }
}
writeFileSync("packages.json", JSON.stringify(out, null, 2) + "\n");
console.log(`total=${out.total} npm=${out.npm} pypi=${out.pypi}`);
