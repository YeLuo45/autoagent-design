---
title: 安装指南
slug: /get-started-installation
---

# 安装指南

## 前置要求

- **Git**
- **Python** 3.10 或更高版本
- **Docker** (用于容器化智能体交互环境)

## 安装步骤

### 1. 克隆代码仓库

```bash
git clone https://github.com/HKUDS/AutoAgent.git
cd AutoAgent
```

### 2. 安装 AutoAgent

使用 pip 安装 AutoAgent：

```bash
pip install -e .
```

### 3. 配置 API 密钥

创建一个环境变量文件（参考 `.env.template`），设置您要使用的 LLM 的 API 密钥。

```bash
# 必需的 GitHub Token
GITHUB_AI_TOKEN=

# 可选的 API 密钥（按需配置）
OPENAI_API_KEY=
DEEPSEEK_API_KEY=
ANTHROPIC_API_KEY=
GEMINI_API_KEY=
HUGGINGFACE_API_KEY=
GROQ_API_KEY=
XAI_API_KEY=
```

### 4. Docker 配置

AutoAgent 使用 Docker 来容器化智能体交互环境。请先安装 [Docker](https://www.docker.com/)。

::: tip 提示
您无需手动拉取预构建镜像，AutoAgent 会根据您的机器架构自动拉取相应的镜像。
:::

## 验证安装

安装完成后，您可以运行以下命令验证安装：

```bash
autoagent --version
```

## 常见问题

### Docker 权限问题

如果您在 Linux 上遇到 Docker 权限问题，请确保当前用户属于 docker 组：

```bash
sudo usermod -aG docker $USER
```

### Python 版本问题

确保您使用的是 Python 3.10 或更高版本：

```bash
python --version
```

## 下一步

安装完成后，请参考 [快速入门](/get-started-quickstart) 了解如何开始使用 AutoAgent。
