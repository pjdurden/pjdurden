<h1 align="center">Prajjwal Chittori</h1>

<p align="center">
  Crypto &amp; Payments Backend Engineer - DeFi &amp; Liquid Restaking · On-chain Settlement · Card &amp; Payment Rails
</p>

<p align="center">
  Liquid staking &amp; restaking &nbsp;·&nbsp; On-chain ⇄ card settlement &nbsp;·&nbsp; Cross-border payments &nbsp;·&nbsp; Stablecoins &nbsp;·&nbsp; Smart contracts (EVM / Solana / CosmWasm)
</p>

<p align="center">
  <a href="https://pjdurden.github.io/prajjwalchittori/"><img src="https://img.shields.io/badge/Website-0b0d10?style=flat&logo=googlechrome&logoColor=white" alt="Website"/></a>
  <a href="https://www.linkedin.com/in/prajjwal-chittori/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://codeforces.com/profile/pjdurden"><img src="https://img.shields.io/badge/Codeforces-Expert-1F8ACB?style=flat&logo=codeforces&logoColor=white" alt="Codeforces Expert"/></a>
  <a href="mailto:prajjwalchittoriwork@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" alt="Email"/></a>
</p>

---

## Summary

Backend engineer specializing in the intersection of crypto infrastructure and traditional payments - systems where on-chain state must reconcile with real-world money movement to the cent.

My work spans both sides of that seam: founding-team engineer at a liquid-staking protocol that scaled past **$500M+ in staked assets**, four years on **cross-border payments and the stablecoin initiative at Visa**, and now **card and vault products at [ether.fi](https://www.ether.fi/)** - a non-custodial Visa crypto card built on liquid-restaking infrastructure.

- **Currently:** Senior Backend Engineer at ether.fi - Cash (card) & Vault products
- **Core stack:** Go, Rust, Solidity, TypeScript, Java/Spring, Ethereum/EVM, EigenLayer, Kafka, PostgreSQL, Redis
- **Education:** B.Tech, Computer Science - Delhi College of Engineering (now Delhi Technological University)
- **Focus areas:** liquid staking & restaking, on-chain/off-chain settlement, card & payment rails, cross-border payments, stablecoins, smart contracts (EVM / Solana / CosmWasm) - plus AI inference infrastructure (vLLM) on the open-source side
- **Open source:** active contributor across blockchain & crypto infrastructure - merged into [Optimism](https://github.com/ethereum-optimism/optimism/pull/21127) (OP Stack), [revm](https://github.com/bluealloy/revm/pull/3735) (the EVM behind Foundry & reth), [alloy](https://github.com/alloy-rs/core/pull/1118) (the Rust Ethereum-types & `sol!` toolkit), [celestia-node](https://github.com/celestiaorg/celestia-node/pull/5041) and [ethrex](https://github.com/lambdaclass/ethrex/pull/6786), with further merges in AI-inference infra - [vLLM](https://github.com/vllm-project/vllm/pull/44942), [SGLang](https://github.com/sgl-project/sglang/pull/27430), [AIBrix](https://github.com/vllm-project/aibrix/pull/2384), [mistral.rs](https://github.com/EricLBuehler/mistral.rs/pull/2250), [llguidance](https://github.com/guidance-ai/llguidance/pull/357) and [mcp-go](https://github.com/mark3labs/mcp-go/pull/904)

---

## Experience

### ether.fi - Senior Backend Engineer, Card & Vault Products
`2026 – Present`

Building ether.fi Cash, a non-custodial Visa crypto card on liquid-restaking infrastructure where users spend ETH/USDC while their assets continue earning restaking yield.

- Own real-time settlement bridging Visa rails and on-chain vaults (authorization, capture, reconciliation).
- Built the Borrow Mode backend - USDC borrowing against eETH collateral via lending-pool integration.
- Designed an event-driven cashback pipeline (wETH rewards) on Kafka.
- Hardened KYC/AML and risk monitoring with chain-analytics providers; extended multi-chain support across Ethereum L1 and L2s.

*Go · Solidity · Ethereum · EigenLayer · Kafka · PostgreSQL · Redis*

### Visa - Senior Software Engineer, Payments & Crypto Initiative
`2022 – 2026`

Worked across traditional cross-border payments and Visa's stablecoin / crypto initiative - the bridge between card networks and digital assets.

- Led an 8-engineer team on a real-time payments platform (monolith plus eight microservices) sustaining 2,000+ TPS at 99.98% uptime.
- Delivered Treasury as a Service for the APAC hub - 15 currencies, clients in 60+ countries, powering roughly 80% of APAC liquidity flows through Visa Direct A2A.
- Built the Network Validations Framework - configurable payer/beneficiary identity checks across 100+ SWIFT message types.
- Prototyped on-chain payment settlement in Solidity and Solana as part of the crypto/stablecoin track.

*Java · Spring Boot · Solidity · Rust · RabbitMQ · Hazelcast · Docker · Kubernetes*

### Stader Labs - Software Engineer, Founding Team
`2021 – 2022`

Joined as an intern during the final years of my degree at Delhi College of Engineering and grew into a founding member of a ~7-person team building a multi-chain liquid-staking protocol.

- Built Rust / CosmWasm smart contracts powering liquidity pools that scaled past $500M+ in staked assets across multiple chains.
- Led gas-fee analysis and optimization - benchmarking storage and swap costs on Terra/CosmWasm to keep contract execution economical at scale.
- Built a validator analytics platform monitoring 1M+ nodes (React, MongoDB, Ethereum APIs) and APR dashboards.
- Designed cross-chain architecture and on-chain/off-chain synchronization pipelines.

*Rust · CosmWasm · TypeScript · Python · React · MongoDB*

---

## OSS and Research

**Research**

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.20574905.svg)](https://doi.org/10.5281/zenodo.20574905)

**StragglerPolicy: Straggler-Aware Elastic Membership for Decentralized Training** *(Zenodo, 2026)* - a zero-GPU discrete-event simulator of DiLoCo-style decentralized ML training plus a straggler-aware membership policy for *slow-but-alive* nodes that existing decentralized-training stacks don't handle. **4.59× faster** than the baseline on a persistent-straggler scenario, validated against a `torch.distributed`/gloo DiLoCo loop. [Paper](https://doi.org/10.5281/zenodo.20574905) · [Code - pjdurden/churn](https://github.com/pjdurden/churn)

**Upstream contributions** - merged fixes in widely-used open-source infrastructure:

| Project | Contribution |
|---|---|
| [Optimism](https://github.com/ethereum-optimism/optimism/pull/21127) | The **OP Stack** monorepo powering Ethereum L2s (Base, OP Mainnet) - fixed an `op-wheel` metrics bug that wrote block gas twice and left the base-fee gauge unset ([#21127](https://github.com/ethereum-optimism/optimism/pull/21127)). |
| [revm](https://github.com/bluealloy/revm/pull/3735) | The Rust **EVM behind Foundry & reth** - removed a const-eval panic path in the stack interpreter ([#3735](https://github.com/bluealloy/revm/pull/3735)). |
| [alloy](https://github.com/alloy-rs/core/pull/1118) | The Rust **Ethereum-types & `sol!` toolkit** used across Foundry, reth and the wider Rust EVM ecosystem - the `sol!` macro silently dropped `Debug`/`PartialEq`/`Eq`/`Hash` derives on the event/error enums it generates for contracts with overloaded events (e.g. Uniswap V3's two `Swap` events), because synthetic `_N`-suffixed variant names didn't resolve; fixed it to compute derivability from the underlying parameter types ([#1118](https://github.com/alloy-rs/core/pull/1118)). |
| [celestia-node](https://github.com/celestiaorg/celestia-node/pull/5041) | The Go node for the **Celestia** data-availability layer - unified the header `TestSuite` constructors behind functional options ([#5041](https://github.com/celestiaorg/celestia-node/pull/5041)). |
| [ethrex](https://github.com/lambdaclass/ethrex/pull/6786) | The Rust **Ethereum L1/L2 execution client** by LambdaClass - replaced a too-broad `datadir non-empty` startup check with an actual-DB probe, so unrelated files (e.g. an EthDocker JWT secret) no longer block a fresh node from booting ([#6786](https://github.com/lambdaclass/ethrex/pull/6786)). |
| [mcp-go](https://github.com/mark3labs/mcp-go/pull/904) | The leading Go implementation of the **Model Context Protocol (MCP)** - fixed `getServerMetadata` returning `(nil, nil)` instead of an error, closing a silent-failure path in OAuth discovery ([#904](https://github.com/mark3labs/mcp-go/pull/904)). |
| [vLLM](https://github.com/vllm-project/vllm/pull/44942) | The standard high-throughput **LLM inference & serving engine** - build-correctness fix in the precompiled-flag test suite ([#44942](https://github.com/vllm-project/vllm/pull/44942)). |
| [SGLang](https://github.com/sgl-project/sglang/pull/27430) | High-throughput **LLM/VLM serving engine** - fixed the prefill/decode router's cache-aware routing keying chat requests on the first message only; routing on the full conversation lifted KV-cache hits from **~69% to ~96%** and output throughput from **~678 to ~1078 TPS** ([#27430](https://github.com/sgl-project/sglang/pull/27430)). |
| [AIBrix](https://github.com/vllm-project/aibrix/pull/2384) | The vLLM project's **Kubernetes-native LLM-serving** control plane - fixed the ZMQ KV-event decoder dropping `group_idx`/`medium`/`lora_name` from vLLM's `BlockStored` event, which caused false prefix-cache matches on hybrid-attention models ([#2384](https://github.com/vllm-project/aibrix/pull/2384)), and made the KV-event indexer purge a pod's cached prefixes on `AllBlocksCleared` so evicted blocks are no longer served as stale cache hits ([#2385](https://github.com/vllm-project/aibrix/pull/2385)). |
| [mistral.rs](https://github.com/EricLBuehler/mistral.rs/pull/2250) | The Rust **LLM inference & serving engine**: fixed reversed FCFS priority in the `PagedAttentionScheduler` preemption path so the oldest request is preempted last ([#2250](https://github.com/EricLBuehler/mistral.rs/pull/2250)), and validated GGUF special-token ids against the vocab to prevent an out-of-bounds panic on model load ([#2282](https://github.com/EricLBuehler/mistral.rs/pull/2282)). |
| [llguidance](https://github.com/guidance-ai/llguidance/pull/357) | The **constrained-decoding engine** behind structured / JSON-Schema output in vLLM, SGLang and llama.cpp - fixed `multipleOf` rejecting negative multiples ([#357](https://github.com/guidance-ai/llguidance/pull/357)) and made `max_tokens=0` rules compile to the empty string ([#356](https://github.com/guidance-ai/llguidance/pull/356)). |
| [Meilisearch](https://github.com/meilisearch/meilisearch/pull/6437) | Rust search engine (58K★) - fixed a ranking-rules ordering bug that silently dropped matching hits ([#6437](https://github.com/meilisearch/meilisearch/pull/6437)). |

**Personal projects**

| Project | Description |
|---|---|
| [kv-canary](https://github.com/pjdurden/kv-canary) | A canary for **silent KV-cache-compression failures** - functional accuracy (code execution / tool-calls) vs perplexity under quantization & token eviction, scored by a Silent Degradation Score. |
| [churn - StragglerPolicy](https://github.com/pjdurden/churn) | Deterministic discrete-event simulator of elastic-membership decentralized ML training, plus the straggler-aware membership policy behind the paper above. |
| [CoinSwap (CosmWasm + Terraswap)](https://github.com/pjdurden/CoinSwap-using-Cosmwasm-and-Terraswap) | DEX swap contract for LUNA/UST/CW20 tokens, with a gas-fee analysis tool for the Terra blockchain. |
| [Gas-Fee Benchmark (cw-storage-plus / Terraswap)](https://github.com/pjdurden/Gas_analysis_cw_storage_plus_terraswap) | Benchmarking contract measuring gas costs of storage patterns on Terra/CosmWasm. |
| [friendly-neighbourhood-6502](https://github.com/pjdurden/friendly-neighbourhood-6502) | **Bare-metal systems** - cycle-accurate 6502 CPU emulator down to bus/processor pins, addressing modes, and internal functions, with an OpenGL / Pixel Game Engine graphics frontend. |
| [Solana Payment System](https://github.com/pjdurden/Solana-PaymentSystem-Visa) | Rust payment-settlement program deployed on Solana. |
| [Stader APR Dashboard](https://github.com/pjdurden/Stader-Apr-Dashboard-) | React dashboard surfacing staking APR and validator analytics. |
| [Veri5](https://github.com/pjdurden/veri5-mvp) | Real-time identity and account verification API for cross-border payments. |

---

## Technical Skills

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

---

## Competitive Programming

Achieved **Codeforces Expert** during university (pre-2022, before AI coding assistants) - a credential earned through unassisted algorithmic problem-solving under contest conditions.

- **Codeforces** - Expert · [pjdurden](https://codeforces.com/profile/pjdurden)
- **CodeChef** - peak rating 1890 · [pjdurden](https://www.codechef.com/users/pjdurden)
- **LeetCode** - peak rating 1679 · [Pjdope](https://leetcode.com/Pjdope/)
- **[Code-A-Thon](https://dare2compete.com/hackathon/1022-code-a-thon-code-a-thon/details)** - Rank 5 (College Rank 1)
- Cleared the Facebook Hacker Cup Qualification Round (2020); Google Kick Start Round B (2021).
- Mentored 300+ students in algorithms and software engineering through [GirlScript](https://www.girlscript.tech/about).
