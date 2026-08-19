---
title: "Getting Started"
description: "The context and intelligence layer for AI: turning raw data into explainable, auditable knowledge graphs."
icon: "rocket"
---

> 本文是对应英文文档的中文翻译版本。

<Tip>
  已经安装好了？直接跳转到 [Quickstart](quickstart)。需要安装帮助？请参阅 [Installation](installation)。
</Tip>

## 你可以构建什么

- **GraphRAG 系统** — 让 LLM 的回答基于可追溯的结构化知识。每条断言都关联到一个来源节点。
- **可审计的 AI Agent** — 拥有结构化决策历史、因果链和先例检索能力的智能体。每个选择都被记录且可审计。
- **生产级知识图谱（Knowledge Graph）** — 从多源数据构建、验证和维护企业级语义知识库。
- **合规就绪的 AI** — 每条事实均附带 W3C PROV-O 溯源信息。内置 HIPAA、SOX、GDPR、FDA 21 CFR Part 11 基础设施。


## 3 步开始

<Steps>
  <Step title="安装 Semantica">
    <CodeGroup>

    ```bash pip (recommended)
    pip install semantica
    ```

    ```bash With all extras
    pip install semantica[all]
    ```

    ```bash From source
    git clone https://github.com/semantica-agi/semantica.git
    cd semantica
    pip install -e ".[dev]"
    ```

    </CodeGroup>

    <Check>
      验证安装：
      ```python
      import semantica
      print(semantica.__version__)  # 0.6.5
      ```
    </Check>
  </Step>

  <Step title="选择你的路径">
    选择与你目标匹配的路线：每条路线都以一个 5 分钟的聚焦示例开始。

    | 路线 | 你想要… | 从这里开始 |
    | :----- | :-------------- | :--------- |
    | **Knowledge Graph** | 将文档转化为结构化、可查询的图谱 | [Quickstart → Step 1](quickstart) |
    | **Agent Context** | 为你的 AI Agent 提供持久记忆和决策追踪 | [Context 参考](reference/context) |
    | **GraphRAG** | 让 LLM 的回答基于结构化知识 | [概念 → GraphRAG](concepts#graphrag) |
    | **MCP Integration** | 从 Claude Desktop 或 VS Code 使用 Semantica | [MCP Server](reference/mcp_server) |

  </Step>

  <Step title="运行流水线">
    完整的 6 步流水线——摄取、解析、抽取、构建、可视化、导出——详见 [Quickstart](quickstart)。使用基于模式的抽取（无需 API 密钥）不到 5 分钟即可完成。

    <Note>
      Quickstart **不强制要求** LLM API 密钥。基于模式的抽取开箱即用——准备好后可随时升级为 LLM 抽取以获得更高精度。
    </Note>
  </Step>
</Steps>


## 选择你的路径

<Tabs>
  <Tab title="Knowledge Graph">
    从任意文档或数据源构建结构化知识图谱。

    ```python
    from semantica.ingest import FileIngestor
    from semantica.parse import DocumentParser
    from semantica.semantic_extract import NERExtractor, RelationExtractor
    from semantica.kg import GraphBuilder

    # 1. Ingest
    sources = FileIngestor().ingest("data/report.pdf")

    # 2. Parse
    parsed = DocumentParser().parse(sources[0])

    # 3. Extract
    ner           = NERExtractor(method="pattern")  # no API key needed
    entities      = ner.extract(parsed)
    relationships = RelationExtractor().extract(parsed, entities=entities)

    # 4. Build
    graph = GraphBuilder(merge_entities=True).build(
        {"entities": entities, "relationships": relationships}
    )
    print(f"{len(graph['entities'])} nodes, {len(graph['relationships'])} edges")
    ```

    **下一步：** [完整流水线演练 →](quickstart)
  </Tab>

  <Tab title="Agent Context">
    为你的 Agent 提供持久记忆、决策追踪和先例检索。

    ```python
    from semantica.context import AgentContext, ContextGraph
    from semantica.vector_store import VectorStore

    context = AgentContext(
        vector_store=VectorStore(backend="faiss", dimension=768),
        knowledge_graph=ContextGraph(advanced_analytics=True),
        decision_tracking=True,
    )

    # Store a fact with provenance
    context.store("GPT-4 outperforms GPT-3.5 on reasoning by 40%")

    # Record a decision with full causal chain
    decision_id = context.record_decision(
        category="model_selection",
        scenario="Choose LLM for production pipeline",
        reasoning="GPT-4 benchmark advantage justifies cost",
        outcome="selected_gpt4",
        confidence=0.91,
    )

    # Search past decisions before making a new one
    precedents = context.find_precedents("model selection", limit=5)
    ```

    **下一步：** [Context 模块参考 →](reference/context)
  </Tab>

  <Tab title="GraphRAG">
    让每个 LLM 的回答都基于你的知识图谱——不再有无根据的断言。

    ```python
    from semantica.context import AgentContext, ContextGraph
    from semantica.vector_store import VectorStore

    context = AgentContext(
        vector_store=VectorStore(backend="faiss", dimension=768),
        knowledge_graph=ContextGraph(advanced_analytics=True),
    )

    # Load your knowledge graph
    context.load_graph("company_kg.json")

    # Multi-hop GraphRAG query
    result = context.query(
        "What companies were founded by people who worked at Apple?",
        mode="graphrag",
        reasoning=True,
    )

    # Every claim links back to a source node
    for claim in result.claims:
        print(f"{claim.text}  →  source: {claim.source_node}")
    ```

    **下一步：** [GraphRAG 概念 →](concepts#graphrag)
  </Tab>

  <Tab title="MCP Integration">
    从 Claude Desktop、VS Code、Cursor 或任何 MCP 客户端使用 Semantica——设置完成后无需编写 Python 代码。

    ```bash
    pip install semantica
    ```

    添加到你的 MCP 客户端配置：

    ```json
    {
      "mcpServers": {
        "semantica": {
          "command": "semantica-mcp"
        }
      }
    }
    ```

    12 个工具即刻可用：抽取实体、查询图谱、记录决策、运行推理、导出结果。

    **下一步：** [MCP Server 参考 →](reference/mcp_server)
  </Tab>
</Tabs>


## 核心架构

Semantica 采用模块化、分层架构——只需导入你需要的部分。

- **[输入层（Input Layer）](reference/ingest)** — 从任意来源加载和准备数据。模块：`ingest`、`parse`、`split`、`normalize`
- **[语义层（Semantic Layer）](reference/semantic_extract)** — 从原始文本中提取语义。模块：`semantic_extract`、`kg`、`ontology`、`reasoning`
- **[存储层（Storage Layer）](reference/vector_store)** — 持久化知识以供检索。模块：`embeddings`、`vector_store`、`graph_store`、`triplet_store`
- **[质量层（Quality Layer）](reference/deduplication)** — 校验与去重。模块：`deduplication`、`conflicts`
- **[上下文层（Context Layer）](reference/context)** — 追踪决策与数据谱系。模块：`context`、`provenance`、`change_management`
- **[输出层（Output Layer）](reference/export)** — 将结果交付到下游。模块：`export`、`visualization`、`pipeline`、`explorer`


## 我需要哪个模块？

请参阅 [选择合适的模块](choose-your-module) 指南——它将 35+ 个开发者目标映射到全部 27 个模块中对应的起点，并为最常见的路径提供可运行的代码。


## 下一步

- [核心概念](concepts) — 深入讲解知识图谱、本体和推理。
- [Quickstart 教程](quickstart) — 完整的 6 步流水线演练与可运行代码。
- [模块参考](modules) — 每个模块、类和常见链路的详细说明。
- [API 参考](reference/context) — 所有类和方法的完整模块文档。


## 获取帮助

- [Discord](https://discord.gg/sV34vps5hH) — 提问、分享项目、获取社区支持。
- [GitHub Issues](https://github.com/semantica-agi/semantica/issues) — 报告 Bug 或提交功能请求。
- [FAQ](faq) — 常见问题解答。
