---
title: Python API
---

# Python API

AutoAgent Python API 文档将在部署后更新。

## 安装

```bash
pip install autoagent
```

## 快速开始

```python
from autoagent import Agent

# 创建 Agent
agent = Agent.create("my_agent")

# 运行 Agent
result = agent.run("帮我分析这个文档")
print(result)
```

## 核心组件

| 组件 | 说明 |
|------|------|
| `Agent` | 智能体核心类 |
| `Tool` | 工具定义基类 |
| `Workflow` | 工作流编排 |
| `Memory` | 记忆管理系统 |

## 下一步

- 查看 [开发指南](/dev-guide) 了解更多 API 用法
- 查看 [入门项目](/starter-projects) 实战示例
