> 本文是 [README.md](README.md) 的中文翻译版本。

<div align="center">

<img src="Semantica Logo.png" alt="Semantica" width="420"/>

<div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
  <a href="https://trendshift.io/repositories/18986?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-18986" target="_blank" rel="noopener noreferrer">
    <img src="https://trendshift.io/api/badge/repositories/18986" alt="semantica-agi/semantica | Trendshift" width="250" height="55"/>
  </a>

  <a href="https://trendshift.io/repositories/18986?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-18986" target="_blank" rel="noopener noreferrer">
    <img src="https://trendshift.io/api/badge/trendshift/repositories/18986/weekly?language=Python" alt="semantica-agi/semantica | Trendshift" width="250" height="55"/>
  </a>
</div>

### 面向上下文和可问责 AI 系统的图原生基础设施

#### *开源版 Palantir，为 AI Agent 而生*

> 导入企业数据，提取关键信息，构建上下文图（Context Graph）和知识图谱（KG），并在此基础上运行图分析与因果推理——所有决策全程附带溯源记录。可解释、可追踪、天然可信。

**决策智能 &nbsp;·&nbsp; 上下文管理 &nbsp;·&nbsp; 确定性推理 &nbsp;·&nbsp; 本体管理 &nbsp;·&nbsp; 知识建模 &nbsp;·&nbsp; 端到端可追溯**

**开源 &nbsp;·&nbsp; 可自托管 &nbsp;·&nbsp; 可审计 &nbsp;·&nbsp; 可治理 &nbsp;·&nbsp; 零厂商锁定**

**多存储引擎 &nbsp;·&nbsp; RDF & LPG 支持 &nbsp;·&nbsp; W3C 标准 &nbsp;·&nbsp; 可互操作**

#### 为高风险监管领域而构建

[![GitHub Stars](https://img.shields.io/github/stars/semantica-agi/semantica?style=flat-square&color=FFD700&logo=github&logoColor=white&label=Stars)](https://github.com/semantica-agi/semantica) [![GitHub Forks](https://img.shields.io/github/forks/semantica-agi/semantica?style=flat-square&color=6E40C9&logo=github&logoColor=white&label=Forks)](https://github.com/semantica-agi/semantica/network/members) [![Contributors](https://img.shields.io/github/contributors/semantica-agi/semantica?style=flat-square&color=2EA043&logo=github&logoColor=white)](https://github.com/semantica-agi/semantica/graphs/contributors) [![PyPI](https://img.shields.io/pypi/v/semantica.svg?style=flat-square&color=0066CC&logo=pypi&logoColor=white)](https://pypi.org/project/semantica/) [![Total Downloads](https://static.pepy.tech/badge/semantica?style=flat-square)](https://pepy.tech/project/semantica) [![Python 3.8+](https://img.shields.io/badge/python-3.8+-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![CI](https://img.shields.io/github/actions/workflow/status/semantica-agi/semantica/ci.yml?style=flat-square&label=CI)](https://github.com/semantica-agi/semantica/actions) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/semantica-agi/semantica)

[![Website](https://img.shields.io/badge/Website-getsemantica.ai-000000?style=flat-square&logo=googlechrome&logoColor=white)](https://getsemantica.ai/) [![Docs](https://img.shields.io/badge/Docs-docs.getsemantica.ai-0099FF?style=flat-square&logo=readthedocs&logoColor=white)](https://docs.getsemantica.ai/) [![Discord](https://img.shields.io/badge/Discord-Join%20Community-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/sV34vps5hH) [![Twitter/X](https://img.shields.io/badge/Follow-%40BuildSemantica-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/BuildSemantica) [![YouTube](https://img.shields.io/badge/YouTube-Watch%20Demos-FF0000?style=flat-square&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=QfnNZg4-dZA) [![Changelog](https://img.shields.io/badge/Changelog-View-6E40C9?style=flat-square&logo=keepachangelog&logoColor=white)](CHANGELOG.md)

```bash
pip install semantica
```

</div>

---

<div align="center">

<a href="https://www.youtube.com/watch?v=QfnNZg4-dZA" target="_blank">
<img
  src="docs/assets/img/semantica-knowledge-explorer-demo.gif"
  alt="Semantica Knowledge Explorer: live graph, decisions, entity resolution, ontology hub"
  width="900"
/>
</a>

*Knowledge Explorer · 上下文图 · 推理引擎 · 决策智能 · 本体中心*

**[▶ 观看完整平台演示](https://www.youtube.com/watch?v=QfnNZg4-dZA)**

</div>

---

大多数 AI Agent 在行动时不会留下痕迹。它们存储的是 embedding（向量嵌入），而非语义：上下文无法被解释，决策无法被审计。在信贷领域，这种缺失是合规风险而非不便——一个承保 Agent 的审批决定需要在数月后经得住监管机构的追问。

Semantica 作为确定性基础设施层，位于你的 LLM（大语言模型）、向量数据库和 Agent 框架之下：图构建、推理和溯源**无需 LLM** 即可运行。

> ⚠️ **这是系统级可解释性，而非基础模型可解释性。** Semantica 不会暴露或重建 LLM *内部*发生的事情——其内部推理或思维链对外部系统来说始终是不透明的。Semantica 解释的是模型*外部*的一切：输入的上下文和数据、产生的决策、决策的溯源、相关关系、应用的策略，以及完整的执行轨迹。

**适用人群：**

- **AI/ML 平台团队**：需要将碎片化原始数据构建为结构化、可查询的上下文，而不仅仅是向量索引，用以支撑做出重大决策的 Agent
- **Databricks 或 Snowflake 上的数据平台团队**：需要将已存在于 Unity Catalog 或 Snowflake 仓库中的表转化为治理完善、可追溯的知识图谱，而无需先将数据导出到第三方 SaaS
- **合规、风控和审计团队**：需要一个"AI 为什么这样做？"的明确答案，且格式必须是监管机构能接受的
- **受监管企业**（金融、医疗、法律、政府、国防）：不能上线黑盒系统，也不能把数据交给别人的 SaaS
- **平台和基础设施工程师**：希望知识图谱、推理和溯源栈可自托管、可替换，而非被锁定在某个供应商的后端
- **数据和知识工程师**：从混乱的多源数据构建知识图谱——实体和关系被提取，矛盾或冲突的事实被标记而非被静默覆盖，重复项在变成噪声之前就被合并

**[快速开始](#quick-start)** &nbsp;·&nbsp; **[架构](#architecture)** &nbsp;·&nbsp; **[核心能力](#what-semantica-gives-you)** &nbsp;·&nbsp; **[为什么选 Semantica](#why-semantica)** &nbsp;·&nbsp; **[决策智能](#decision-intelligence)** &nbsp;·&nbsp; **[上下文图](#context-graphs)** &nbsp;·&nbsp; **[示例：审计追踪](#recipe-audit-trail-for-a-regulated-decision)** &nbsp;·&nbsp; **[模块参考](#module-reference)** &nbsp;·&nbsp; **[集成](#integrations)** &nbsp;·&nbsp; **[CLI](#cli)** &nbsp;·&nbsp; **[性能](#performance)** &nbsp;·&nbsp; **[安装](#installation)**

---

## Semantica 的核心能力

- **上下文图（Context Graphs）：** 结构化、可查询的图，涵盖你的 Agent 所知道的、决定的和推理的一切
- **决策智能（Decision Intelligence）：** 每个决策都是一等对象：可追踪、可按先例搜索、因果关联
- **AI 治理与本体：** SHACL 约束、冲突检测、合规规则、OWL 生成，以及带有可视化编辑器的 SKOS 词表管理
- **全面可审计性：** 每个事实都附带 W3C PROV-O（溯源本体）溯源，审计追踪可导出为 JSON、CSV 或 RDF
- **确定性推理：** 前向链、Rete 网络（高效模式匹配引擎）、Datalog（逻辑编程语言）和 SPARQL（RDF 查询语言），路径完全可解释，不是黑盒
- **知识管道：** 多源摄入、实体感知分块、NER（命名实体识别）/关系/事件提取，以及知识图谱构建——全程附带语义去重和保留溯源的合并
- **企业数据平台：** 原生 Databricks（Unity Catalog + Delta Lake，PAT/OAuth M2M 认证，目录/模式/表/血缘内省）和 Snowflake（仓库/数据库/模式，密钥对和 OAuth 认证）连接器——已存在于数据湖仓或数据仓库中的表直接成为带溯源的图节点，无需额外导入导出
- **图分析：** 中心性、社区检测、链接预测和最短路径查询，直接在你构建的图上运行
- **多存储引擎：** 原生 RDF（内嵌 Oxigraph、Blazegraph、Apache Jena、Eclipse RDF4J，通过 SPARQL）和标签属性图（Neo4j、FalkorDB、Apache AGE、AWS Neptune，通过 Cypher），以及向量数据库，全部可替换而无需修改代码
- **可视化：** 在交互式浏览器工作台中探索任意图、本体或时间线
- **即插即用集成：** 原生 Agno 和 CrewAI 支持、功能完整的 MCP 服务器、全面的 CLI、REST API，以及主流编辑器插件

---

## 为什么选 Semantica

| | 向量数据库 + RAG | 纯 LLM 记忆 | **Semantica** |
| --- | --- | --- | --- |
| **检索方式** | 嵌入相似度 | Token 窗口 | 图遍历 + 语义搜索 |
| **决策历史** | 未存储 | 未存储 | 一等可查询对象 |
| **溯源** | 无 | 无 | W3C PROV-O，关联到源 |
| **推理** | 无 | 黑盒 | 前向链、Rete、Datalog、SPARQL |
| **冲突检测** | 静默覆盖 | 静默覆盖 | 检测、标记、解决 |
| **时间旅行** | 不支持 | 不支持 | 按时间点的图快照 |
| **合规导出** | 无 | 无 | PROV-O、SHACL、OWL、RDF |
| **策略执行** | 无 | 无 | 内置规则引擎 + SHACL |
| **实体消歧** | 不支持 | 不支持 | 分块 + 语义去重 |
| **多 Agent 上下文** | 各 Agent 独立 | 各 Agent 独立 | 单一共享智能层 |

Semantica 补充而非替代你现有的技术栈。保持你的 LLM、向量数据库和 Agent 框架不变；Semantica 在此基础上增加决策记录、因果推理、溯源、本体治理、冲突检测和审计追踪。推理引擎、知识图谱构建和溯源层完全是确定性的，使用它们无需 LLM。

---

## 快速开始

```bash
pip install semantica
```

```python
from semantica.context import ContextGraph

graph = ContextGraph(advanced_analytics=True)

# 每个 Agent 决策都成为可查询、可审计的知识节点
decision_id = graph.record_decision(
    category="vendor_selection",
    scenario="Choose cloud provider for HIPAA workload",
    reasoning="AWS offers BAA, mature HIPAA tooling, and existing team expertise",
    outcome="selected_aws",
    confidence=0.93,
)

# 问"为什么会这样？"并获得真实的结构化答案
chain     = graph.trace_decision_chain(decision_id)       # 完整因果链
similar   = graph.find_similar_decisions("cloud vendor", max_results=5)  # 先例
impact    = graph.analyze_decision_impact(decision_id)    # 下游影响图
compliant = graph.check_decision_rules({"category": "vendor_selection"})  # 策略门控
```

**5 秒验证安装：**

```bash
semantica doctor
# Python 3.11.9         pass
# semantica 0.6.5       pass
# faiss vector store    pass
# Config file           pass    ~/.semantica/config.yaml
```

<div align="center">

如果 Semantica 为你解决了实际问题，一颗星能帮助更多人发现它。

**[⭐ 在 GitHub 上 Star](https://github.com/semantica-agi/semantica)** &nbsp;·&nbsp; **[加入 Discord](https://discord.gg/sV34vps5hH)**

</div>

---

## 架构

Semantica 是一个真正的端到端管道，而非一个冠以营销名称的单一库。下面的每个阶段都是独立可导入的模块：

```
Sources → Ingest → Parse → Normalize → Split → Extract → Conflict Detection → Deduplication
   → Knowledge Graph → [ Ontology · Reasoning · Provenance · Decisions ] → Enriched KG
   → Vector Store + Polyglot Graph Store (RDF & LPG) → Export / Visualize / REST · MCP · CLI
```

- **摄入（Ingest）：** 文件、网页、数据库、企业数据平台（Databricks、Snowflake）、云（Google Drive、Elasticsearch）、流（Kafka、Kinesis）、Git、邮件、MCP
- **解析 → 规范化 → 分块：** 文档解析、文本/实体/日期规范化、GraphRAG 原生的实体感知分块
- **提取 → 冲突检测 → 去重：** NER、关系、事件、三元组；冲突事实在合并前被标记并解决
- **知识图谱：** `GraphBuilder` 构建图；双时态事实和完整图分析（中心性、社区、链接预测）在其上运行
- **本体 · 推理 · 溯源 · 决策：** 位于知识图谱之上的智能层，包含 SHACL/OWL 治理、Rete/Datalog/SPARQL 推理、W3C PROV-O 血缘和一等决策记录
- **存储：** 设计上支持多存储引擎——RDF 三元组存储（内嵌 Oxigraph、Blazegraph、Apache Jena、Eclipse RDF4J）、标签属性图（Neo4j、FalkorDB、Apache AGE、AWS Neptune）和向量数据库，全部可替换而无需修改代码
- **输出：** 导出（RDF、OWL、Parquet、Cypher、JSON-LD）、交互式可视化，以及通过 REST API、MCP 服务器或 CLI 访问

**→ [管道和决策智能生命周期的完整 Mermaid 图](ARCHITECTURE.md)**

---

## 决策智能

决策智能将每一个 AI 选择从短暂的推理结果转化为永久的、可审计的、可查询的记录。它回答的是 *"你的 AI 做了什么决定、为什么、后续发生了什么？"*——这正是监管机构和企业风控团队越来越迫切想知道的问题。

在 Semantica 中，决策不是一行日志，而是一个拥有完整生命周期的一等图节点。在受监管领域，每个 AI 决策都必须可追溯到源头，且能向审计人员自证：`record_decision()` 创建永久的结构化记录，可导出为 W3C PROV-O 格式——这是大多数合规框架接受的监管提交格式。

```
record_decision()             → 作为带有完整结构化上下文的图节点存储
add_causal_relationship()     → 与上游原因和下游效果关联
find_similar_decisions()      → 在所有历史决策中进行语义先例搜索
trace_decision_chain()        → 追溯完整因果链直到根因
analyze_decision_impact()     → 下游影响图——该决策影响的一切
check_decision_rules()        → 基于可配置规则集的策略合规门控
export / audit trail          → W3C PROV-O、CSV 或 JSON，供监管提交
```

```python
from semantica.context import ContextGraph

graph = ContextGraph(advanced_analytics=True)

# 记录带有完整结构化上下文的决策
app_id = graph.record_decision(
    category="credit_application",
    scenario="Personal loan, $85k income, 31% DTI, 3yr employment",
    reasoning="Income meets threshold; employment stable; no adverse credit events",
    outcome="proceed_to_underwriting",
    confidence=0.88,
    metadata={"applicant_id": "A-7291"},
)
uw_id = graph.record_decision(
    category="loan_underwriting",
    scenario="Underwriting review for A-7291",
    reasoning="DTI within policy; clean 36-month credit history",
    outcome="approved",
    confidence=0.94,
)
rate_id = graph.record_decision(
    category="interest_rate",
    scenario="Rate assignment for approved loan A-7291",
    outcome="rate_set_8.9pct",
    reasoning="Prime + 2.4% based on risk tier B2",
    confidence=0.99,
)

# 构建可审计的因果链 - relationship_type 必须是
# CAUSED、INFLUENCED 或 PRECEDENT_FOR 之一
graph.add_causal_relationship(app_id, uw_id,   relationship_type="CAUSED")
graph.add_causal_relationship(uw_id,  rate_id, relationship_type="INFLUENCED")

# 查询智能
chain     = graph.trace_decision_chain(rate_id)
similar   = graph.find_similar_decisions("personal loan approval, 31% DTI", max_results=5)
impact    = graph.analyze_decision_impact(uw_id)
compliant = graph.check_decision_rules({"category": "loan_underwriting", "confidence": 0.94})
insights  = graph.get_decision_insights()
```

---

## 上下文图

上下文图（Context Graph）是传统 RAG 所缺失的结构化记忆层。它不是回答 *"什么是相似的？"* 的扁平 embedding，而是回答 *"什么是关联的、为什么关联、如何关联？"* 每个实体、关系、决策和事实都是一等节点，可通过图遍历查询。实体链接到源文档，决策链接到证据和后果，事实携带完整溯源，冲突被检测而非被静默覆盖。

```python
from semantica.context import ContextGraph, AgentContext
from semantica.vector_store import VectorStore

graph = ContextGraph(advanced_analytics=True)

# 添加带有类型化属性的节点
graph.add_node("acme_corp",    "Organization", name="Acme Corp", industry="SaaS")
graph.add_node("alice_chen",   "Person",       name="Alice Chen", role="CTO")
graph.add_node("contract_001", "Contract",     value=2_400_000, currency="USD")

# 添加类型化、加权的边（额外的 kwargs 成为边的元数据）
graph.add_edge("alice_chen", "acme_corp",    edge_type="works_for",  since="2019-03-01")
graph.add_edge("acme_corp",  "contract_001", edge_type="party_to",   signed="2024-01-15")

# BFS 遍历 - 从任意节点跳转
neighbors = graph.get_neighbors("acme_corp", hops=2)

# 按时间点快照 - 图在过去任意日期的状态
snapshot  = graph.state_at("2024-01-01")

# AgentContext - 面向 Agent 记忆工作流的高层 API
vs  = VectorStore(backend="faiss")
ctx = AgentContext(vector_store=vs, knowledge_graph=graph)
ctx.store("Alice approved the Acme renewal in Q1 2024", conversation_id="conv_001")
retrieved = ctx.retrieve("who approved the Acme contract?")
```

**为什么图优于 embedding：** 遍历能发现 embedding 遗漏的关联（比如一个人与合同之间隔了 3 跳）；每个节点都携带溯源，你随时可以问 *"这个从哪来的？"*；冲突在破坏知识库之前就被标记；时间点快照让你无需重新处理即可回放历史。

---

## 示例：受监管决策的审计追踪

核心模式：记录因果关联的决策链，为每个实体附加溯源，并导出监管就绪的审计追踪。

```python
from semantica.context import ContextGraph
from semantica.provenance import ProvenanceManager
from semantica.export import RDFExporter

graph = ContextGraph(advanced_analytics=True)
prov  = ProvenanceManager(storage_path="./audit.db")

# 记录决策链
d1 = graph.record_decision(
    category="drug_interaction_check", scenario="Patient P-4821: warfarin + amiodarone co-prescribed",
    reasoning="Amiodarone potentiates warfarin's anticoagulant effect", outcome="flag_for_review", confidence=0.91,
)
d2 = graph.record_decision(
    category="dosage_adjustment", scenario="INR monitoring plan for P-4821",
    reasoning="Reduce warfarin dose per interaction severity; recheck INR in 5 days", outcome="dose_reduced_30pct", confidence=0.87,
)
# relationship_type 必须是 CAUSED、INFLUENCED 或 PRECEDENT_FOR 之一
graph.add_causal_relationship(d1, d2, relationship_type="CAUSED")

# 为每个实体追踪溯源
prov.track_entity("patient_P4821", source="ehr/medication_orders_2024.json",
                  metadata={"extractor": "NamedEntityRecognizer"})

# 导出 W3C PROV-O 供监管提交 - to_kg_dict() 是官方适配器，
# 输出 {"entities": [...], "relationships": [...]} / source_id 格式，
# 即 RDFExporter 期望的结构，无需手动字段映射
kg = graph.to_kg_dict()
RDFExporter().export(kg, "audit_trail.ttl", format="turtle")
```

更多示例（GraphRAG 管道、反洗钱规则引擎、一次性从本体到知识图谱）请参见下方的 **[更多示例](#more-recipes)**。

---

## 探索平台

下面的每个模块都可以独立导入，附带的代码示例已针对当前源码树验证；可单独使用或组合使用。

| 模块 | 功能 |
| --- | --- |
| [`semantica.ingest`](#semanticaingest-multi-source-ingestion) | 文件、网页、数据库、API、流、邮件、Git、Parquet、Databricks、Snowflake、MCP |
| [`semantica.semantic_extract`](#semanticasemantic_extract-ner-relations-events-triplets) | NER、关系提取、事件检测、三元组生成 |
| [`semantica.kg`](#semanticakg-knowledge-graph-construction--analysis) | 图构建、中心性、社区、链接预测 |
| [`semantica.reasoning`](#semanticareasoning-forward-chaining-rete-datalog-sparql) | 前向链、Rete、Datalog、SPARQL，完全可解释 |
| [`semantica.vector_store`](#semanticavector_store-hybrid--filtered-semantic-search) | FAISS、Qdrant、Weaviate、Milvus、Pinecone、PgVector、混合搜索 |
| [`semantica.split`](#semanticasplit-graphrag-native-document-chunking) | 面向 GraphRAG 的实体感知、关系感知、本体感知分块 |
| [`semantica.provenance`](#semanticaprovenance-w3c-prov-o-lineage) | 每个事实的 W3C PROV-O 血缘 |
| [`semantica.ontology`](#semanticaontology-owl-generation-shacl-validation) | OWL 生成、SHACL 验证、SKOS 词表 |
| [`semantica.conflicts`](#semanticaconflicts-conflict-detection--resolution) | 检测和解决跨来源的冲突事实 |
| [`semantica.deduplication`](#semanticadeduplication-entity-resolution-at-scale) | 大规模实体消歧 |
| [`semantica.normalize`](#semanticanormalize-data-normalization--cleaning) | 文本、实体、日期和数字规范化；数据集清洗 |
| [`semantica.pipeline`](#semanticapipeline-pipeline-dsl) | 声明式、并行管道 DSL：摄入 → 提取 → 构建 → 导出 |
| [`semantica.export`](#semanticaexport-rdf-owl-parquet-cypher-json-ld) | RDF、OWL、Parquet、Cypher、JSON-LD |
| [`semantica.visualization`](#semanticavisualization-interactive-graph-workbench) | 力导向图、本体层次结构、时间仪表盘 |
| [时态智能](#temporal-intelligence-bi-temporal-graphs--time-travel) | 双时态事实、Allen 区间代数、时间旅行 |
| [多 Agent（Agno）](#multi-agent-shared-context-with-agno) | 团队中所有 Agent 共享一个上下文图 |

**↓ 展开下方 [模块参考](#module-reference)** 查看每个模块的可运行示例，或跳转到 [更多示例](#more-recipes)、完整的 [集成](#integrations) 矩阵、[MCP 工具列表](#mcp-server) 和 [REST 端点](#rest-api)。

---

## 模块参考

展开任意模块查看可运行示例。

<details>
<summary><b><code>semantica.ingest</code></b>：多源摄入</summary>
<a id="semanticaingest-multi-source-ingestion"></a>

通过统一接口从文件、网页、数据库、API、流、邮件、Git 仓库、Parquet、Databricks、Snowflake 或 MCP 服务器进行摄入。

```python
from semantica.ingest import FileIngestor, WebIngestor, ParquetIngestor, DBIngestor

# 摄入整个合同目录（PDF、DOCX、HTML、TXT）
docs = FileIngestor().ingest_directory("./contracts/", recursive=True)

# 摄入实时网页内容，遵守 robots.txt
pages = WebIngestor().ingest_url("https://example.com/reports/annual-2024.html")

# 从 Snappy 压缩的 Parquet 摄入结构化数据
records = ParquetIngestor().ingest("./data/transactions.parquet")

# 从 SQL 数据库摄入 - 指定要拉取的表
rows = DBIngestor().ingest_database(
    connection_string="postgresql://user:pass@localhost/mydb",
    include_tables=["customer_events"],
    max_rows_per_table=50_000,
)
```

```python
# 企业数据平台 - 直接从数据湖仓或数据仓库拉取表并附带血缘，
# 而非先导出为 CSV
from semantica.ingest import DatabricksIngestor, SnowflakeIngestor

# pip install "semantica[db-databricks]"
databricks = DatabricksIngestor(
    host="https://adb-xxx.azuredatabricks.net",
    token="dapi-xxxxxxxx",              # 或 client_id/client_secret 用于 OAuth M2M
    http_path="/sql/1.0/warehouses/xxxxxxxx",
    catalog="main",
)
customers    = databricks.ingest_table("customers", limit=10_000)
sales        = databricks.ingest_query("SELECT * FROM sales WHERE region = 'EMEA'")
table_lineage = databricks.get_table_lineage("customers", catalog="main", schema="default")  # Unity Catalog 血缘

# pip install semantica[db-snowflake]
snowflake = SnowflakeIngestor(
    account="myaccount",
    user="myuser",
    password="mypassword",              # 或 private_key=... 用于密钥对；使用 authenticator="oauth", token=... 用于 OAuth
    warehouse="COMPUTE_WH",
    database="MYDB",
)
orders = snowflake.ingest_table("ORDERS", limit=10_000)
```

> **安全提示：** 生产代码中切勿硬编码凭据（`token`、`password`、`private_key`）；通过环境变量（如 `DATABRICKS_TOKEN`、`SNOWFLAKE_PASSWORD`）或密钥管理器传入。

**支持的数据源：** 本地文件（PDF、DOCX、PPTX、HTML、TXT、CSV、JSON、YAML、Excel、XML）· 网页 · RSS/Atom 订阅 · REST API · 数据库（PostgreSQL、MySQL、SQLite、Oracle、SQL Server）· Parquet 数据集 · Databricks（Unity Catalog + Delta Lake）· Snowflake · Git 仓库 · 邮件（IMAP/POP3）· 消息流（Kafka、RabbitMQ、Kinesis、Pulsar）· MCP 资源 · Apache Arrow/Feather/IPC（`ArrowIngestor`）

DuckDB、Elasticsearch、Google Drive、HuggingFace、MongoDB 和 Pandas 摄入器也已发布（`DuckDBIngestor`、`ElasticIngestor`、`GDriveIngestor`、`HuggingFaceIngestor`、`MongoIngestor`、`PandasIngestor`），但尚未从顶层 `semantica.ingest` 命名空间重新导出——请直接导入：`from semantica.ingest.duckdb_ingestor import DuckDBIngestor`。

</details>

<details>
<summary><b><code>semantica.semantic_extract</code></b>：NER、关系、事件、三元组</summary>
<a id="semanticasemantic_extract-ner-relations-events-triplets"></a>

一次性从原始文本中提取结构化知识。

```python
from semantica.semantic_extract import (
    NamedEntityRecognizer,
    RelationExtractor,
    EventDetector,
    TripletExtractor,
)

text = """
Anthropic CEO Dario Amodei announced a $7.3B Series E funding round in partnership
with Google and Spark Capital, valuing the company at $61.5B as of Q4 2024.
"""

# 带有置信度阈值的命名实体识别
ner = NamedEntityRecognizer(confidence_threshold=0.7)
entities = ner.extract_entities(text)
# → [Entity(name="Dario Amodei", type="PERSON"), Entity(name="Anthropic", type="ORG"),
#    Entity(name="Google", type="ORG"), Entity(name="$7.3B", type="MONEY"), ...]

# 关系提取 - 支持双向
rel_extractor = RelationExtractor(confidence_threshold=0.6, bidirectional=True)
relations = rel_extractor.extract_relations(text, entities=entities)
# → [Relation(subject="Dario Amodei", predicate="ceo_of", object="Anthropic"),
#    Relation(subject="Anthropic", predicate="raised", object="$7.3B Series E"), ...]

# 事件检测，带时间处理
events = EventDetector(extract_participants=True, extract_time=True).detect_events(text)
# → [Event(type="FUNDING", participants=["Anthropic","Google","Spark Capital"],
#          amount="$7.3B", date="Q4 2024")]

# RDF 三元组，带可选溯源元数据
triplets = TripletExtractor(include_temporal=True, include_provenance=True).extract_triplets(text)
# → [("Anthropic", "valuation", "$61.5B"), ("Dario Amodei", "is_ceo_of", "Anthropic"), ...]
```

多文档批量处理使用 `ner.process_batch([...])`，而非在门面类上逐次调用 `extract_entities_batch`。

</details>

<details>
<summary><b><code>semantica.kg</code></b>：知识图谱构建与分析</summary>
<a id="semanticakg-knowledge-graph-construction--analysis"></a>

从文档构建生产级知识图谱，并在其上运行图算法。

```python
from semantica.ingest import FileIngestor
from semantica.kg import (
    GraphBuilder,
    GraphAnalyzer,
    CentralityCalculator,
    CommunityDetector,
    PathFinder,
    LinkPredictor,
    BiTemporalFact,
)
from datetime import datetime

# 构建知识图谱 - 合并重复实体，跟踪时态边
sources = FileIngestor().ingest_directory("./contracts/", recursive=True)
kg = GraphBuilder(merge_entities=True, enable_temporal=True).build(sources)

# 图分析
analyzer    = GraphAnalyzer()
analysis    = analyzer.analyze_graph(kg)             # 完整图指标

centrality  = CentralityCalculator()
degree      = centrality.calculate_degree_centrality(kg)    # 连接最多的实体
betweenness = centrality.calculate_betweenness_centrality(kg)

communities = CommunityDetector().detect_communities(kg, method="louvain")  # 自然聚类
path        = PathFinder().find_shortest_path(kg, "alice_chen", "contract_001")
predictions = LinkPredictor().predict_links(kg, top_k=10)   # 关系预测

# 双时态事实 - 独立跟踪有效时间和记录时间
fact = BiTemporalFact(
    valid_from=datetime(2024, 3, 1),
    valid_until=datetime(2025, 1, 1),
    recorded_at=datetime(2024, 3, 5),
)
```

</details>

<details>
<summary><b><code>semantica.reasoning</code></b>：前向链、Rete、Datalog、SPARQL</summary>
<a id="semanticareasoning-forward-chaining-rete-datalog-sparql"></a>

运行可解释的基于规则的推理，而不是黑盒。

```python
from semantica.reasoning import ReteEngine, Rule, Fact, RuleType

rete = ReteEngine()
rete.build_network([
    Rule(
        rule_id="aml_flag",
        name="Flag high-risk transactions",
        conditions=[
            {"field": "amount",  "operator": ">",  "value": 10_000},
            {"field": "country", "operator": "in", "value": ["IR", "KP", "SY"]},
        ],
        conclusion="flag_for_compliance_review",
        rule_type=RuleType.IMPLICATION,
    ),
    Rule(
        rule_id="velocity_check",
        name="Flag rapid sequential transfers",
        conditions=[
            {"field": "transfers_in_1h", "operator": ">", "value": 5},
            {"field": "total_amount",    "operator": ">", "value": 50_000},
        ],
        conclusion="flag_velocity_breach",
        rule_type=RuleType.IMPLICATION,
    ),
])

rete.add_fact(Fact("tx_001", "transaction", [{"amount": 15_000, "country": "IR"}]))
flagged = rete.match_patterns()
# → [{"rule": "aml_flag", "matched_facts": ["tx_001"], "conclusion": "flag_for_compliance_review"}]
```

> **当前限制：** `ReteEngine` 的 alpha 节点条件匹配器在此版本中有意保持简单——在将 `match_patterns()` 输出接入生产合规门控之前，请先针对你的实际规则集进行验证；更精确的条件评估已列入路线图。

```python
# 递归 Datalog - 自然语言式的图查询
from semantica.reasoning import DatalogReasoner

engine = DatalogReasoner()
engine.add_fact("parent(tom, bob)")
engine.add_fact("parent(bob, ann)")
engine.add_fact("parent(ann, pat)")
engine.add_rule("ancestor(X, Y) :- parent(X, Y).")
engine.add_rule("ancestor(X, Z) :- parent(X, Y), ancestor(Y, Z).")
ancestors = engine.query("ancestor(tom, ?X)")
# → [{"X": "bob"}, {"X": "ann"}, {"X": "pat"}]
```

```python
# 可解释推理 - 追踪路径，而非仅给出答案
from semantica.reasoning import ExplanationGenerator, Reasoner

reasoner = Reasoner()
reasoner.add_fact("parent(tom, bob)")
reasoner.add_rule("ancestor(X, Y) :- parent(X, Y)")
result = reasoner.forward_chain()

explainer = ExplanationGenerator()
explanation = explainer.generate_explanation(result)
# → Explanation(conclusion="...", steps=[ReasoningStep(...)], justification=Justification(...))
```

</details>

<details>
<summary><b><code>semantica.vector_store</code></b>：混合与过滤语义搜索</summary>
<a id="semanticavector_store-hybrid--filtered-semantic-search"></a>

即插即用的向量存储，支持多后端、混合搜索和决策感知检索。

```python
from semantica.vector_store import VectorStore, HybridSearch

# 此处展示内存后端：HybridSearch 和 explain_decision() 开箱即用。
# 切换 backend="qdrant" / "weaviate" / "milvus" / "pinecone" / "pgvector" / "faiss"
# 即可扩展到多进程——search() 和 store_decision() 在所有后端上行为一致。
vs = VectorStore(backend="inmemory", dimension=1536)

# 存储决策，包含场景描述和结果
vs.store_decision(
    scenario="Personal loan A-7291, $85k income, 31% DTI, 3yr employment",
    outcome="approved",
    confidence=0.94,
    category="loan_underwriting",
)

# 语义相似度搜索
results = vs.search(
    query="personal loan approval with low DTI",
    limit=10,
)

# 混合搜索 - 稠密 + 稀疏检索一次完成，使用 RRF 融合
hs   = HybridSearch(vector_store=vs)
hits = hs.search("high-risk transactions 2024")

# 解释为什么某个决策被检索到
explanation = vs.explain_decision(results[0]["id"])
```

**后端：** `faiss` · `qdrant` · `weaviate` · `milvus` · `pinecone` · `pgvector` · `sqlite` · `inmemory`

</details>

<details>
<summary><b><code>semantica.split</code></b>：GraphRAG 原生文档分块</summary>
<a id="semanticasplit-graphrag-native-document-chunking"></a>

知识图谱感知的分割，保留实体边界、关系三元组和本体概念——这是 GraphRAG 管道的核心需求。

```python
from semantica.split import TextSplitter, EntityAwareChunker, RelationAwareChunker

text = open("contracts/master_agreement.txt").read()

# 标准递归分块
chunks = TextSplitter(method="recursive", chunk_size=1000, chunk_overlap=200).split(text)

# 实体感知分块 - 绝不会将命名实体切分到不同块（GraphRAG）
chunks = TextSplitter(method="entity_aware", ner_method="llm", chunk_size=1000).split(text)

# 关系感知分块 - 保持（主语、谓语、宾语）三元组完整
chunks = RelationAwareChunker(chunk_size=1000, preserve_triplets=True).chunk(text)

# 基于图的分块 - 利用中心性找到自然社区边界
chunks = TextSplitter(method="graph_based", chunk_size=1000).split(text)

# 层次化分块 - 多级（章节 → 段落 → 句子）
chunks = TextSplitter(method="hierarchical", levels=["section", "paragraph"]).split(text)
```

**支持的方法：** `recursive` · `token` · `sentence` · `paragraph` · `semantic_transformer` · `entity_aware` · `relation_aware` · `graph_based` · `ontology_aware` · `hierarchical` · `community_detection` · `centrality_based` · `llm`

</details>

<details>
<summary><b><code>semantica.provenance</code></b>：W3C PROV-O 血缘</summary>
<a id="semanticaprovenance-w3c-prov-o-lineage"></a>

每个事实都关联到其来源。没有黑盒，没有神秘的输出。

```python
from semantica.provenance import ProvenanceManager

prov = ProvenanceManager(storage_path="./provenance.db")

# 追踪每个实体的来源
prov.track_entity(
    entity_id="acme_corp",
    source="contracts/acme_master_agreement_2024.pdf",
    metadata={"page": 1, "confidence": 0.97, "extractor": "NamedEntityRecognizer"},
)

# 追踪关系的溯源 - 实体链接通过元数据传递
prov.track_relationship(
    relationship_id="alice_works_for_acme",
    source="hr_records/employees_q1_2024.csv",
    metadata={"source_entity_id": "alice_chen", "target_entity_id": "acme_corp"},
)

# 回答"这个从哪来的？"
lineage = prov.get_lineage("acme_corp")
trail   = prov.trace_lineage("alice_chen")   # 完整祖先链
entry   = prov.get_provenance("acme_corp")
```

</details>

<details>
<summary><b><code>semantica.ontology</code></b>：OWL 生成、SHACL 验证</summary>
<a id="semanticaontology-owl-generation-shacl-validation"></a>

从数据生成本体，验证形状，管理词表。

```python
from semantica.ontology import OntologyGenerator, OntologyValidator

data = {
    "entities": [
        {"id": "acme_corp",  "type": "Organization", "industry": "SaaS", "founded": 2012},
        {"id": "alice_chen", "type": "Person",        "role": "CTO",     "since": 2019},
    ],
    "relationships": [
        {"source": "alice_chen", "target": "acme_corp", "type": "works_for"},
    ],
}

gen       = OntologyGenerator(base_uri="https://semantica.dev/ontology/")
ontology  = gen.generate_ontology(data)
classes   = gen.infer_classes(data)
props     = gen.infer_properties(data, classes)
optimized = gen.optimize_ontology(ontology)

# 使用 SHACL 形状进行验证
validator = OntologyValidator()
report    = validator.validate(ontology)
# → ValidationResult(valid=True, consistent=True, satisfiable=True, errors=[], warnings=[])
```

</details>

<details>
<summary><b><code>semantica.conflicts</code></b>：冲突检测与解决</summary>
<a id="semanticaconflicts-conflict-detection--resolution"></a>

在冲突事实破坏知识库之前，从多个来源中检测和解决它们。

```python
from semantica.conflicts import ConflictDetector, ConflictResolver, SourceTracker

entities_from_source_a = [
    {"id": "alice_chen", "role": "CTO",   "salary": 250_000, "start_date": "2019-03-01"},
]
entities_from_source_b = [
    {"id": "alice_chen", "role": "VP Eng", "salary": 275_000, "start_date": "2019-03-01"},
]

# 检测所有冲突类型：值、类型、关系、时态、逻辑
detector   = ConflictDetector()
conflicts  = detector.detect_conflicts(entities_from_source_a + entities_from_source_b)
# → [Conflict(entity="alice_chen", field="role",   values=["CTO","VP Eng"], severity="HIGH"),
#    Conflict(entity="alice_chen", field="salary",  values=[250000,275000],   severity="MEDIUM")]

# 使用多种策略解决
resolver = ConflictResolver()
resolved = resolver.resolve_conflicts(conflicts, strategy="credibility_weighted")  # 按来源可信度加权
resolved = resolver.resolve_conflicts(conflicts, strategy="most_recent")          # 优先取最新
resolved = resolver.resolve_conflicts(conflicts, strategy="voting")               # 多数决

# 追踪来源可信度随时间变化
tracker = SourceTracker()
tracker.register_source("source_a", source_type="document", credibility_score=0.85)
tracker.register_source("source_b", source_type="document", credibility_score=0.72)
```

</details>

<details>
<summary><b><code>semantica.deduplication</code></b>：大规模实体消歧</summary>
<a id="semanticadeduplication-entity-resolution-at-scale"></a>

通过语义相似度进行分块、聚类和合并重复项。

```python
from semantica.deduplication import DuplicateDetector, EntityMerger

entities = [
    {"id": "e1", "name": "Acme Corporation",  "domain": "acme.com"},
    {"id": "e2", "name": "Acme Corp.",         "domain": "acme.com"},
    {"id": "e3", "name": "ACME Corp",          "domain": "acme.co"},
    {"id": "e4", "name": "Globex Industries",  "domain": "globex.com"},
]

detector   = DuplicateDetector(similarity_threshold=0.75, use_clustering=True)
candidates = detector.detect_duplicates(entities)
groups     = detector.detect_duplicate_groups(entities)
# → DuplicateGroup(entities=["e1","e2","e3"], confidence=0.91, strategy="semantic+blocking")

merger  = EntityMerger(preserve_provenance=True)
ops     = merger.merge_duplicates(entities, strategy="keep_most_complete")
history = merger.get_merge_history()
```

</details>

<details>
<summary><b><code>semantica.normalize</code></b>：数据规范化与清洗</summary>
<a id="semanticanormalize-data-normalization--cleaning"></a>

在构建知识图谱之前，标准化文本、实体、日期、数字和编码。

```python
from semantica.normalize import (
    TextNormalizer,
    EntityNormalizer,
    DateNormalizer,
    NumberNormalizer,
    DataCleaner,
)

# Unicode、空白、大小写、HTML 标签、智能引号
text  = TextNormalizer().normalize("  Acme Corp.'s Q4 report...  ")
# → "Acme Corp.'s Q4 report..."

# 别名解析 + 实体消歧，带置信度分数
canonical = EntityNormalizer().normalize_entity("ACME Corp.")
# → NormalizedEntity(canonical="Acme Corporation", type="Organization", confidence=0.91)

# 自然语言日期解析，带时区转换
dt    = DateNormalizer().normalize_date("3 weeks ago")
# → datetime(2026, 7, 1, tzinfo=UTC)

# 单位转换和货币规范化
price = NumberNormalizer().normalize_number("$1.25M USD")
# → NormalizedNumber(value=1_250_000, currency="USD")

# 对数据集进行去重、验证和缺失值填补
clean = DataCleaner().clean_data(records, remove_duplicates=True, handle_missing=True)
```

</details>

<details>
<summary><b><code>semantica.pipeline</code></b>：管道 DSL</summary>
<a id="semanticapipeline-pipeline-dsl"></a>

将摄入、提取和图构建组合为声明式的并行管道。

```python
from semantica.pipeline import PipelineBuilder, ExecutionEngine

builder = PipelineBuilder()

# add_step() 返回创建的 PipelineStep 而非 builder，因此不支持链式调用
builder.add_step("ingest",      step_type="ingest",           source="./contracts/", recursive=True)
builder.add_step("extract",     step_type="ner_extract")
builder.add_step("relations",   step_type="relation_extract")
builder.add_step("build_kg",    step_type="kg_build",         merge_entities=True)
builder.add_step("deduplicate", step_type="deduplicate",      threshold=0.75)
builder.add_step("export",      step_type="export",           format="turtle", output="kg.ttl")

# connect_steps() 和 set_parallelism() 返回 builder，因此支持链式调用
pipeline = (
    builder
    .connect_steps("ingest",      "extract")
    .connect_steps("extract",     "relations")
    .connect_steps("relations",   "build_kg")
    .connect_steps("build_kg",    "deduplicate")
    .connect_steps("deduplicate", "export")
    .set_parallelism(4)
    .build(name="contracts_pipeline")
)

engine   = ExecutionEngine()
result   = engine.execute_pipeline(pipeline)
status   = engine.get_pipeline_status(pipeline.name)
progress = engine.get_progress(pipeline.name)
```

</details>

<details>
<summary><b>时态智能</b>：双时态图与时间旅行</summary>
<a id="temporal-intelligence-bi-temporal-graphs--time-travel"></a>

跟踪事实在*现实世界中*何时为真，以及*何时被记录*，并可按任一维度查询。

```python
from semantica.context import ContextGraph
from semantica.kg import (
    BiTemporalFact,
    TemporalGraphQuery,
    TemporalNormalizer,
)
from datetime import datetime

graph = ContextGraph(advanced_analytics=True)
graph.add_node("alice_chen", "Person",       role="VP Engineering")
graph.add_node("acme_corp",  "Organization", valuation=1_200_000_000)

# 时态约束的边 - valid_from/valid_until 定义其有效时间范围
graph.add_edge(
    "alice_chen", "acme_corp", edge_type="works_for",
    valid_from="2024-03-01T00:00:00", valid_until="2025-01-01T00:00:00",
)

# 按时间点快照 - 无需重新处理即可回放历史
snapshot_2023 = graph.state_at("2023-06-01")
snapshot_2024 = graph.state_at("2024-01-01")

# 双时态事实 - valid_time 是现实世界中为真的时间；
# recorded_at 是你获知该事实的时间
fact = BiTemporalFact(
    valid_from=datetime(2024, 3, 1),
    valid_until=datetime(2025, 1, 1),
    recorded_at=datetime(2024, 3, 5),
)

# 查询在时间窗口内有效的事实 - to_kg_dict() 是官方适配器，
# 输出带 source_id/target_id 键的 {"entities", "relationships"}，
# 即 query_time_range() 期望的结构（无需手动映射）
kg = graph.to_kg_dict()

tq = TemporalGraphQuery()
facts_in_window = tq.query_time_range(
    kg, query="valid_facts", start_time="2024-01-01", end_time="2024-12-31"
)

# 规范化自然语言时间表达式 - 返回 (start, end) 范围
norm = TemporalNormalizer()
start, end = norm.normalize("last quarter")
```

</details>

<details>
<summary><b><code>semantica.export</code></b>：RDF、OWL、Parquet、Cypher、JSON-LD</summary>
<a id="semanticaexport-rdf-owl-parquet-cypher-json-ld"></a>

导出为监管机构、图数据库或下游系统所需的任何格式。

```python
from semantica.export import (
    RDFExporter,
    JSONExporter,
    ParquetExporter,
    LPGExporter,
    ReportGenerator,
)

kg = {"entities": [...], "relationships": [...]}

rdf = RDFExporter()
turtle_str = rdf.export_to_rdf(kg, format="turtle")     # 返回字符串
jsonld_str = rdf.export_to_rdf(kg, format="json-ld")

rdf.export(kg, "kg_audit.ttl",    format="turtle")
rdf.export(kg, "kg_audit.jsonld", format="json-ld")
rdf.export(kg, "kg_audit.nt",     format="n-triples")

# 列式分析 - Snappy 压缩的 Parquet（写入 kg_snapshot_entities.parquet
# 和 kg_snapshot_relationships.parquet）
ParquetExporter(compression="snappy").export_knowledge_graph(kg, "kg_snapshot")

# JSON 知识图谱
JSONExporter().export_knowledge_graph(kg, "kg.json")

# Neo4j / Memgraph Cypher 语句，用于图数据库导入
LPGExporter().export(kg, "kg_import.cypher")

# 人类可读的 HTML 报告
ReportGenerator().generate_report(
    {"title": "KG Audit Report", "summary": "Weekly ingestion summary", "metrics": {"entities": len(kg["entities"])}},
    file_path="audit_report.html",
    format="html",
)
```

</details>

<details>
<summary><b><code>semantica.visualization</code></b>：交互式图工作台</summary>
<a id="semanticavisualization-interactive-graph-workbench"></a>

渲染力导向图、社区图、本体层次结构和时间仪表盘。

```python
from semantica.visualization import (
    KGVisualizer,
    OntologyVisualizer,
    EmbeddingVisualizer,
    TemporalVisualizer,
)
import numpy as np

kg = {"entities": [...], "relationships": [...]}

# 交互式力导向图（在浏览器中打开）
viz = KGVisualizer(layout="force", color_scheme="default")
viz.visualize_network(kg, output="interactive", file_path="kg.html")
viz.visualize_communities(kg, communities, output="interactive")
viz.visualize_centrality(kg, centrality, centrality_type="degree")
viz.visualize_entity_types(kg, output="html", file_path="entity_types.html")

# 本体类层次结构
OntologyVisualizer().visualize_hierarchy(ontology, output="interactive")

# 2D 嵌入投影（UMAP / t-SNE / PCA）
EmbeddingVisualizer().visualize_2d_projection(
    embeddings=np.array([...]),
    labels=["entity_a", "entity_b"],
    method="umap",
)

# 时间线滑块 - 观看图的演化
TemporalVisualizer().visualize_timeline(kg, output="interactive")
```

</details>

<details>
<summary><b>多 Agent 共享上下文（Agno）</b></summary>
<a id="multi-agent-shared-context-with-agno"></a>

单一共享智能层。所有 Agent 读写同一个上下文图。

```python
# pip install semantica[agno]
from agno.agent import Agent
from agno.team import Team
from agno.models.anthropic import Claude
from semantica.context import ContextGraph
from semantica.vector_store import VectorStore
from integrations.agno import AgnoSharedContext, AgnoDecisionKit, AgnoKGToolkit

shared = AgnoSharedContext(
    vector_store=VectorStore(backend="faiss"),
    knowledge_graph=ContextGraph(advanced_analytics=True),
    decision_tracking=True,
)

researcher = Agent(
    name="Researcher",
    model=Claude(id="claude-sonnet-4-5"),
    memory=shared.bind_agent("researcher"),
    tools=[AgnoKGToolkit(context=shared)],
)
analyst = Agent(
    name="Analyst",
    model=Claude(id="claude-sonnet-4-5"),
    memory=shared.bind_agent("analyst"),
    tools=[AgnoDecisionKit(context=shared)],
)

team = Team(agents=[researcher, analyst], mode="coordinate")
# Researcher 的发现即时可供 Analyst 使用 - 无需复制，无需同步
```

→ [cookbook 中的可运行笔记本](https://github.com/semantica-agi/semantica/tree/main/cookbook)，每个都是自包含的，5 分钟内即可运行

</details>

---

## 更多示例

核心审计追踪示例在 [上方](#recipe-audit-trail-for-a-regulated-decision)。以下是三个更常见的模式。

<details>
<summary><b>端到端 GraphRAG 管道</b></summary>

```python
from semantica.ingest import FileIngestor
from semantica.split import TextSplitter
from semantica.semantic_extract import NamedEntityRecognizer, RelationExtractor
from semantica.kg import GraphBuilder
from semantica.vector_store import VectorStore, HybridSearch
from semantica.context import AgentContext

# 1. 摄入
docs = FileIngestor().ingest_directory("./docs/", recursive=True)

# 2. 实体感知分块 - 绝不会将实体切分到块边界
splitter = TextSplitter(method="entity_aware", chunk_size=1000)
chunks   = [splitter.split(doc["text"]) for doc in docs]

# 3. 提取实体和关系
ner      = NamedEntityRecognizer(confidence_threshold=0.7)
rel_ext  = RelationExtractor(confidence_threshold=0.6)
entities = [ner.extract_entities(chunk) for chunk_group in chunks for chunk in chunk_group]

# 4. 构建知识图谱
kg = GraphBuilder(merge_entities=True, enable_temporal=True).build(docs)

# 5. 混合检索
vs  = VectorStore(backend="inmemory")
ctx = AgentContext(vector_store=vs, knowledge_graph=kg)
ctx.store("Alice approved the Acme renewal in Q1 2024", conversation_id="c1")

results = HybridSearch(vector_store=vs).search("who approved the renewal?")
```

</details>

<details>
<summary><b>反洗钱（AML）规则引擎</b></summary>

```python
from semantica.reasoning import ReteEngine, Rule, Fact, RuleType

rete = ReteEngine()
rete.build_network([
    Rule(
        rule_id="sanctions_check",
        name="Flag sanctioned-country transactions",
        conditions=[
            {"field": "amount",  "operator": ">",  "value": 10_000},
            {"field": "country", "operator": "in", "value": ["IR", "KP", "SY", "CU"]},
        ],
        conclusion="flag_for_compliance_review",
        rule_type=RuleType.IMPLICATION,
    ),
])

# 对一批传入交易运行规则，而非仅一笔
for tx in [
    Fact("tx_101", "transaction", [{"amount": 25_000, "country": "IR"}]),
    Fact("tx_102", "transaction", [{"amount": 4_500,  "country": "DE"}]),
    Fact("tx_103", "transaction", [{"amount": 60_000, "country": "KP"}]),
]:
    rete.add_fact(tx)

flagged = rete.match_patterns()
```

与 [上方](#semanticareasoning-forward-chaining-rete-datalog-sparql) 相同的条件匹配器注意事项——在生产使用前请先针对你的规则集进行验证。

</details>

<details>
<summary><b>一次性从本体到知识图谱</b></summary>

```python
from semantica.ingest import FileIngestor
from semantica.semantic_extract import NamedEntityRecognizer, RelationExtractor
from semantica.kg import GraphBuilder
from semantica.ontology import OntologyGenerator, OntologyValidator
from semantica.export import RDFExporter

sources   = FileIngestor().ingest_directory("./contracts/")
ner       = NamedEntityRecognizer(confidence_threshold=0.7)
entities  = ner.process_batch([s["text"] for s in sources])

kg  = GraphBuilder(merge_entities=True).build(sources)
gen = OntologyGenerator(base_uri="https://myco.dev/ontology/")
ont = gen.generate_ontology({"entities": entities[0], "relationships": []})

report = OntologyValidator().validate(ont)
if report.valid:
    RDFExporter().export({"entities": entities[0]}, "ontology.ttl", format="turtle")
```

</details>

---

## 功能一览

| 能力 | 亮点 |
| --- | --- |
| **上下文图** | 实体、决策、关系的可查询图；因果链接；跨图导航 |
| **决策智能** | `record_decision` · `trace_decision_chain` · `find_similar_decisions` · `analyze_decision_impact` · `check_decision_rules` |
| **时态智能** | 按时间点快照 · Allen 区间代数（13 种关系）· `TemporalNormalizer` · 双时态溯源 |
| **距离智能** | N×N 语义距离矩阵 · 自我模式可视化 · 距离带 · 嵌入缓存 |
| **语义提取** | NER · 关系提取 · 事件检测 · 三元组生成 · 共指消解 |
| **推理引擎** | 前向链 · Rete · 演绎 · 溯因 · SPARQL · Datalog，输出可解释 |
| **GraphRAG 分块** | 实体感知 · 关系感知 · 基于图的 · 本体感知 · 社区检测分块 |
| **冲突检测** | 值/类型/关系/时态/逻辑冲突 · 多种解决策略 |
| **溯源** | W3C PROV-O · 每个事实可追溯到源 · 审计日志导出 JSON/CSV/RDF |
| **本体中心** | SHACL Studio · 可视化编辑器 · 跨本体对齐 · 健康仪表盘 |
| **向量存储** | FAISS · Pinecone · Weaviate · Qdrant · Milvus · PgVector · 混合 + 过滤搜索 |
| **图数据库（LPG）** | Neo4j · FalkorDB · Apache AGE · AWS Neptune |
| **三元组存储（RDF）** | Oxigraph（内嵌）· Blazegraph · Apache Jena · Eclipse RDF4J · 统一 `TripletStore` 接口 · SPARQL 查询与批量加载 |
| **企业数据平台** | Databricks（`DatabricksIngestor`：Unity Catalog + Delta Lake，PAT/OAuth M2M，表/查询摄入，目录/模式/表/血缘内省）· Snowflake（`SnowflakeIngestor`：仓库/数据库/模式，密码/密钥对/OAuth 认证）|
| **LLM 提供商** | **已全部支持：** OpenAI (GPT-4o, o1, o3) · Anthropic (Claude) · Google Gemini · Mistral · Meta Llama · Groq · Cohere · Azure OpenAI · AWS Bedrock · Ollama · DeepSeek · Perplexity · Together AI · Fireworks AI · Replicate · HuggingFace · 通过 `semantica.llms` 和 LiteLLM |

---

## 性能

v0.5.0 在 118,000 节点生产图上的基准测试：

| 操作 | 之前 | 之后 | 提升 |
| --- | --- | --- | --- |
| 节点搜索（118k 节点）| 24 ms | 0.004 ms | **6,000×** 更快 |
| 嵌入缓存命中 | 冷加载 | 基于版本的缓存 | **10×** 吞吐量 |
| 语义去重 | 基线 | 优化候选生成 | **6.98×** 更快 |
| 候选生成 | 基线 | 分块策略 | **63.6%** 更快 |

*在 118,000 节点生产图上测量（AMD EPYC，64 GB RAM）；去重/候选生成数据为 [CHANGELOG.md](CHANGELOG.md) 中记录的历史测量值，而非自动化 `tests/` 断言。结果因硬件、数据集拓扑和后端选择而异——运行 `pytest tests/vector_store/test_performance_benchmarks.py -s` 以测量你自己的数据。*

---

## CLI

所有功能均可从终端使用。CLI 随包一起发布，无需单独安装。

```bash
pip install semantica
semantica        # 启动仪表盘
semantica doctor # 健康检查
semantica --help # 完整分组命令参考
```

从 `semantica` 开始，用 `doctor` 验证，构建图，然后在一个终端中探索命令组。

**命令组：** `ingest` · `parse` · `extract` · `kg` · `reason` · `decision` · `temporal` · `provenance` · `ontology` · `embed` · `deduplicate` · `validate` · `export` · `visualize` · `pipeline` · `server` · `explorer` · `mcp` · `doctor` · `shell` · `init` · `watch`

→ [完整 CLI 参考](https://docs.getsemantica.ai/)

---

## 集成

为 Claude Code、Cursor、Codex、Windsurf、Cline、Continue、VS Code 和 OpenClaw 提供原生插件包；为任何 MCP 兼容客户端提供功能完整的 MCP 服务器；全面的 REST API；以及对 Agno 和 CrewAI 的一等 Agent 框架支持。所有主流 LLM 提供商已通过 `semantica.llms` 和 LiteLLM 支持：OpenAI、Anthropic、Gemini、Mistral、Llama、Groq、Cohere、Azure、Bedrock、Ollama、DeepSeek、HuggingFace 等。

MCP 设置只需 30 秒——参见下方 [MCP 服务器](#mcp-server)。

<details>
<summary><b>完整集成矩阵</b>（编辑器、MCP 客户端、REST 客户端、Agent 框架）</summary>

<table>
<tr>
<th colspan="3" align="left">原生插件包</th>
<th colspan="5" align="left">MCP 服务器 + 插件</th>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://claude.com/product/claude-code"><img src="https://github.com/anthropics.png?size=120" alt="Claude Code" width="48" height="48" /></a><br/>
<strong>Claude Code</strong><br/>
<sub>Skills · agents · hooks</sub>
</td>
<td align="center" width="12.5%">
<a href="https://cursor.com"><img src="https://www.freelogovectors.net/wp-content/uploads/2025/06/cursor-logo-freelogovectors.net_.png" alt="Cursor" width="48" height="48" /></a><br/>
<strong>Cursor</strong><br/>
<sub>Skills · agents</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/openai/codex"><img src="https://github.com/openai.png?size=120" alt="Codex CLI" width="48" height="48" /></a><br/>
<strong>Codex CLI</strong><br/>
<sub>Skills · agents</sub>
</td>
<td align="center" width="12.5%">
<a href="https://windsurf.com"><img src="https://exafunction.github.io/public/brand/windsurf-black-symbol.svg" alt="Windsurf" width="48" height="48" /></a><br/>
<strong>Windsurf</strong><br/>
<sub><a href="plugins/.windsurf-plugin/">plugin</a></sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/cline/cline"><img src="https://github.com/cline.png?size=120" alt="Cline" width="48" height="48" /></a><br/>
<strong>Cline</strong><br/>
<sub><a href="plugins/.cline-plugin/">plugin</a></sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/continuedev/continue"><img src="https://github.com/continuedev.png?size=120" alt="Continue" width="48" height="48" /></a><br/>
<strong>Continue</strong><br/>
<sub><a href="plugins/.continue-plugin/">plugin</a></sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/microsoft/vscode"><img src="https://github.com/microsoft.png?size=120" alt="VS Code" width="48" height="48" /></a><br/>
<strong>VS Code</strong><br/>
<sub><a href="plugins/.vscode-plugin/">plugin</a></sub>
</td>
<td align="center" width="12.5%">
<a href="integrations/openclaw/"><img src="https://github.com/openclaw.png?size=120" alt="OpenClaw" width="48" height="48" /></a><br/>
<strong>OpenClaw</strong><br/>
<sub>MCP + <a href="integrations/openclaw/">plugin</a></sub>
</td>
</tr>
<tr>
<th colspan="1" align="left">MCP 服务器</th>
<th colspan="7" align="left">REST API</th>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://claude.ai/download"><img src="https://github.com/anthropics.png?size=120" alt="Claude Desktop" width="48" height="48" /></a><br/>
<strong>Claude Desktop</strong><br/>
<sub>MCP server</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/features/copilot"><img src="https://github.com/github.png?size=120" alt="GitHub Copilot" width="48" height="48" /></a><br/>
<strong>GitHub Copilot</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/RooCodeInc/Roo-Code"><img src="https://github.com/RooCodeInc.png?size=120" alt="Roo Code" width="48" height="48" /></a><br/>
<strong>Roo Code</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/block/goose"><img src="https://github.com/block.png?size=120" alt="Goose" width="48" height="48" /></a><br/>
<strong>Goose</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/Kilo-Org/kilocode"><img src="https://github.com/Kilo-Org.png?size=120" alt="Kilo Code" width="48" height="48" /></a><br/>
<strong>Kilo Code</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/Aider-AI/aider"><img src="https://github.com/Aider-AI.png?size=120" alt="Aider" width="48" height="48" /></a><br/>
<strong>Aider</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/aws/amazon-q-developer-cli"><img src="https://github.com/aws.png?size=120" alt="Amazon Q" width="48" height="48" /></a><br/>
<strong>Amazon Q</strong><br/>
<sub>REST API</sub>
</td>
<td align="center" width="12.5%">
<a href="https://zed.dev"><img src="https://github.com/zed-industries.png?size=120" alt="Zed" width="48" height="48" /></a><br/>
<strong>Zed</strong><br/>
<sub>REST API</sub>
</td>
</tr>
</table>

### Agent 框架

<table>
<tr>
<th colspan="8" align="left">原生集成</th>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://github.com/agno-agi/agno"><img src="https://github.com/agno-agi.png?size=120" alt="Agno" width="48" height="48" /></a><br/>
<strong>Agno</strong><br/>
<sub>一等支持 · <code>pip install semantica[agno]</code></sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/crewAIInc/crewAI"><img src="https://github.com/crewAIInc.png?size=120" alt="CrewAI" width="48" height="48" /></a><br/>
<strong>CrewAI</strong><br/>
<sub>一等支持 · <code>pip install semantica[crewai]</code></sub>
</td>
</tr>
<tr>
<th colspan="8" align="left">已通过 REST API 和 MCP 支持</th>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://github.com/langchain-ai/langchain"><img src="https://github.com/langchain-ai.png?size=120" alt="LangChain" width="48" height="48" /></a><br/>
<strong>LangChain</strong><br/>
<sub>REST API · MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/langchain-ai/langgraph"><img src="https://github.com/langchain-ai.png?size=120" alt="LangGraph" width="48" height="48" /></a><br/>
<strong>LangGraph</strong><br/>
<sub>REST API · MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/run-llama/llama_index"><img src="https://github.com/run-llama.png?size=120" alt="LlamaIndex" width="48" height="48" /></a><br/>
<strong>LlamaIndex</strong><br/>
<sub>REST API · MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/microsoft/autogen"><img src="https://github.com/microsoft.png?size=120" alt="AutoGen" width="48" height="48" /></a><br/>
<strong>AutoGen</strong><br/>
<sub>REST API · MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/openai/openai-agents-python"><img src="https://github.com/openai.png?size=120" alt="OpenAI Agents SDK" width="48" height="48" /></a><br/>
<strong>OpenAI Agents</strong><br/>
<sub>REST API · MCP</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/google/adk-python"><img src="https://github.com/google.png?size=120" alt="Google ADK" width="48" height="48" /></a><br/>
<strong>Google ADK</strong><br/>
<sub>REST API · MCP</sub>
</td>
</tr>
<tr>
<th colspan="8" align="left">原生 SDK 集成（即将推出）</th>
</tr>
<tr>
<td align="center" width="12.5%">
<a href="https://github.com/langchain-ai/langchain"><img src="https://github.com/langchain-ai.png?size=120" alt="LangChain" width="48" height="48" /></a><br/>
<strong>LangChain</strong><br/>
<sub>专用工具包</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/run-llama/llama_index"><img src="https://github.com/run-llama.png?size=120" alt="LlamaIndex" width="48" height="48" /></a><br/>
<strong>LlamaIndex</strong><br/>
<sub>专用工具包</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/microsoft/autogen"><img src="https://github.com/microsoft.png?size=120" alt="AutoGen" width="48" height="48" /></a><br/>
<strong>AutoGen</strong><br/>
<sub>专用工具包</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/openai/openai-agents-python"><img src="https://github.com/openai.png?size=120" alt="OpenAI Agents SDK" width="48" height="48" /></a><br/>
<strong>OpenAI Agents</strong><br/>
<sub>专用工具包</sub>
</td>
<td align="center" width="12.5%">
<a href="https://github.com/google/adk-python"><img src="https://github.com/google.png?size=120" alt="Google ADK" width="48" height="48" /></a><br/>
<strong>Google ADK</strong><br/>
<sub>专用工具包</sub>
</td>
</tr>
</table>

</details>

### MCP 服务器

30 秒内连接任何 MCP 兼容客户端（Claude Desktop、Windsurf、Cline、VS Code）：

```bash
python -m semantica.mcp_server
# 或通过安装的入口点
semantica-mcp
```

```json
{
  "mcpServers": {
    "semantica": { "command": "python", "args": ["-m", "semantica.mcp_server"] }
  }
}
```

**通过 MCP 暴露的工具：**

| 工具 | 功能 |
| --- | --- |
| `extract_entities` | 对任意文本进行 NER |
| `extract_relations` | 关系提取 |
| `record_decision` | 持久化决策节点 |
| `query_decisions` | 搜索决策历史 |
| `find_precedents` | 语义先例查找 |
| `get_causal_chain` | 完整因果链 |
| `add_entity` | 添加知识图谱节点 |
| `add_relationship` | 添加知识图谱边 |
| `run_reasoning` | 执行规则集 |
| `get_graph_analytics` | 中心性、社区 |
| `export_graph` | 导出为 RDF/JSON/Parquet |
| `get_graph_summary` | 图统计信息 |

### REST API

```bash
# 启动后端
python -m semantica.server   # 端口 8000

# 通过 REST 提取实体和关系
curl -X POST http://localhost:8000/api/enrich/extract \
  -H "Content-Type: application/json" \
  -d '{"text": "Apple CEO Tim Cook announced record earnings."}'

# 列出已记录的决策
curl "http://localhost:8000/api/decisions?category=vendor_selection"

# 查询知识图谱
curl "http://localhost:8000/api/graph/node/acme_corp/neighbors?depth=2"
```

**REST 端点涵盖：** `enrich`（提取）· `graph` · `decisions` · `reasoning` · `provenance` · `ontology` · `embeddings` · `search` · `export` · `pipeline` · `temporal` · `deduplication`

### 插件包

**领域技能：** `extract` · `ingest` · `query` · `ontology` · `validate` · `deduplicate` · `embed` · `reason` · `decision` · `causal` · `temporal` · `provenance` · `policy` · `explain` · `export` · `change` · `visualize`

**专用 Agent：** `kg-assistant` · `decision-advisor` · `explainability`

Claude Code、Cursor、Codex、Windsurf、Cline、Continue、VS Code 和 OpenClaw 的插件包位于 [`plugins/`](plugins/)。

---

## Knowledge Explorer

基于浏览器的图工作台。平移和缩放实时图，滑动时间线，审查每个决策的因果链，解决重复项，并可视化地编写本体。基于 React 19 + Sigma.js 构建。

| 工作区 | 功能 |
| --- | --- |
| **知识图谱** | Sigma.js 实时画布，ForceAtlas2 布局，自我模式，语义距离热图 |
| **时间线** | 滑动浏览时态事件，观看图的演化 |
| **决策** | 浏览每个已记录决策背后的因果链 |
| **注册表** | 每次图变更的实时审计日志 |
| **实体消歧** | 审查和合并重复项 |
| **本体中心** | SHACL Studio、可视化编辑器、跨本体对齐、SKOS 浏览器 |
| **血缘** | 任意实体的 W3C PROV-O 溯源可视化 |

最快启动方式（无需 Node.js）：

```bash
pip install "semantica[explorer]"
semantica-explorer --graph my_graph.json
# 仪表盘在 http://127.0.0.1:8000 打开
```

贡献者/开发服务器设置：**[explorer/README.md：本地设置指南](explorer/README.md)**

---

## v0.6.5 更新内容

**安全更新——强烈建议升级。** 修复了 Explorer API 和图/三元组存储后端中 5 个外部报告的漏洞，以及一个 CodeQL 标记的 ReDoS：

- **Explorer API 所有路由缺少认证** (GHSA-j4mq-hprp-987v, 严重)：所有路由现在都要求 `SEMANTICA_API_KEY`，未配置时以失败关闭（503）而非开放
- **本体 URL 获取中通过重定向绕过的 SSRF** (GHSA-8c7v-62gr-hj6g, 高危)：重定向目标现在在每次跳转时都重新验证，连接被固定到已验证的地址，关闭了 DNS 检查后使用的竞态
- **通过未验证的节点标签和属性键进行 Cypher 注入** (GHSA-482h-hw99-h62p, 严重)：Neptune、Neo4j 和 FalkorDB 现在对每个标签/关系类型/属性键的插值位置进行清理
- **通过未验证的三元组 IRI 进行 SPARQL 注入** (GHSA-8vgg-8mr4-r236, 严重)：Blazegraph、RDF4J 和 Jena 现在在插值前验证主语/谓语/宾语 IRI
- **WebSocket 握手缺少 Origin 验证** (GHSA-4643-wpgq-w329, 中等, 仅匿名模式)：`/ws/graph-updates` 现在对 `Origin` 执行与 `CORSMiddleware` 对 HTTP 相同的允许列表检查
- **SPARQL 查询验证中的多项式 ReDoS** (CodeQL `py/polynomial-redos`)：修复了 Explorer 的 SPARQL 路由中一个回溯正则表达式

还包括：`TripletStore` 的内嵌 Oxigraph 后端、`ProvenanceManager` 的 PROV-O 信任/规范完整性，以及 Altair Anzo 三元组存储后端。

→ [完整发布说明](RELEASE_NOTES.md) · [变更日志](CHANGELOG.md)

---

## 为高风险领域而构建

Semantica 专为 AI 输出必须可解释、可审计、可辩护的环境设计，也为数据不能离开基础设施的场景设计。可自托管、零厂商锁定，既为处理机密或涉密数据的组织而建，也为追求审计追踪的受监管行业而建：

- **金融：** 贷款承保审计追踪、欺诈检测、反洗钱合规、监管风险知识图谱
- **医疗：** 临床决策支持、药物相互作用图、患者安全审计追踪
- **法律：** 证据支撑的研究、合同分析、判例法推理、特权追踪
- **政府与国防：** 政策决策记录、涉密信息治理、监管报告——完全自托管，数据不出边界
- **执法：** 案件关联、证据溯源链、经得起法律审查的侦查知识图谱
- **网络安全：** 威胁归因、事件响应时间线、IOC 溯源追踪
- **自主系统：** 决策日志、安全验证、面向认证的可解释 AI

> ⚠️ **这是系统级可解释性，而非基础模型可解释性。** Semantica 不会暴露、重建或解释 LLM/基础模型*内部*发生的事情——其内部推理或思维链对外部系统来说始终是不透明的。Semantica 解释的是模型*外部*的一切：输入的上下文和数据、产生的决策、决策的溯源、相关关系、应用的策略，以及完整的执行轨迹。简而言之，Semantica 解释和审计的是 AI 系统做了什么，而非 LLM 的私有内部推理。

---

## 安装

```bash
pip install semantica           # 核心
pip install semantica[all]      # 全部
```

```bash
pip install semantica[agno]                 # Agno 多 Agent 集成
pip install semantica[crewai]               # CrewAI 集成
pip install semantica[llm-litellm]          # OpenAI, Anthropic, Gemini, Mistral, Llama, Groq, Cohere, Bedrock, Ollama, DeepSeek 等
pip install semantica[graph-neo4j]          # Neo4j 图存储 (LPG)
pip install semantica[graph-falkordb]       # FalkorDB 图存储 (LPG)
pip install semantica[graph-apache-age]     # Apache AGE 图存储 (LPG)
pip install semantica[graph-amazon-neptune] # AWS Neptune 图存储 (LPG)
pip install semantica[tripletstore-oxigraph] # 内嵌内存/磁盘 RDF 存储
# RDF 三元组存储（Blazegraph、Apache Jena、Eclipse RDF4J）无需额外依赖：
# semantica.triplet_store 通过核心 `requests` 依赖使用 HTTP 上的 SPARQL
pip install semantica[vectorstore-qdrant]   # Qdrant 向量存储
pip install semantica[vectorstore-pinecone] # Pinecone 向量存储
pip install semantica[db-snowflake]         # Snowflake
pip install semantica[db-databricks]        # Databricks (SDK + SQL 连接器)
pip install semantica[ingest-parquet]       # Parquet / PyArrow
pip install semantica[ingest-arrow]        # Apache Arrow, Feather, IPC
pip install semantica[viz]                  # HTML 交互式可视化
pip install semantica[watch]                # 目录文件监听
pip install semantica[explorer]             # Knowledge Explorer 仪表盘
```

生产部署建议使用 Docker 或 Kubernetes，而非本地 `pip install`。设置 `SEMANTICA_SECRET_KEY`，配置持久化的 LPG 图存储（Neo4j / FalkorDB / Apache AGE / AWS Neptune）和/或 RDF 三元组存储（Blazegraph / Apache Jena / Eclipse RDF4J），并将向量存储指向托管后端（Qdrant / Pinecone）。完整部署拓扑参见 [ARCHITECTURE.md](ARCHITECTURE.md)。

```bash
# 从源码安装
git clone https://github.com/semantica-agi/semantica.git
cd semantica && pip install -e ".[dev]" && pytest tests/
```

---

## 企业版

本地部署 · 私有云 · 自定义领域实现 · 有 SLA 保障的支持 · 面向受监管行业（金融、医疗、法律、政府）的专业服务。

**[getsemantica.ai](https://getsemantica.ai/)** 了解企业解决方案和定价。

---

## 社区与支持

| | |
| --- | --- |
| **Discord** | [discord.gg/sV34vps5hH](https://discord.gg/sV34vps5hH)：实时帮助、案例展示和公告 |
| **GitHub Discussions** | [问答和功能请求](https://github.com/semantica-agi/semantica/discussions) |
| **GitHub Issues** | [Bug 报告](https://github.com/semantica-agi/semantica/issues) |
| **文档** | [docs.getsemantica.ai](https://docs.getsemantica.ai/) |
| **Cookbook** | [可运行的 Jupyter 笔记本](https://github.com/semantica-agi/semantica/tree/main/cookbook) |
| **变更日志** | [CHANGELOG.md](CHANGELOG.md) · [发布说明](RELEASE_NOTES.md) |

---

## Star 历史

<a href="https://www.star-history.com/?repos=semantica-agi%2Fsemantica&type=date&legend=top-left">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/chart?repos=semantica-agi/semantica&type=date&theme=dark&legend=top-left" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/chart?repos=semantica-agi/semantica&type=date&legend=top-left" />
   <img alt="Star History Chart" src="https://api.star-history.com/chart?repos=semantica-agi/semantica&type=date&legend=top-left" />
 </picture>
</a>

---

## 贡献者

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=semantica-agi/semantica&max=500)](https://github.com/semantica-agi/semantica/graphs/contributors)

</div>

---

## 参与贡献

欢迎所有形式的贡献：Bug 修复、功能、测试和文档。

1. Fork 仓库并创建分支
2. `pip install -e ".[dev]"`
3. 编写测试配合你的改动（`pytest tests/`）
4. 提交 PR 并 tag `@KaifAhmad1` 进行 review

完整指南参见 [CONTRIBUTING.md](CONTRIBUTING.md)。

---

<div align="center">

MIT 许可证 · 由 [Semantica](https://github.com/semantica-agi) 构建

[GitHub](https://github.com/semantica-agi/semantica) &nbsp;·&nbsp;
[Discord](https://discord.gg/sV34vps5hH) &nbsp;·&nbsp;
[Twitter/X](https://x.com/BuildSemantica) &nbsp;·&nbsp;
[Website](https://getsemantica.ai/) &nbsp;·&nbsp;
[Docs](https://docs.getsemantica.ai/) &nbsp;·&nbsp;
[PyPI](https://pypi.org/project/semantica/)

如果这个项目帮助你构建了更好的 AI，一颗星对我们意义重大。

**[⭐ 在 GitHub 上 Star →](https://github.com/semantica-agi/semantica)**

[English](https://readme-i18n.com/semantica-agi/semantica?lang=en) · [Deutsch](https://readme-i18n.com/semantica-agi/semantica?lang=de) · [Français](https://readme-i18n.com/semantica-agi/semantica?lang=fr) · [Español](https://readme-i18n.com/semantica-agi/semantica?lang=es) · [Italiano](https://readme-i18n.com/semantica-agi/semantica?lang=it) · [Português](https://readme-i18n.com/semantica-agi/semantica?lang=pt) · [العربية](https://readme-i18n.com/semantica-agi/semantica?lang=ar) · [اردو](https://readme-i18n.com/semantica-agi/semantica?lang=ur) · [हिन्दी](https://readme-i18n.com/semantica-agi/semantica?lang=hi) · [中文](https://readme-i18n.com/semantica-agi/semantica?lang=zh) · [日本語](https://readme-i18n.com/semantica-agi/semantica?lang=ja) · [한국어](https://readme-i18n.com/semantica-agi/semantica?lang=ko)

</div>
