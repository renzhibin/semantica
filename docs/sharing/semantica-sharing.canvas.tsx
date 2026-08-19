import {
  useHostTheme,
  H1, H2, Text, Card, CardHeader, CardBody, Row, Stack, Grid,
  Divider, Stat, Table, Callout, CollapsibleSection,
} from "cursor/canvas";

export default function SemanaticaSharing() {
  const t = useHostTheme();

  return (
    <Stack gap={20} style={{ padding: 24, maxWidth: 920 }}>
      <div>
        <H1>Semantica 框架分享 &amp; Ontology 借鉴</H1>
        <Text tone="tertiary" size="small">
          Semantica — 面向 AI Agent 的图原生基础设施 · "The Open Source Palantir for AI Agents" · MIT · v0.6.5
        </Text>
      </div>

      <Divider />

      {/* ===== Part 1 ===== */}
      <H2>一、Semantica 是什么</H2>

      <Row gap={12} wrap>
        <Stat label="版本" value="v0.6.5" />
        <Stat label="核心语言" value="Python" />
        <Stat label="子模块" value="30+" />
        <Stat label="CLI 命令" value="50+" />
        <Stat label="API 端点" value="100+" />
      </Row>

      <Text>
        Semantica 定位为 AI 系统的可问责与上下文层：为每个 AI 决策提供完整的上下文图谱、因果链和溯源记录。面向金融、医疗、法律等强监管场景。
      </Text>

      {/* ===== Part 2: Pipeline ===== */}
      <H2>二、核心流水线架构</H2>

      <Card>
        <CardBody>
          <Text style={{ fontFamily: "monospace", fontSize: 13, lineHeight: 1.8 }}>
            Ingest → Parse → Normalize → Split → Extract → Conflict Detection → Dedup → KG Build → Reasoning → Store → Export
          </Text>
        </CardBody>
      </Card>

      <Table
        headers={["阶段", "能力", "亮点"]}
        rows={[
          ["Ingest", "文件/数据库/Web/流/云多源摄入", "统一适配器抽象"],
          ["Parse + Split", "文档解析 + 智能分块", "实体感知/本体感知/图结构分块"],
          ["Extract", "NER、关系抽取、事件检测、三元组", "不依赖 LLM 的确定性抽取"],
          ["Conflict + Dedup", "矛盾检测 + 实体去重合并", "矛盾信息不被静默覆盖"],
          ["KG Build", "知识图谱构建（双时态事实）", "时态事实 + 实体消解"],
          ["Reasoning", "Rete / Datalog / SPARQL 推理", "多引擎可切换"],
          ["Provenance", "W3C PROV-O 溯源", "每条事实可追溯到原始来源"],
          ["Store", "图存储 + 向量存储", "多后端插件化"],
          ["Export", "RDF/JSON-LD/Parquet/Cypher/GraphML", "零锁定，标准格式"],
        ]}
        striped
      />

      {/* ===== Part 3: Design principles ===== */}
      <H2>三、核心设计理念（值得借鉴）</H2>

      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>1. Context Graph 上下文图</CardHeader>
          <CardBody>
            <Text>
              所有 Agent 知识和决策都通过结构化、可查询的上下文图谱呈现。不是简单的 key-value 或日志，而是有拓扑结构的图。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>2. Decision Intelligence 决策智能</CardHeader>
          <CardBody>
            <Text>
              Record → Link → Reason → Explain 生命周期。每个决策有因果链、影响分析和可解释报告。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>3. 确定性推理优先</CardHeader>
          <CardBody>
            <Text>
              图谱构建和推理不依赖 LLM，使用规则引擎（Rete/Datalog）确保可审计、可复现。LLM 只作为辅助。
            </Text>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>4. 多后端插件化</CardHeader>
          <CardBody>
            <Text>
              图存储（Neo4j/FalkorDB/Neptune）和向量存储（FAISS/Qdrant/Milvus）均为统一接口 + 插件实现，零厂商锁定。
            </Text>
          </CardBody>
        </Card>
      </Grid>

      <Divider />

      {/* ===== Part 4: Comparison ===== */}
      <H2>四、Semantica vs Ontology 架构对比</H2>

      <Table
        headers={["维度", "Semantica", "Ontology（我们）"]}
        rows={[
          ["语言", "Python", "Go（Gin+GORM）"],
          ["图数据库", "Neo4j / FalkorDB / Neptune", "NebulaGraph"],
          ["向量搜索", "FAISS / Qdrant / Milvus / Pinecone", "TiDB 原生向量"],
          ["本体建模", "OWL / SHACL / SKOS 标准", "ObjectType + LinkType + PhysicalProperties"],
          ["数据同步", "Pipeline 编排（全量流水线）", "CDC（Debezium → Kafka → NebulaGraph）"],
          ["推理能力", "Rete / Datalog / SPARQL", "派生关系计算（cdc-task-service）"],
          ["溯源", "W3C PROV-O 完整溯源", "暂无标准化溯源"],
          ["冲突检测", "内建冲突检测 + 去重模块", "暂无"],
          ["可解释性", "决策因果链 + 解释生成", "暂无"],
          ["部署", "Docker / K8s / Helm + 多云", "K8s / Helm"],
        ]}
        striped
      />

      {/* ===== Part 5: Recommendations ===== */}
      <H2>五、对 Ontology 开发的借鉴建议</H2>

      <CollapsibleSection title="1. 引入标准化本体描述（OWL/SHACL）— 短期可落地" defaultOpen>
        <Stack gap={6}>
          <Text weight="semibold">现状：</Text>
          <Text>我们的 ObjectType/LinkType 是自定义 Schema，缺少行业标准互操作性。</Text>
          <Text weight="semibold">建议：</Text>
          <Text>在 metadata-service 中增加 OWL/SHACL 导出能力，使本体定义可以与外部工具（Protege、TopBraid）互通。不需要改存储，只加导出层。</Text>
        </Stack>
      </CollapsibleSection>

      <CollapsibleSection title="2. 增加数据溯源（Provenance）— 中期建设" defaultOpen>
        <Stack gap={6}>
          <Text weight="semibold">现状：</Text>
          <Text>实例数据的来源和变更历史难以追溯。</Text>
          <Text weight="semibold">建议：</Text>
          <Text>参考 Semantica 的 W3C PROV-O 模型，在 CDC 写入链路中记录来源元数据（who/when/from-where），存入 NebulaGraph 或独立审计表。对合规场景（如军工、政务）价值极大。</Text>
        </Stack>
      </CollapsibleSection>

      <CollapsibleSection title="3. 冲突检测与去重 — 中期建设" defaultOpen>
        <Stack gap={6}>
          <Text weight="semibold">现状：</Text>
          <Text>多源数据汇入时，重复或矛盾数据可能被静默写入。</Text>
          <Text weight="semibold">建议：</Text>
          <Text>在 cdc-task-service 写入前增加冲突检测环节。Semantica 的策略是「矛盾不覆盖，标记待人工裁决」，适合我们的数据治理场景。</Text>
        </Stack>
      </CollapsibleSection>

      <CollapsibleSection title="4. 统一存储后端抽象 — 长期架构优化" defaultOpen>
        <Stack gap={6}>
          <Text weight="semibold">现状：</Text>
          <Text>NebulaGraph、TiDB、Redis 等存储的访问逻辑散布在各服务中。</Text>
          <Text weight="semibold">建议：</Text>
          <Text>参考 Semantica 的插件化存储抽象，统一图存储和向量存储的接口层。好处：方便后续替换存储引擎，降低服务间耦合。</Text>
        </Stack>
      </CollapsibleSection>

      <CollapsibleSection title="5. 图推理能力增强 — 长期演进" defaultOpen>
        <Stack gap={6}>
          <Text weight="semibold">现状：</Text>
          <Text>仅有 cdc-task-service 中的派生关系计算，缺少通用推理引擎。</Text>
          <Text weight="semibold">建议：</Text>
          <Text>可引入轻量级规则引擎（类似 Rete/Datalog），支持用户定义推理规则（如「A 拥有 B，B 位于 C → A 关联 C」）。Semantica 的多推理引擎可切换思路值得参考。</Text>
        </Stack>
      </CollapsibleSection>

      <Divider />

      {/* ===== Part 6: Summary ===== */}
      <H2>六、总结</H2>

      <Callout tone="info">
        <Text>
          Semantica 的核心价值不在于代码实现（Python vs Go），而在于知识图谱工程化的完整思考：从数据摄入到推理到溯源到可解释性，每一层都有清晰的抽象和标准化设计。我们的 Ontology 平台已经在存储和同步层做得不错，下一步可以在「本体标准化、溯源、冲突检测、推理引擎」四个方向上借鉴 Semantica 的设计思路，逐步提升平台的数据治理和智能化能力。
        </Text>
      </Callout>

      <Text tone="tertiary" size="small">
        Semantica GitHub: github.com/Semantica-ai/semantica · MIT License · v0.6.5
      </Text>
    </Stack>
  );
}
