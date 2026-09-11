#!/usr/bin/env node
// Refreshes packages.json with npm + PyPI download totals for the published packages.
// Markdown cannot compute a sum, so the README's headline badge reads this file through
// shields' dynamic/json endpoint. Run by .github/workflows/package-downloads.yml.
//
// npm is asked directly (exact, and its range endpoint covers all time since publish).
// PyPI has no first-party totals API, so it goes through shields' pepy proxy, which is
// the same source the per-package badges use, keeping the headline and the rows agreed.
import { writeFileSync, readFileSync, existsSync } from "node:fs";

const PKGS = ["cmd-risk", "cassette-fn", "apply-edit-block", "ctx-compact", "prompt-cache-fit"];
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

for (const p of PKGS) {
  const d = await get(`https://api.npmjs.org/downloads/range/${SINCE}:${today}/${p}`);
  const npm = d ? (d.downloads || []).reduce((a, x) => a + x.downloads, 0) : null;
  const s = await get(`https://img.shields.io/pepy/dt/${p}.json`);
  const pypi = s ? asInt(s.value) : null;
  if (npm === null) hardFail = true;           // npm is the floor; PyPI may legitimately be absent
  out.packages[p] = { npm, pypi };
  out.npm += npm || 0;
  out.pypi += pypi || 0;
}
out.total = out.npm + out.pypi;

// Never publish a regression caused by a flaky upstream: a real total only grows.
if (existsSync("packages.json")) {
  const prev = JSON.parse(readFileSync("packages.json", "utf8"));
  if (hardFail || out.total < (prev.total ?? 0)) {
    console.log(`refusing update: new total ${out.total} < previous ${prev.total} (or npm fetch failed)`);
    process.exit(0);
  }
}
writeFileSync("packages.json", JSON.stringify(out, null, 2) + "\n");
console.log(`total=${out.total} npm=${out.npm} pypi=${out.pypi}`);
