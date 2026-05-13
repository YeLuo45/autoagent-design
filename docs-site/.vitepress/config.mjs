import { defineConfig } from "vitepress";

export default defineConfig({
  title: "AutoAgent Design",
  description: "AutoAgent: Fully-Automated & Zero-Code LLM Agent Framework Design Documentation",
  lang: "zh-CN",
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/get-started" },
      { text: "用户指南", link: "/user-guide" },
      { text: "开发指南", link: "/dev-guide" },
      { text: "入门项目", link: "/starter-projects" },
    ],
    sidebar: [
      {
        text: "📖 文档",
        items: [
          { text: "首页", link: "/" },
        ],
      },
      {
        text: "🚀 快速开始",
        items: [
          { text: "欢迎使用 AutoAgent", link: "/get-started" },
          { text: "安装指南", link: "/get-started-installation" },
          { text: "快速入门", link: "/get-started-quickstart" },
        ],
      },
      {
        text: "👤 用户指南",
        items: [
          { text: "日常任务", link: "/user-guide-daily-tasks" },
          { text: "创建 Agent", link: "/user-guide-create-agent" },
        ],
      },
      {
        text: "🛠️ 开发指南",
        items: [
          { text: "构建项目", link: "/dev-guide-build-your-project" },
          { text: "创建 Agent", link: "/dev-guide-create-agent" },
          { text: "创建工具", link: "/dev-guide-create-tools" },
          { text: "编辑记忆", link: "/dev-guide-edit-mem" },
        ],
      },
      {
        text: "📚 入门项目",
        items: [
          { text: "Agentic RAG", link: "/starter-projects-agentic-rag" },
          { text: "Auto Deep Research", link: "/starter-projects-auto-deep-research" },
          { text: "自然语言转 Agent", link: "/starter-projects-nl-to-agent" },
        ],
      },
      {
        text: "🐍 Python API",
        items: [
          { text: "Python API", link: "/python" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/HKUDS/AutoAgent" },
    ],
    footer: {
      message: "基于 AutoAgent 开源项目构建",
      copyright: "Copyright © 2025 AutoAgent Contributors",
    },
  },
});
