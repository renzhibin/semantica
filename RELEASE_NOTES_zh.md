> 本文是 [RELEASE_NOTES.md](RELEASE_NOTES.md) 的中文翻译版本。

# Semantica 0.5.0 发布说明

## 🎉 重大版本发布：距离智能与本体中心全面完成

**发布日期：** May 11, 2026  
**版本号：** 0.5.0  

---

## 🚀 **主要亮点**

### **Distance Intelligence Framework（距离智能框架）** (PR #502, @KaifAhmad1)
- **Embedding 缓存优化**：基于图修订版本的会话级缓存，性能提升 10 倍以上
- **高级 UI 功能**：Ego 模式、叠加层、热力图和路径检查器
- **语义邻域搜索**：上下文感知的相似度计算与邻近度指标
- **Distance Matrix API**：带缓存的 N×N 语义距离计算

### **完整 Ontology Hub（本体中心）套件** (PR #517, @KaifAhmad1 @ZohaibHassan16)
- **Alignments 标签页** (PR #524)：跨本体对齐编辑，支持 ML 建议
- **健康仪表盘** (PR #524)：覆盖 5 个维度的质量评分与问题跟踪
- **SHACL Studio** (PR #524)：交互式形状生成与验证
- **可视化编辑器** (PR #519)：基于画布的本体编辑，无需手写代码
- **注册中心与搜索** (PR #518)：全面的本体管理和发现

### **安全加固** (Security Enhancement PR, @KaifAhmad1)
- **修复 12 个严重漏洞**：Eval 注入、XXE、SQL 注入等
- **SSRF 防护**：全面的 URL 验证与主机名解析
- **输入验证**：增强的文件上传限制与格式检测
- **CORS 与安全头**：正确的安全头配置和 WebSocket 防护

---

## 📊 **数据一览**

- **12 项主要功能** ✅ 已测试并验证
- **16 个 Ontology Hub API 端点** ✅ 生产就绪
- **57 个新增 Distance Intelligence 测试** ✅ 全部通过
- **32 个 Parquet 导入测试** ✅ 全部通过
- **12 个安全漏洞** ✅ 全部修补
- **100% 测试覆盖率** ✅ 核心功能已验证

---

## 🔧 **新增功能**

### **性能与架构**
- **Distance Intelligence Embedding 缓存** (PR #502, @KaifAhmad1)：线程安全的会话级缓存，支持自动失效
- **Parquet 文件导入** (PR #548, @Luffy2208)：基于 PyArrow 的后端，支持列选择和分区
- **索引搜索** (PR #481, @ZohaibHassan16)：大规模图的 O(log n) 搜索（118k 节点：24ms → 0.004ms）

### **Ontology Hub 套件**
- **跨本体对齐** (PR #524, @KaifAhmad1 @ZohaibHassan16)：ML 驱动的建议与置信度评分
- **质量健康仪表盘** (PR #524, @KaifAhmad1 @ZohaibHassan16)：5 维评分与可操作的问题跟踪
- **SHACL Studio** (PR #524, @KaifAhmad1 @ZohaibHassan16)：交互式形状编辑，集成 Monaco 编辑器
- **可视化本体编辑器** (PR #519, @KaifAhmad1)：拖放式本体构建
- **16 个后端端点** (PRs #518, #519, #524, @KaifAhmad1 @ZohaibHassan16)：完整的 CRUD 和分析能力

### **UI 与用户体验**
- **Distance Intelligence UI** (PR #502, @KaifAhmad1 @ZohaibHassan16)：Ego 模式、叠加层、热力图、路径检查器
- **Explorer 界面重新设计** (PR #516, @ZohaibHassan16)：现代化首屏设计，带实时指标
- **Graph Workspace 精简** (PR #483, @ZohaibHassan16)：改进密集图的可视化效果
- **双向路径查找** (PR #469, @KaifAhmad1)：无向遍历支持

### **平台兼容性**
- **Windows 安装修复** (PR #532, @KaifAhmad1)：从 `[all]` 中移除 faiss-gpu，支持 Unicode 控制台
- **跨平台依赖** (PR #527, @ZohaibHassan16)：正确的可选依赖管理
- **MCP Server 包结构** (PR #541, @KaifAhmad1)：修复 pipx 安装问题

### **算法增强**
- **DuplicateDetector 结果限制** (PR #534, @KaifAhmad1)：排名、排序和增量检测功能
- **ConflictDetector 参数处理** (PR #533, @KaifAhmad1)：方法参数验证与错误处理

---

## 🛡️ **安全改进** (Security Enhancement PR, @KaifAhmad1)

### **严重漏洞修复**
- **Eval 注入** (CWE-95)：在媒体解析器中替换为 `fractions.Fraction`
- **Pickle 反序列化** (CWE-502)：切换为 JSON 格式并提供迁移支持
- **SQL 注入** (CWE-89)：参数化查询与输入验证
- **XXE 防护** (CWE-611)：对所有 RDF 解析使用 `defusedxml` 加固

### **Web 安全**
- **SSRF 防护**：URL 验证与主机名解析
- **CORS 加固**：收窄来源白名单和 WebSocket 限制
- **安全头**：HSTS、X-Content-Type-Options、X-Frame-Options
- **路径遍历防护**：使用 `Path.resolve().relative_to()` 保护

### **输入验证**
- **文件上传限制**：扩展名白名单和大小限制
- **SPARQL 限制**：行数上限、超时和并发控制
- **ReDoS 防护**：消除多项式复杂度的正则表达式

---

## 🔍 **质量保证**

### **测试覆盖**
- **Distance Intelligence**：57 个新测试，100% 通过
- **Parquet 导入**：32 个测试，全面覆盖
- **安全修复**：14 个针对特定漏洞的测试
- **UI 组件**：所有主要功能已验证
- **平台测试**：确认 Windows、Linux 兼容性

### **性能基准**
- **Embedding 缓存**：重复请求性能提升 10 倍以上
- **搜索性能**：大规模图快 6,000 倍
- **内存效率**：延迟加载和可选依赖
- **并发操作**：带锁的线程安全缓存

---

## 🔄 **破坏性变更**

### **依赖项**
- **Windows 用户**：`faiss-gpu` 已从 `[all]` 中移除——如需 GPU 支持请显式安装 `[gpu]`
- **可选依赖**：现在延迟加载以提升导入性能

### **API 变更**
- **ConflictDetector**：修复重复方法定义，正确处理参数
- **DuplicateDetector**：新增结果限制和排名选项

---

## 📚 **文档**

- **全面的变更日志**：详细的功能描述和贡献者致谢
- **API 文档**：所有新端点均已记录
- **安全公告**：完整的漏洞披露和修复说明
- **迁移指南**：破坏性变更和升级说明

---

## 🙏 **致谢**

**核心贡献者：**
- **@KaifAhmad1** - Distance Intelligence (PR #502)、安全加固、Ontology Hub (PRs #517, #518, #519, #524)、Windows 修复 (PR #532)、ConflictDetector (PR #533)、测试与发布准备
- **@ZohaibHassan16** - Ontology Hub UI (PRs #516, #518, #519, #524)、Graph Explorer (PRs #420, #481, #483, #503)、Semantic Extract (PR #536)、延迟加载 (PR #535)
- **@Luffy2208** - Parquet 导入支持 (PR #548)
- **@liling** - DeepSeek Provider 集成 (PR #482)
- **@Sameer6305** - Provenance 遍历修复 (PR #480)、命名图支持

**特别感谢：**
- 安全研究团队的漏洞披露
- 社区测试人员和反馈提供者
- 文档贡献者和审阅者

---

## 🚀 **安装**

```bash
# 标准安装
pip install semantica==0.5.0

# 安装所有可选依赖（跨平台）
pip install "semantica[all]==0.5.0"

# GPU 加速（仅限 Linux）
pip install "semantica[gpu]==0.5.0"

# Parquet 支持
pip install "semantica[ingest-parquet]==0.5.0"
```

---

## 📈 **0.5.0 的未来展望**

0.5.0 版本将 Semantica 打造为面向以下场景的生产就绪框架：

- **企业级知识工程**：全面的本体管理
- **高级分析**：通过距离智能和语义搜索实现
- **安全优先设计**：全面的漏洞防护
- **跨平台兼容性**：支持多样化的部署环境

**0.5.0 的后续计划：**
- PyPI 包发布与分发
- Docker 镜像更新，包含新功能
- 文档网站部署，更新指南
- 社区推广和功能发布公告
- 不同部署场景的集成测试

---

**🎯 Semantica 0.5.0：生产就绪的知识工程平台**
