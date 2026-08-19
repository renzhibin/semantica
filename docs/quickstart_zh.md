---
title: "Quickstart"
description: "Build your first knowledge graph in 5 minutes. No configuration required."
icon: "rocket"
---

> 本文是对应英文文档的中文翻译版本。

<Info>
  **v0.5.0** — Ontology Hub、Distance Intelligence、Parquet 与 XML 数据摄取、12 项安全修复。<a href="https://github.com/semantica-agi/semantica/releases" style={{color:"#10B981",fontWeight:600,textDecoration:"none"}}>查看新特性 →</a>
</Info>

本指南将引导你完成构建第一个知识图谱（Knowledge Graph）的端到端流程。安装完成后即可从这里开始。LLM API 密钥是可选的：基于模式（Pattern）的抽取开箱即用。


## 安装

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

验证安装：

```bash
python -c "import semantica; print(semantica.__version__)"
# 0.5.0
```


## 完整流程

<img src="/assets/img/diagrams/pipeline-flow.svg" alt="Semantica end-to-end pipeline: Ingest → Parse → Normalize → Extract → Build KG → QA → Store → Deliver" style={{ width: '100%', borderRadius: '10px', margin: '0 0 24px' }} />

<Steps>

<Step title="数据摄取（Ingest）">

从文件、目录、URL 或数据库加载文档。

<CodeGroup>

```python File
from semantica.ingest import FileIngestor

ingestor = FileIngestor()
sources  = ingestor.ingest("data/report.pdf")
# 同样支持: .docx, .html, .json, .csv, .xlsx, .pptx, .parquet, .xml
```

```python Web
from semantica.ingest import WebIngestor

ingestor = WebIngestor(max_depth=2)
sources  = ingestor.ingest("https://example.com/article")
```

```python Parquet / XML (v0.5.0)
from semantica.ingest import ParquetIngestor, XMLIngestor

# 单个文件或 Hive 分区目录
sources = ParquetIngestor().ingest("data/events.parquet")

# 带 XSD schema 校验的 XML
sources = XMLIngestor(validate_xsd="schema.xsd").ingest("data/records/")
```

</CodeGroup>

</Step>

<Step title="文档解析（Parse）">

从原始文档中提取结构化文本和版面信息。

```python
from semantica.parse import DocumentParser

parser = DocumentParser()
parsed = parser.parse(sources[0])

print(parsed.text[:200])  # extracted text
print(parsed.metadata)    # title, author, date, source
```

<Tip>
  对于包含表格、图表或多栏排版的 PDF，建议使用 `DoclingParser`：它支持高级版面分析，可在提取文本的同时返回结构化表格数据。
</Tip>

```python
from semantica.parse import DoclingParser

parser = DoclingParser()
parsed = parser.parse(sources[0])
print(parsed.tables)  # structured table objects
```

</Step>

<Step title="实体与关系抽取（Extract Entities & Relationships）">

识别命名实体（Named Entity）并提取它们之间的类型化关系。

<CodeGroup>

```python Pattern-based (fast, no API key)
from semantica.semantic_extract import NERExtractor, RelationExtractor

ner      = NERExtractor(method="pattern")
entities = ner.extract(parsed)
# Returns: [{"text": "Apple Inc.", "type": "ORGANIZATION", "confidence": 0.98}, ...]

rel           = RelationExtractor(method="rule")
relationships = rel.extract(parsed, entities=entities)
# Returns: [{"subject": "Steve Jobs", "predicate": "founded", "object": "Apple Inc."}, ...]
```

```python LLM-powered (higher accuracy)
from semantica.semantic_extract import NERExtractor, RelationExtractor
from semantica.llms import Groq

llm = Groq(model="llama-3.3-70b-versatile")

ner           = NERExtractor(method="llm", llm_provider=llm)
entities      = ner.extract(parsed)

rel           = RelationExtractor(method="llm", llm_provider=llm)
relationships = rel.extract(parsed, entities=entities)
```

</CodeGroup>

</Step>

<Step title="构建知识图谱（Build the Knowledge Graph）">

将抽取到的实体和关系组装为可查询的知识图谱。

```python
from semantica.kg import GraphBuilder

builder = GraphBuilder(merge_entities=True)
graph   = builder.build({"entities": entities, "relationships": relationships})

print(f"Graph: {len(graph['entities'])} nodes, {len(graph['relationships'])} edges")
```

<Note>
  `merge_entities=True` 会通过语义相似度自动消解重复实体引用，例如 "Apple"、"Apple Inc."、"AAPL" 会被合并，无需手动去重。
</Note>

</Step>

<Step title="可视化（Visualize）">

在浏览器中渲染交互式、可缩放的知识图谱。

```python
from semantica.visualization import KGVisualizer

viz = KGVisualizer(
    layout="force",        # "force" | "hierarchical" | "circular"
)
viz.visualize_network(graph, output="html", file_path="graph.html", node_color_by="type")
```

在任意浏览器中打开 `graph.html`：支持平移、缩放、点击节点查看详情、按实体类型筛选。

</Step>

<Step title="导出（Export）">

导出为任意下游格式。

<CodeGroup>

```python RDF / Semantic Web
from semantica.export import RDFExporter

exporter = RDFExporter()
exporter.export(graph, file_path="graph.ttl",    format="turtle")
exporter.export(graph, file_path="graph.jsonld", format="json-ld")
exporter.export(graph, file_path="graph.nt",     format="nt")
```

```python Parquet / Analytics
from semantica.export import ParquetExporter

exporter = ParquetExporter()
exporter.export(graph, file_path="output/graph.parquet")
# 输出 nodes.parquet + edges.parquet：可直接用于 Spark、BigQuery、Databricks
```

```python ArangoDB
from semantica.export import ArangoAQLExporter

exporter = ArangoAQLExporter()
aql      = exporter.export(graph)
# 返回可直接执行的 AQL INSERT 语句
```

</CodeGroup>

</Step>

</Steps>


## 添加决策智能（Decision Intelligence）

只需额外导入一个模块，即可为每个 Agent 决策记录完整因果链和溯源信息：

```python
from semantica.context import AgentContext, ContextGraph
from semantica.vector_store import VectorStore

context = AgentContext(
    vector_store=VectorStore(backend="faiss", dimension=768),
    knowledge_graph=ContextGraph(advanced_analytics=True),
    decision_tracking=True,
)

# 存储带溯源信息的事实
context.store("GPT-4 outperforms GPT-3.5 on reasoning benchmarks by 40%")

# 记录一项决策
decision_id = context.record_decision(
    category="model_selection",
    scenario="Choose LLM for production reasoning pipeline",
    reasoning="GPT-4 benchmark advantage justifies 3x cost increase",
    outcome="selected_gpt4",
    confidence=0.91,
)

# 检索相似的历史决策，避免不一致的选择
precedents = context.find_precedents("model selection reasoning", limit=5)
influence  = context.analyze_decision_influence(decision_id)
```


## 常见模式

<AccordionGroup>

<Accordion title="直接处理原始文本，无需文件" icon="text">

```python
from semantica.semantic_extract import NERExtractor, RelationExtractor

text = "Apple Inc. was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976 in Cupertino, California."

ner           = NERExtractor()
entities      = ner.extract(text)

rel           = RelationExtractor()
relationships = rel.extract(text, entities=entities)
```

</Accordion>

<Accordion title="多源增量构建图谱" icon="layer-group">

```python
from semantica.kg import GraphBuilder

builder     = GraphBuilder(merge_entities=True)
all_entities, all_rels = [], []

for doc in parsed_docs:
    entities = ner.extract(doc)
    rels     = rel.extract(doc, entities=entities)
    all_entities.extend(entities)
    all_rels.extend(rels)

graph = builder.build({"entities": all_entities, "relationships": all_rels})
```

</Accordion>

<Accordion title="时序知识图谱与时间点查询" icon="clock">

```python
from semantica.kg import GraphBuilder, TemporalGraphQuery

builder = GraphBuilder()
kg = builder.build({
    "entities": [
        {"id": "alice",     "type": "Person"},
        {"id": "acme_corp", "type": "Organization"},
        {"id": "beta_ltd",  "type": "Organization"},
    ],
    "relationships": [
        {
            "source": "alice", "target": "acme_corp", "type": "ceo_of",
            "valid_from": "2018-01-01", "valid_until": "2022-06-01",
        },
        {
            "source": "alice", "target": "beta_ltd", "type": "ceo_of",
            "valid_from": "2022-06-01",
        },
    ],
})

tq = TemporalGraphQuery(temporal_granularity="day")

result_2020 = tq.query_at_time(kg, query="",  # query reserved for future use
                               at_time="2020-06-15")
result_2023 = tq.query_at_time(kg, query="", at_time="2023-01-01")

print(f"Relationships active in 2020: {result_2020['num_relationships']}")
print(f"Relationships active in 2023: {result_2023['num_relationships']}")
```

</Accordion>

<Accordion title="持久化图存储：Neo4j、FalkorDB、Apache AGE" icon="database">

```python
from semantica.graph_store import Neo4jStore
from semantica.kg import GraphBuilder

store = Neo4jStore(
    uri="bolt://localhost:7687",
    user="neo4j",
    password="password",
)

builder = GraphBuilder(merge_entities=True, graph_store=store)
graph   = builder.build({"entities": entities, "relationships": relationships})
# 图谱已持久化到 Neo4j，进程重启后数据不会丢失
```

</Accordion>

<Accordion title="完整溯源流水线：W3C PROV-O" icon="link">

```python
from semantica.provenance import ProvenanceManager
from semantica.kg import GraphBuilder

prov    = ProvenanceManager()
prov.track_entity("Apple Inc.", "data/report.pdf", metadata={"confidence": 0.98})

builder = GraphBuilder(merge_entities=True)
graph   = builder.build({"entities": entities, "relationships": relationships})

# 检索任意实体的完整来源链
sources = prov.get_all_sources("Apple Inc.")
print(sources[0])
# {"source": "data/report.pdf", "location": None, "timestamp": "...", "confidence": 0.98}
```

</Accordion>

</AccordionGroup>


## 故障排查

<AccordionGroup>

<Accordion title="未抽取到任何实体" icon="magnifying-glass">

文档可能包含扫描图片而非机器可读文本。启用 OCR：

```python
from semantica.parse import DocumentParser

parser = DocumentParser(ocr=True)  # enables Tesseract OCR
parsed = parser.parse(sources[0])
```

</Accordion>

<Accordion title="大规模语料处理速度慢" icon="gauge">

启用并行处理和 GPU 加速：

```bash
pip install semantica[gpu]
```

```python
from semantica.pipeline import Pipeline

pipeline = Pipeline(workers=8, batch_size=32)
pipeline.run(sources)
```

</Accordion>

<Accordion title="大规模图谱导致内存错误" icon="memory">

从内存中的 NetworkX 切换为持久化后端：

```python
from semantica.graph_store import FalkorDBStore

store   = FalkorDBStore(host="localhost", port=6379)
builder = GraphBuilder(merge_entities=True, graph_store=store)
```

</Accordion>

<Accordion title="NER 在企业网关下回退到 pattern 模式" icon="triangle-exclamation">

该问题已在 **v0.5.0** 中修复。请升级：

```bash
pip install --upgrade semantica
```

</Accordion>

</AccordionGroup>


## 下一步

- [核心概念](concepts) — 知识图谱、本体、推理引擎：Semantica 背后的思维模型。
- [模块参考](modules) — 每个模块的详细说明及关键类和常见链路。
- [API 参考](reference/context) — 所有模块、类和参数的完整文档。
- [Cookbook](cookbook) — 40+ 交互式 Jupyter 笔记本，使用真实世界数据集。
