---
title: 自动深度研究
slug: /starter-projects-auto-deep-research
---

# 自动深度研究

Auto Deep Research 是一个强大的深度研究工具，能够对任意主题进行深入探索和分析。

## 功能特点

- **多维度分析**：从多个角度对研究主题进行全面分析
- **智能搜索**：自动搜索和整合相关资料
- **结构化输出**：生成清晰、结构化的研究报告
- **持续迭代**：不断深化研究内容直至达到满意深度

## 快速开始

### 环境要求

- Node.js 16+
- npm 或 yarn

### 安装步骤

1. 克隆项目仓库
2. 安装依赖：`npm install`
3. 配置环境变量
4. 运行项目：`npm run dev`

### 基本使用

```javascript
import { AutoDeepResearch } from '@autoagent/research';

const researcher = new AutoDeepResearch({
  theme: 'your-research-topic',
  depth: 3
});

const result = await researcher.start();
```

## 配置选项

| 选项 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| theme | string | - | 研究主题（必填） |
| depth | number | 2 | 研究深度级别 |
| sources | number | 10 | 最多参考源数量 |
| language | string | 'zh-CN' | 输出语言 |

## 应用场景

- 学术研究辅助
- 市场调研分析
- 技术可行性研究
- 竞品分析
- 趋势预测

## 注意事项

- 请确保网络连接正常以获取最新资料
- 研究深度越大，所需时间越长
- 建议设置合理的超时时间
