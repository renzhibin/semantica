> 本文是 [CONTRIBUTING.md](CONTRIBUTING.md) 的中文翻译版本。

# 为 Semantica 做贡献

感谢你对贡献的关注！每一份贡献，无论大小，都非常有价值。🎉

⭐ **给我们一颗 Star** • 🍴 **[Fork Semantica](https://github.com/semantica-agi/semantica/fork)** • 💬 **加入我们的 [Discord](https://discord.gg/sV34vps5hH)**

> **第一次参与贡献？** 可以从 [`good first issue`](https://github.com/semantica-agi/semantica/labels/good%20first%20issue) 开始，或者加入我们的 [Discord](https://discord.gg/sV34vps5hH) 社区。

---

## 🚀 快速开始

1. 找一个 [`good first issue`](https://github.com/semantica-agi/semantica/labels/good%20first%20issue)
2. [Fork Semantica](https://github.com/semantica-agi/semantica/fork) 并克隆仓库
3. 进行你的修改
4. 提交一个 Pull Request（拉取请求）！

**需要帮助？** 加入 [Discord](https://discord.gg/sV34vps5hH) 或 [GitHub Discussions](https://github.com/semantica-agi/semantica/discussions)

---

## 🗂️ 认领已有的 Issue

如果你想处理一个已有的 GitHub Issue（议题），请按以下步骤操作，以保持协调并避免重复劳动：

1. **查看 Issue 状态。** 查看 Issue 的指派人和最新评论。如果已有人在积极处理，请考虑选择其他 Issue，或在评论中询问是否需要帮助。

2. **留言表达认领意愿。** 留下类似 *"我想认领这个 Issue"* 的评论是获得指派最快的方式，但这不是必须的——维护者也可以直接将 Issue 指派给贡献者（例如根据该贡献者近期在仓库中的活跃度），而无需等待评论。

3. **等待指派。** 维护者会在合适的时候进行指派，无论是否有人留言。请在获得指派之前不要投入大量时间进行实现，因为优先级和方案随时可能调整。

4. **创建分支并实现。** 获得指派后，Fork 仓库（如果尚未 Fork），创建专用分支，然后开始工作。

   ```bash
   git checkout -b fix/short-description   # 或 feature/short-description
   ```

5. **提交精准的 PR 并关联 Issue。** 准备好后，提交一个 Pull Request，并在描述中引用相关 Issue（例如 `Closes #123`）。PR 的范围应限定在 Issue 描述的工作内容内。

> **为什么这很重要：** 指派（无论是否有评论）帮助维护者追踪谁在做什么，防止两位贡献者独立解决同一个问题。这也给你一个在编写代码之前与维护者对齐预期方案的机会。

不知道从哪里开始？试试 [`good first issue`](https://github.com/semantica-agi/semantica/labels/good%20first%20issue) 或在 [Discord](https://discord.gg/sV34vps5hH) 中提问。

---

## 🔀 重复 PR 与 Issue 优先级

当多个 Pull Request 针对同一个 Issue 时，维护者按以下优先级进行分流。这些规则用于在遵循[上述指派流程](#-认领已有的-issue)的 PR 之间做出选择——在未被指派的情况下提交 PR 并不会自动获得优先权，未被指派的 PR 在其他人被指派后仍可能被关闭为重复项。

1. **贡献者自己提出的 Issue 并已提交 PR。** 如果 Issue 的创建者也为此提交了 PR，该 PR 将被优先处理（但仍需在合并前被正式指派）。
2. **维护者创建的 Issue 且有人留言认领。** 如果我们创建了 Issue 且有人留言请求处理，我们会将其指派给该贡献者，并优先审查其 PR。
3. **无人认领或指派。** 如果存在多个 PR 且无人被指派或认领，优先权将给予过去 60 天内在仓库中活跃度最高的贡献者（例如合并的 PR、实质性的代码审查或 Issue 分流参与）——而不仅仅是 PR 数量。
4. **迟到的重复 PR。** 如果在某位贡献者已被指派后才提交 PR，我们会尽早关闭重复的 PR，并引导作者去处理其他开放的 Issue（或建议查看 `main` 分支上新开的 Issue）。这避免了贡献者在不会被合并的 PR 上浪费时间。
5. **范围重叠。** 如果一个 PR 涵盖多个 Issue，或者竞争的 PR 之间存在实质性重叠，维护者会先在 [Discord](https://discord.gg/sV34vps5hH) 讨论后再做决定，而不是单方面裁定。

**为什么这很重要：** 这使分流过程可预测，避免贡献者在不会合并的 PR 上浪费精力，并有助于留住活跃的贡献者。

---

## 🎯 贡献方式

### 💻 代码

**你可以做的：**
- 修复 Bug（缺陷）
- 添加新功能
- 改善代码质量（添加类型注解、文档字符串、改进错误提示信息）
- 优化性能

**位置：** `semantica/` 目录

**适合新手的 Issue：** 添加 docstring（文档字符串）、type hints（类型注解）或改进错误提示信息

---

### 📝 文档

**你可以做的：**
- 修复拼写和语法错误
- 提高文档的清晰度和可读性
- 添加代码示例和教程
- 创建新的 cookbook 笔记本
- 改善 API 文档（文档字符串）
- 创建故障排查指南
- 更新安装说明
- 补充缺失的文档

**位置：** `README.md`、`docs/`、`cookbook/`、代码中的 docstring

**适合新手的 Issue：** 修复拼写错误、添加示例、创建 cookbook 教程、改善 docstring

**文档格式要求：**
- 使用清晰简洁的语言
- 在适当的地方包含代码示例
- 遵循 Markdown 最佳实践
- 使用正确的标题层级
- 添加指向相关章节的链接
- 为 UI 相关文档添加截图

---

### 🧪 测试

**你可以做的：**
- 添加单元测试
- 提高测试覆盖率
- 添加集成测试

**位置：** `tests/` 目录

**适合新手的 Issue：** 为特定函数或类添加测试

---

### 🐛 Bug 报告

**内容：** 报告你发现的 Bug

**方式：** 使用 [Bug 报告模板](https://github.com/semantica-agi/semantica/issues/new?template=bug_report.md)

**请包含：** 描述、复现步骤、预期行为与实际行为、环境详情

---

### 💡 功能请求

**内容：** 建议新功能或改进

**方式：** 使用 [功能请求模板](https://github.com/semantica-agi/semantica/issues/new?template=feature_request.md)

**请包含：** 问题描述、建议的解决方案、使用场景

---

### 🎨 Cookbook 与示例

**内容：** 创建教程和示例

**位置：** `cookbook/` 目录

**示例：** 创建新笔记本、添加示例、改进现有教程

---

### 💬 社区支持

**内容：** 帮助社区中的其他人

**渠道：** [Discord](https://discord.gg/sV34vps5hH)、[GitHub Discussions](https://github.com/semantica-agi/semantica/discussions)

**示例：** 回答问题、审查 PR、分享你的项目

---

### 🎓 教育内容

**内容：** 创建教育材料

**示例：** 博客文章、视频教程、演讲、工作坊、案例研究

---

### 🔧 其他贡献

- **设计与图形：** Logo、图表、可视化
- **工具与集成：** CLI 工具、与其他框架的集成
- **基础设施：** CI/CD 改进、Docker 优化
- **安全：** 报告安全漏洞（请私下联系）

---

## 📋 入门指南

### 1. Fork 与克隆

首先在 GitHub 上 [Fork Semantica](https://github.com/semantica-agi/semantica/fork)，然后：

```bash
git clone https://github.com/your-username/semantica.git
cd semantica
git remote add upstream https://github.com/semantica-agi/semantica.git
```

### 2. 配置开发环境

```bash
# 创建虚拟环境
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 安装开发依赖
pip install -e ".[dev]"

# 安装 pre-commit 钩子（可选）
pre-commit install
```

### 固定的 CI 依赖

`requirements-ci.txt` 将所有传递依赖锁定到精确版本，以确保 CI、安全扫描和发布构建每次安装完全相同的包（相当于 Python 版本的 `explorer/package-lock.json` + `npm ci`）。它是一个**独立的构建环境**：每个包都带有 SHA-256 哈希（`--generate-hashes`），因此安装是可重现且供应链安全的——切勿将其安装到本地开发环境中。

在修改 `pyproject.toml` 依赖后重新生成：

```bash
pip install uv==0.12.1
uv pip compile pyproject.toml --python-version 3.11 --extra all --generate-hashes -o requirements-ci.txt
```

`all` extra 是仓库的跨平台依赖集（GPU 相关的 extra 如 `faiss-gpu`/`cupy` 被排除在外，在 Linux 上单独安装——详见 `pyproject.toml`）。请保持固定的 `uv` 版本与 CI 一致，以确保重新生成的确定性。

CI 的过期检查会以提交的 lockfile 作为约束重新解析，并仅比较版本行：上游包发布不会导致 CI 失败——lockfile 仅在 `pyproject.toml` 有意更改时才会变化。

如果 `requirements-ci.txt` 相对于 `pyproject.toml` 已过期（版本行比较会检测新增/移除/更改的依赖），CI 将会失败。

构建系统锁定：`[build-system].requires` 固定为精确版本（`setuptools==84.0.0`、`wheel==0.48.0`），发布构建使用 `python -m build --no-isolation` 配合 lockfile——构建过程中不存在任何未锁定的隔离环境。

### 3. 创建分支

```bash
git checkout -b feature/your-feature-name
# 或
git checkout -b fix/bug-description
```

### 4. 进行修改

- 遵循代码风格（见下文）
- 为新功能添加测试
- 更新文档

### 5. 运行检查

```bash
pytest                          # 运行测试
black semantica/ tests/        # 格式化代码
isort semantica/ tests/         # 排序导入
flake8 semantica/ tests/        # 代码检查
```

或使用 pre-commit 钩子：`pre-commit run --all-files`

### 6. 提交与推送

```bash
git commit -m "feat(module): add new feature"
git push origin feature/your-feature-name
```

然后在 GitHub 上创建一个 Pull Request！

---

## 📐 代码风格

我们使用自动化工具：

| 工具     | 用途                    | 命令                    |
|----------|----------------------------|----------------------------|
| **Black** | 代码格式化            | `black semantica/ tests/` |
| **isort** | 导入排序             | `isort semantica/ tests/` |
| **flake8** | 代码风格检查          | `flake8 semantica/ tests/` |
| **mypy** | 类型检查              | `mypy semantica/`          |

**全部运行：** `black semantica/ tests/ && isort semantica/ tests/ && flake8 semantica/ tests/ && mypy semantica/`

---

## 🧪 测试

```bash
pytest                          # 运行所有测试
pytest --cov=semantica         # 带覆盖率
pytest tests/test_file.py      # 指定文件
```

**覆盖率目标：** 最低 80%，关键模块 90% 以上

---

## 📝 提交信息

使用 [Conventional Commits](https://www.conventionalcommits.org/)（约定式提交）：

```
feat(kg): add temporal graph support
fix(parse): handle empty PDF files
docs(readme): add installation guide
test(extract): add unit tests
```

**类型：** `feat`、`fix`、`docs`、`test`、`refactor`、`perf`、`style`、`chore`

---

## ✅ PR 检查清单

提交前请确认：

- [ ] 代码遵循风格指南
- [ ] 本地测试通过
- [ ] 已添加新测试（如适用）
- [ ] 已更新文档
- [ ] 提交信息遵循规范
- [ ] 无合并冲突

---

## 📖 文档标准

### 代码文档（文档字符串）

**格式：** 使用 Google 风格的 docstring

```python
def extract_entities(text: str, model: str = "transformer") -> List[Entity]:
    """Extract named entities from text.
    
    Args:
        text: Input text to process
        model: NER model to use (default: "transformer")
    
    Returns:
        List of extracted Entity objects
    
    Raises:
        ValueError: If text is empty or model is invalid
    
    Example:
        >>> from semantica.semantic_extract import NERExtractor
        >>> ner = NERExtractor(method="ml", model="en_core_web_sm")
        >>> entities = ner.extract("Apple Inc. was founded in 1976.")
        >>> len(entities)
        2
    """
```

### Markdown 文档格式

**通用指南：**
- 使用清晰的标题（H1 用于标题，H2 用于主要章节，H3 用于子章节）
- 段落保持简短聚焦
- 使用项目符号列表
- 添加带语法高亮的代码块
- 包含指向相关文档的链接

**代码块：**
- 使用带语言标识的三重反引号：` ```python `、` ```bash `
- 在代码示例中包含注释
- 在有帮助时展示预期输出

**示例：**

```markdown
## 章节标题

简短的介绍段落。

### 子章节

- 要点 1
- 要点 2

**代码示例：**

```python
from semantica import SomeClass

instance = SomeClass()
result = instance.method()
```

**注意：** 补充上下文或警告信息。
```

**最佳实践：**
- 以概述/介绍开头
- 使用一致的术语
- 包含"另请参阅"链接
- 为复杂概念添加示例
- 保持文档间格式一致

---

## 🆘 获取帮助

- 💬 [Discord](https://discord.gg/sV34vps5hH) - 实时聊天
- 💭 [GitHub Discussions](https://github.com/semantica-agi/semantica/discussions) - 问答
- 🐛 [GitHub Issues](https://github.com/semantica-agi/semantica/issues) - Bug 报告

**提问前请：** 查看现有文档、搜索 Issue/Discussions、浏览 cookbook 示例

---

## 🏆 致谢

所有贡献者都会在以下位置获得认可：
- [CONTRIBUTORS.md](CONTRIBUTORS.md)
- GitHub 贡献者页面
- 发版说明

我们遵循 [all-contributors](https://allcontributors.org) 规范！

---

## 📜 行为准则

本项目遵循 [行为准则](CODE_OF_CONDUCT.md)。请保持尊重与包容。

---

## 📚 资源

- [README.md](README.md) - 项目概述
- [Cookbook](cookbook/) - 教程与示例
- [文档](docs/) - 综合指南

---

**感谢你的贡献！** 🚀

每一份贡献都很重要——无论是一行代码、一个拼写修正、一个有用的回答，还是一个 Bug 报告。我们感谢你！🙏

⭐ **给我们一颗 Star** • 🍴 **[Fork Semantica](https://github.com/semantica-agi/semantica/fork)** • 💬 **加入我们的 [Discord](https://discord.gg/sV34vps5hH)**
