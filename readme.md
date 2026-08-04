<h1 align="center">Prajjwal Chittori</h1>

<p align="center">
  Crypto &amp; Payments Backend Engineer - DeFi &amp; Liquid Restaking · On-chain Settlement · Card &amp; Payment Rails
</p>

<p align="center">
  Liquid staking &amp; restaking &nbsp;·&nbsp; On-chain ⇄ card settlement &nbsp;·&nbsp; Cross-border payments &nbsp;·&nbsp; Stablecoins &nbsp;·&nbsp; Smart contracts (EVM / Solana / CosmWasm)
</p>

<p align="center">
  <a href="https://prajj.com/"><img src="https://img.shields.io/badge/prajj.com-0c875a?style=flat-square&logo=googlechrome&logoColor=white" alt="Website"/></a>
  <a href="https://www.linkedin.com/in/prajjwal-chittori/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://codeforces.com/profile/pjdurden"><img src="https://img.shields.io/badge/Codeforces-Expert-1F8ACB?style=flat-square&logo=codeforces&logoColor=white" alt="Codeforces Expert"/></a>
  <a href="mailto:prajjwalchittoriwork@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

<p align="center">
  <sub><code>$ 21 merged upstream PRs · 16 projects · 3 papers · $500M+ TVL shipped</code></sub>
</p>

---

## Summary

Backend engineer specializing in the intersection of crypto infrastructure and traditional payments - systems where on-chain state must reconcile with real-world money movement to the cent.

My work spans both sides of that seam: founding-team engineer at a liquid-staking protocol that scaled past **$500M+ in staked assets**, four years on **cross-border payments and the stablecoin initiative at Visa**, and now **card and vault products at [ether.fi](https://www.ether.fi/)** - a non-custodial Visa crypto card built on liquid-restaking infrastructure.

- **Currently:** Senior Backend Engineer at ether.fi - Cash (card) & Vault products
- **Core stack:** Go, Rust, Solidity, TypeScript, Java/Spring, Ethereum/EVM, EigenLayer, Kafka, PostgreSQL, Redis
- **Education:** B.Tech, Computer Science - Delhi College of Engineering (now Delhi Technological University)
- **Focus areas:** liquid staking & restaking, on-chain/off-chain settlement, card & payment rails, cross-border payments, stablecoins, smart contracts (EVM / Solana / CosmWasm) - plus AI inference infrastructure (vLLM) on the open-source side

---

## Experience &nbsp;<sub><code>2021 - now</code></sub>

*Backend engineering across crypto and global payments.*

<details open>
<summary><b>ether.fi - Senior Backend Engineer, Card & Vault Products</b>&nbsp; <sub><code>2026 - Present</code></sub></summary>

Building ether.fi Cash, a non-custodial Visa crypto card on liquid-restaking infrastructure where users spend ETH/USDC while their assets continue earning restaking yield.

- Own real-time settlement bridging Visa rails and on-chain vaults (authorization, capture, reconciliation).
- Built the Borrow Mode backend - USDC borrowing against eETH collateral via lending-pool integration.
- Designed an event-driven cashback pipeline (wETH rewards) on Kafka.
- Hardened KYC/AML and risk monitoring with chain-analytics providers; extended multi-chain support across Ethereum L1 and L2s.

`$ Go · Solidity · Ethereum · EigenLayer · Kafka · PostgreSQL · Redis`

</details>
<details open>
<summary><b>Visa - Senior Software Engineer, Payments & Crypto Initiative</b>&nbsp; <sub><code>2022 - 2026</code></sub></summary>

Worked across traditional cross-border payments and Visa's stablecoin / crypto initiative - the bridge between card networks and digital assets.

- Led an 8-engineer team on a real-time payments platform (monolith plus eight microservices) sustaining 2,000+ TPS at 99.98% uptime.
- Delivered Treasury as a Service for the APAC hub - 15 currencies, clients in 60+ countries, powering roughly 80% of APAC liquidity flows through Visa Direct A2A.
- Built the Network Validations Framework - configurable payer/beneficiary identity checks across 100+ SWIFT message types.
- Prototyped on-chain payment settlement in Solidity and Solana as part of the crypto/stablecoin track.

`$ Java · Spring Boot · Solidity · Rust · RabbitMQ · Hazelcast · Docker · Kubernetes`

</details>
<details open>
<summary><b>Stader Labs - Software Engineer, Founding Team</b>&nbsp; <sub><code>2021 - 2022</code></sub></summary>

Joined as an intern during the final years of my degree at Delhi College of Engineering and grew into a founding member of a ~7-person team building a multi-chain liquid-staking protocol.

- Built Rust / CosmWasm smart contracts powering liquidity pools that scaled past $500M+ in staked assets across multiple chains.
- Led gas-fee analysis and optimization - benchmarking storage and swap costs on Terra/CosmWasm to keep contract execution economical at scale.
- Built a validator analytics platform monitoring 1M+ nodes (React, MongoDB, Ethereum APIs) and APR dashboards.
- Designed cross-chain architecture and on-chain/off-chain synchronization pipelines.

`$ Rust · CosmWasm · TypeScript · Python · React · MongoDB`

</details>

---

## Research &nbsp;<sub><code>3 papers</code></sub>

*Published, peer-citable work.*

<details>
<summary><b>Cache-aware request planning for black-box LLM APIs</b>&nbsp; <sub><code>2026 · preprint</code></sub></summary>

**Cache-Aware Client-Side Request Planning for Black-Box LLM APIs.** When you consume an LLM through a paid per-token API you pay for the tokens the server processes, so the only lossless lever a client has is re-ordering requests to hit the provider's prompt cache. Formalizes that design space and ships a **greedy prefix-clustering scheduler** that shapes request order to maximize cache hits - **up to 60% billed-cost reduction** on an agentic workload at zero quality loss, Pareto-dominating prompt compression and semantic caching.

[DOI 10.5281/zenodo.21386594](https://doi.org/10.5281/zenodo.21386594) · [pjdurden/cache-aware-request-planning](https://github.com/pjdurden/cache-aware-request-planning)

</details>
<details>
<summary><b>Executable correctness under KV-cache compression</b>&nbsp; <sub><code>2026 · preprint</code></sub></summary>

**Perplexity Holds, Programs Break: Executable Correctness as a Blind Spot of KV-Cache Compression.** KV-cache compression is benchmarked almost entirely on token-overlap and retrieval metrics that never check whether generated code actually runs or a tool call is schema-valid. Introduces **kv-exec-bench**, an open benchmark measuring code unit-test pass@1 and tool-call JSON-Schema validity under compression, built on NVIDIA's `kvpress` so any press works unmodified.

[DOI 10.5281/zenodo.20805562](https://doi.org/10.5281/zenodo.20805562) · [pjdurden/kv-exec-bench](https://github.com/pjdurden/kv-exec-bench)

</details>
<details>
<summary><b>StragglerPolicy - straggler-aware decentralized training</b>&nbsp; <sub><code>2026 · paper</code></sub></summary>

**Straggler-Aware Elastic Membership for Decentralized Training.** A zero-GPU discrete-event simulator of DiLoCo-style decentralized ML training plus a straggler-aware membership policy for *slow-but-alive* nodes that existing decentralized-training stacks don't handle. **4.59x faster** than the baseline on a persistent-straggler scenario, validated against a `torch.distributed`/gloo DiLoCo loop.

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20574905.svg)](https://doi.org/10.5281/zenodo.20574905) · [pjdurden/churn](https://github.com/pjdurden/churn)

</details>

---

## Open Source &nbsp;<sub><code>21 merged · 16 projects</code></sub>

*Merged work on the infrastructure other people build on. Star counts are live; expand a project for the actual bug.*

<table>
<tr>
<td align="center" width="25%">
<a href="https://github.com/vllm-project/vllm"><img src="https://github.com/vllm-project.png?size=96" width="44" height="44" alt="vLLM"><br><b>vLLM</b></a><br>
<img src="https://img.shields.io/github/stars/vllm-project/vllm?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/meilisearch/meilisearch"><img src="https://github.com/meilisearch.png?size=96" width="44" height="44" alt="Meilisearch"><br><b>Meilisearch</b></a><br>
<img src="https://img.shields.io/github/stars/meilisearch/meilisearch?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/sgl-project/sglang"><img src="https://github.com/sgl-project.png?size=96" width="44" height="44" alt="SGLang"><br><b>SGLang</b></a><br>
<img src="https://img.shields.io/github/stars/sgl-project/sglang?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/huggingface/candle"><img src="https://github.com/huggingface.png?size=96" width="44" height="44" alt="candle"><br><b>candle</b></a><br>
<img src="https://img.shields.io/github/stars/huggingface/candle?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
</tr>
<tr>
<td align="center" width="25%">
<a href="https://github.com/mark3labs/mcp-go"><img src="https://github.com/mark3labs.png?size=96" width="44" height="44" alt="mcp-go"><br><b>mcp-go</b></a><br>
<img src="https://img.shields.io/github/stars/mark3labs/mcp-go?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/EricLBuehler/mistral.rs"><img src="https://github.com/EricLBuehler.png?size=96" width="44" height="44" alt="mistral.rs"><br><b>mistral.rs</b></a><br>
<img src="https://img.shields.io/github/stars/EricLBuehler/mistral.rs?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>2 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/ethereum-optimism/optimism"><img src="https://github.com/ethereum-optimism.png?size=96" width="44" height="44" alt="Optimism"><br><b>Optimism</b></a><br>
<img src="https://img.shields.io/github/stars/ethereum-optimism/optimism?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/kvcache-ai/Mooncake"><img src="https://github.com/kvcache-ai.png?size=96" width="44" height="44" alt="Mooncake"><br><b>Mooncake</b></a><br>
<img src="https://img.shields.io/github/stars/kvcache-ai/Mooncake?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>2 merged</sub>
</td>
</tr>
<tr>
<td align="center" width="25%">
<a href="https://github.com/vllm-project/aibrix"><img src="https://github.com/vllm-project.png?size=96" width="44" height="44" alt="AIBrix"><br><b>AIBrix</b></a><br>
<img src="https://img.shields.io/github/stars/vllm-project/aibrix?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>2 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/bluealloy/revm"><img src="https://github.com/bluealloy.png?size=96" width="44" height="44" alt="revm"><br><b>revm</b></a><br>
<img src="https://img.shields.io/github/stars/bluealloy/revm?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/envoyproxy/ai-gateway"><img src="https://github.com/envoyproxy.png?size=96" width="44" height="44" alt="Envoy AI Gateway"><br><b>Envoy AI Gateway</b></a><br>
<img src="https://img.shields.io/github/stars/envoyproxy/ai-gateway?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>2 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/celestiaorg/celestia-node"><img src="https://github.com/celestiaorg.png?size=96" width="44" height="44" alt="celestia-node"><br><b>celestia-node</b></a><br>
<img src="https://img.shields.io/github/stars/celestiaorg/celestia-node?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
</tr>
<tr>
<td align="center" width="25%">
<a href="https://github.com/alloy-rs/core"><img src="https://github.com/alloy-rs.png?size=96" width="44" height="44" alt="alloy"><br><b>alloy</b></a><br>
<img src="https://img.shields.io/github/stars/alloy-rs/core?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/lambdaclass/ethrex"><img src="https://github.com/lambdaclass.png?size=96" width="44" height="44" alt="ethrex"><br><b>ethrex</b></a><br>
<img src="https://img.shields.io/github/stars/lambdaclass/ethrex?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/guidance-ai/llguidance"><img src="https://github.com/guidance-ai.png?size=96" width="44" height="44" alt="llguidance"><br><b>llguidance</b></a><br>
<img src="https://img.shields.io/github/stars/guidance-ai/llguidance?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>2 merged</sub>
</td>
<td align="center" width="25%">
<a href="https://github.com/dottxt-ai/outlines-core"><img src="https://github.com/dottxt-ai.png?size=96" width="44" height="44" alt="outlines-core"><br><b>outlines-core</b></a><br>
<img src="https://img.shields.io/github/stars/dottxt-ai/outlines-core?style=flat-square&label=%E2%98%85&labelColor=2a2f28&color=0c875a&cacheSeconds=21600" alt="stars"><br>
<sub>1 merged</sub>
</td>
</tr>
</table>

<details>
<summary><b>vLLM</b> &nbsp;<code>vllm-project/vllm</code></summary>

The standard high-throughput **LLM inference & serving engine** - build-correctness fix in the precompiled-flag test suite ([#44942](https://github.com/vllm-project/vllm/pull/44942)).

</details>

<details>
<summary><b>Meilisearch</b> &nbsp;<code>meilisearch/meilisearch</code></summary>

Rust search engine - fixed a ranking-rules ordering bug that silently dropped matching hits ([#6437](https://github.com/meilisearch/meilisearch/pull/6437)).

</details>

<details>
<summary><b>SGLang</b> &nbsp;<code>sgl-project/sglang</code></summary>

High-throughput **LLM/VLM serving engine** - fixed the prefill/decode router's cache-aware routing keying chat requests on the first message only; routing on the full conversation lifted KV-cache hits from **~69% to ~96%** and output throughput from **~678 to ~1078 TPS** ([#27430](https://github.com/sgl-project/sglang/pull/27430)).

</details>

<details>
<summary><b>candle</b> &nbsp;<code>huggingface/candle</code></summary>

Hugging Face's minimalist **Rust ML framework** - Qwen3 produced incorrect output for any batch size > 1: the causal mask allocated a batch-independent buffer but claimed a `(b, 1, tgt, tgt + offset)` shape, so batch row 0 read the correct mask and every row after it read past the buffer; fixed by shaping the mask `(1, 1, ...)` and letting the existing `broadcast_add` apply it across the batch ([#3586](https://github.com/huggingface/candle/pull/3586)).

</details>

<details>
<summary><b>mcp-go</b> &nbsp;<code>mark3labs/mcp-go</code></summary>

The leading Go implementation of the **Model Context Protocol (MCP)** - fixed `getServerMetadata` returning `(nil, nil)` instead of an error, closing a silent-failure path in OAuth discovery ([#904](https://github.com/mark3labs/mcp-go/pull/904)).

</details>

<details>
<summary><b>mistral.rs</b> &nbsp;<code>EricLBuehler/mistral.rs</code></summary>

The Rust **LLM inference & serving engine**: fixed reversed FCFS priority in the `PagedAttentionScheduler` preemption path so the oldest request is preempted last ([#2250](https://github.com/EricLBuehler/mistral.rs/pull/2250)), and validated GGUF special-token ids against the vocab to prevent an out-of-bounds panic on model load ([#2282](https://github.com/EricLBuehler/mistral.rs/pull/2282)).

</details>

<details>
<summary><b>Optimism</b> &nbsp;<code>ethereum-optimism/optimism</code></summary>

The **OP Stack** monorepo powering Ethereum L2s (Base, OP Mainnet) - fixed an `op-wheel` metrics bug that wrote block gas twice and left the base-fee gauge unset ([#21127](https://github.com/ethereum-optimism/optimism/pull/21127)).

</details>

<details>
<summary><b>Mooncake</b> &nbsp;<code>kvcache-ai/Mooncake</code></summary>

The **KV-cache store & transfer engine** behind Kimi, used as a disaggregated KV backend by vLLM and SGLang - `mooncake_master` bound its RPC and HTTP servers to the numeric wildcard `0.0.0.0`, which the acceptors resolved through `getaddrinfo()`, so environments that answer `EAI_NONAME` for numeric literals killed startup with *bad address: 0.0.0.0*; fixed by pinning the dependency to a revision that parses numeric IP literals directly ([#2919](https://github.com/kvcache-ai/Mooncake/pull/2919)), and fixed an SSD-offload duplicate-key storm under concurrency: when two offload flows shared a KV prefix block, the bucket backend's intentional single-writer-per-key `OBJECT_ALREADY_EXISTS` rejection was treated as fatal by `FileStorage::OffloadObjects`, aborting the whole offload and leaving the decode node with `INVALID_KEY` floods; made duplicate-key rejection a recoverable per-bucket condition ([#2967](https://github.com/kvcache-ai/Mooncake/pull/2967)).

</details>

<details>
<summary><b>AIBrix</b> &nbsp;<code>vllm-project/aibrix</code></summary>

The vLLM project's **Kubernetes-native LLM-serving** control plane - fixed the ZMQ KV-event decoder dropping `group_idx`/`medium`/`lora_name` from vLLM's `BlockStored` event, which caused false prefix-cache matches on hybrid-attention models ([#2384](https://github.com/vllm-project/aibrix/pull/2384)), and made the KV-event indexer purge a pod's cached prefixes on `AllBlocksCleared` so evicted blocks are no longer served as stale cache hits ([#2385](https://github.com/vllm-project/aibrix/pull/2385)).

</details>

<details>
<summary><b>revm</b> &nbsp;<code>bluealloy/revm</code></summary>

The Rust **EVM behind Foundry & reth** - removed a const-eval panic path in the stack interpreter ([#3735](https://github.com/bluealloy/revm/pull/3735)).

</details>

<details>
<summary><b>Envoy AI Gateway</b> &nbsp;<code>envoyproxy/ai-gateway</code></summary>

The **Envoy-based gateway for AI/LLM traffic** - the MCP proxy failed `initialize` with a 500 when a backend's `initialize` SSE response opened with a keep-alive / empty `data:` event before the JSON-RPC result (seen on some FastMCP backends); the SSE parser now skips non-response events instead of treating them as a fatal parse error ([#2267](https://github.com/envoyproxy/ai-gateway/pull/2267)), and the Anthropic translator dropped the input/cache token usage reported on `message_delta`, so it was left out of the final usage totals; fixed to merge it in ([#2292](https://github.com/envoyproxy/ai-gateway/pull/2292)).

</details>

<details>
<summary><b>celestia-node</b> &nbsp;<code>celestiaorg/celestia-node</code></summary>

The Go node for the **Celestia** data-availability layer - unified the header `TestSuite` constructors behind functional options ([#5041](https://github.com/celestiaorg/celestia-node/pull/5041)).

</details>

<details>
<summary><b>alloy</b> &nbsp;<code>alloy-rs/core</code></summary>

The Rust **Ethereum-types & `sol!` toolkit** used across Foundry, reth and the wider Rust EVM ecosystem - the `sol!` macro silently dropped `Debug`/`PartialEq`/`Eq`/`Hash` derives on the event/error enums it generates for contracts with overloaded events (e.g. Uniswap V3's two `Swap` events), because synthetic `_N`-suffixed variant names didn't resolve; fixed it to compute derivability from the underlying parameter types ([#1118](https://github.com/alloy-rs/core/pull/1118)).

</details>

<details>
<summary><b>ethrex</b> &nbsp;<code>lambdaclass/ethrex</code></summary>

The Rust **Ethereum L1/L2 execution client** by LambdaClass - replaced a too-broad `datadir non-empty` startup check with an actual-DB probe, so unrelated files (e.g. an EthDocker JWT secret) no longer block a fresh node from booting ([#6786](https://github.com/lambdaclass/ethrex/pull/6786)).

</details>

<details>
<summary><b>llguidance</b> &nbsp;<code>guidance-ai/llguidance</code></summary>

The **constrained-decoding engine** behind structured / JSON-Schema output in vLLM, SGLang and llama.cpp - fixed `multipleOf` rejecting negative multiples ([#357](https://github.com/guidance-ai/llguidance/pull/357)) and made `max_tokens=0` rules compile to the empty string ([#356](https://github.com/guidance-ai/llguidance/pull/356)).

</details>

<details>
<summary><b>outlines-core</b> &nbsp;<code>dottxt-ai/outlines-core</code></summary>

The Rust **JSON-Schema to regex core** behind Outlines' structured generation - the `date` format regex applied a uniform 01-31 day range regardless of month, so constrained decoding could emit impossible dates such as `2022-02-31` and `2022-04-31`; made the day range month-aware, deliberately leaving leap years unvalidated to keep the compiled regex bounded ([#258](https://github.com/dottxt-ai/outlines-core/pull/258)).

</details>

---

## Personal Projects &nbsp;<sub><code>8 builds</code></sub>

*Smaller things built to learn or to prove a point.*

<details>
<summary><b>kv-canary</b>&nbsp; <sub><code>KV-cache compression</code></sub></summary>

A canary for **silent KV-cache-compression failures** - functional accuracy (code execution / tool-calls) vs perplexity under quantization & token eviction, scored by a Silent Degradation Score. [pjdurden/kv-canary](https://github.com/pjdurden/kv-canary)

</details>
<details>
<summary><b>churn - StragglerPolicy</b>&nbsp; <sub><code>decentralized training</code></sub></summary>

Deterministic discrete-event simulator of elastic-membership decentralized ML training, plus the straggler-aware membership policy behind the paper above. [pjdurden/churn](https://github.com/pjdurden/churn)

</details>
<details>
<summary><b>friendly-neighbourhood-6502</b>&nbsp; <sub><code>bare-metal systems</code></sub></summary>

**Cycle-accurate 6502 CPU emulator** down to bus/processor pins, addressing modes, and internal functions, with an OpenGL / Pixel Game Engine graphics frontend. [pjdurden/friendly-neighbourhood-6502](https://github.com/pjdurden/friendly-neighbourhood-6502)

</details>
<details>
<summary><b>CoinSwap</b>&nbsp; <sub><code>CosmWasm + Terraswap</code></sub></summary>

DEX swap contract for LUNA/UST/CW20 tokens, with a gas-fee analysis tool for the Terra blockchain. [pjdurden/CoinSwap](https://github.com/pjdurden/CoinSwap-using-Cosmwasm-and-Terraswap)

</details>
<details>
<summary><b>Gas-Fee Benchmark</b>&nbsp; <sub><code>cw-storage-plus / Terraswap</code></sub></summary>

Benchmarking contract measuring gas costs of storage patterns on Terra/CosmWasm. [pjdurden/Gas_analysis](https://github.com/pjdurden/Gas_analysis_cw_storage_plus_terraswap)

</details>
<details>
<summary><b>Solana Payment System</b>&nbsp; <sub><code>Rust on Solana</code></sub></summary>

Rust payment-settlement program deployed on Solana. [pjdurden/Solana-PaymentSystem-Visa](https://github.com/pjdurden/Solana-PaymentSystem-Visa)

</details>
<details>
<summary><b>Stader APR Dashboard</b>&nbsp; <sub><code>React</code></sub></summary>

React dashboard surfacing staking APR and validator analytics. [pjdurden/Stader-Apr-Dashboard-](https://github.com/pjdurden/Stader-Apr-Dashboard-)

</details>
<details>
<summary><b>Veri5</b>&nbsp; <sub><code>payments identity API</code></sub></summary>

Real-time identity and account verification API for cross-border payments. [pjdurden/veri5-mvp](https://github.com/pjdurden/veri5-mvp)

</details>

---

## Technical Skills &nbsp;<sub><code>stack</code></sub>

<details>
<summary><b>Languages, chains, infra and ML stack</b></summary>

**Languages**

![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity-363636?style=flat-square&logo=solidity&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=cplusplus&logoColor=white)

**Blockchain & Web3**

![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=flat-square&logo=ethereum&logoColor=white)
![EigenLayer](https://img.shields.io/badge/EigenLayer-1A0C6D?style=flat-square)
![CosmWasm](https://img.shields.io/badge/CosmWasm-5064FB?style=flat-square&logo=cosmos&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-9945FF?style=flat-square&logo=solana&logoColor=white)
![Foundry](https://img.shields.io/badge/Foundry-000000?style=flat-square&logo=ethereum&logoColor=white)

**Backend & Infrastructure**

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)

**AI / ML Systems**

![vLLM](https://img.shields.io/badge/vLLM-30A14E?style=flat-square)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![torch.distributed](https://img.shields.io/badge/torch.distributed-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![DiLoCo](https://img.shields.io/badge/DiLoCo-5064FB?style=flat-square)
![Decentralized Training](https://img.shields.io/badge/Decentralized%20Training-1A0C6D?style=flat-square)

</details>

---

## Competitive Programming &nbsp;<sub><code>Codeforces Expert</code></sub>

<details>
<summary><b>Ratings, contests and mentoring</b></summary>

Achieved **Codeforces Expert** during university (pre-2022, before AI coding assistants) - a credential earned through unassisted algorithmic problem-solving under contest conditions.

- **Codeforces** - Expert · [pjdurden](https://codeforces.com/profile/pjdurden)
- **CodeChef** - peak rating 1890 · [pjdurden](https://www.codechef.com/users/pjdurden)
- **LeetCode** - peak rating 1679 · [Pjdope](https://leetcode.com/Pjdope/)
- **[Code-A-Thon](https://dare2compete.com/hackathon/1022-code-a-thon-code-a-thon/details)** - Rank 5 (College Rank 1)
- Cleared the Facebook Hacker Cup Qualification Round (2020); Google Kick Start Round B (2021).
- Mentored 300+ students in algorithms and software engineering through [GirlScript](https://www.girlscript.tech/about).

</details>
