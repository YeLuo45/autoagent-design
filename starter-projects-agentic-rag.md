---
title: Agentic RAG
slug: /starter-projects-agentic-rag
---

# AutoAgent 中的 Agentic RAG 实现

Agentic RAG（检索增强生成）是一种智能检索系统，能够根据需要自主决定是否以及如何从知识库中检索信息。传统的 RAG 方法（如 [chunkRAG](https://github.com/chonkie-ai/chonkie)、[MiniRAG](https://github.com/HKUDS/MiniRAG)、[LightRAG](https://github.com/HKUDS/LightRAG) 和 [GraphRAG](https://github.com/microsoft/graphrag)）存在局限性，因为它们依赖预定义的工作流程，难以判断是否已获得足够的知识来回答问题。为了使 RAG 流程更加智能，我们引入了由 [AutoAgent](https://github.com/HKUDS/AutoAgent) 驱动的 Agentic RAG，实现智能存储、检索和响应。

## 系统架构

### 1. 所需导入

```python
from constant import DOCKER_WORKPLACE_NAME
from autoagent.environment.docker_container import init_container
from autoagent.io_utils import read_yaml_file, get_md5_hash_bytext
from autoagent.agents import get_rag_agent
from autoagent.core import AutoAgent
from autoagent.environment.docker_env import DockerEnv, DockerConfig, with_env
import argparse
import asyncio
import csv
from tqdm import trange
import os
import json
import time
```

### 2. 环境配置

```python
def get_env(container_name: str = 'gaia_test', 
            model: str = 'gpt-4o-mini-2024-07-18',
            git_clone: bool = False, 
            setup_package: str = 'lite_pkgs'):
    workplace_name = DOCKER_WORKPLACE_NAME
    docker_config = DockerConfig(
        container_name=container_name,
        workplace_name=workplace_name,
        communication_port=12345,
        conda_path='/home/user/micromamba'
    )
    docker_env = DockerEnv(docker_config)
    return docker_env
```

系统运行在 Docker 容器中，提供隔离环境，主要配置包括：
- 容器名称
- 工作目录
- 通信端口
- Conda 环境路径

### 3. RAG Agent 设置

```python
async def main(container_name: str = 'gaia_test', model: str = 'gpt-4o-mini-2024-07-18', git_clone: bool = False, setup_package: str = 'lite_pkgs', test_pull_name: str = 'test_pull_1010', debug: bool = True, task_instructions: str = None):
    workplace_name = DOCKER_WORKPLACE_NAME
    # Docker 环境是可选的
    # docker_env = get_env(container_name, model, git_clone, setup_package, test_pull_name, debug)
    # docker_env.init_container()

    task_instructions = "YOUR TASK"

    rag_agent = get_rag_agent(model)#, rag_env=docker_env)
    mc = AutoAgent()
```

系统使用 AutoAgent 框架管理 RAG Agent，主要特性包括：
- 支持异步操作
- 可配置的语言模型
- 灵活的消息处理机制

### 4. 查询处理流程

```python
context_variables = {
    "working_dir": DOCKER_WORKPLACE_NAME,
    "user_query": task_instructions
}
messages = [{"role": "user", "content": task_instructions}]
response = await mc.run_async(
    agent=codeact_agent, 
    messages=messages,
    max_turns=10, 
    context_variables=context_variables, 
    debug=debug
)
```

查询处理包括以下步骤：
1. 设置上下文变量
2. 构建消息格式
3. 异步 Agent 执行
4. 控制最大对话轮数
5. 调试模式支持

## 使用方法

我们在 [`AutoAgent/evaluation/multihoprag`](https://github.com/HKUDS/AutoAgent/tree/main/evaluation/multihoprag) 中提供了一个基本使用示例。

### 1. 基本用法

```bash
current_dir=$(dirname "$(readlink -f "$0")")

cd $current_dir
cd ../
export DOCKER_WORKPLACE_NAME=workplace_rag
export EVAL_MODE=True
export DEBUG=True
export BASE_IMAGES=tjbtech1/gaia-bookworm:v2
export COMPLETION_MODEL=claude-3-5-sonnet-20241022

python run_rag.py --model gpt-4o-mini-2024-07-18 --container_name gaia_test
```

### 2. 参数说明

- `--container_name`：Docker 容器名称
- `--model`：使用的语言模型
- `--git_clone`：是否克隆代码
- `--setup_package`：安装的包类型
- `--debug`：是否启用调试模式

## 核心特性

1. **异步处理**：使用 `asyncio` 提高处理效率
2. **容器化部署**：使用 Docker 确保环境一致性
3. **灵活配置**：支持各种模型和参数配置
4. **批处理**：支持批量查询处理
5. **结果追踪**：保存查询和响应用于评估和分析

## 重要注意事项

1. 确保正确配置 Docker 环境
2. 检查模型的访问权限和配置
3. 设置适当的最小对话轮数
4. 保持数据格式一致性
5. 定期备份结果文件
