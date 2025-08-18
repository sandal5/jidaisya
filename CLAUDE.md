# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

時代社（Jidaisya）学术出版社网站 - 基于 Astro 的静态双语学术网站，专注于中国近现当代政治思想、法制、经济宪政研究的学术出版社。

## 开发命令

```bash
# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 技术架构

### 核心技术栈
- **框架**: Astro 4.x - 静态网站生成器，零 JavaScript 运行时
- **样式**: Tailwind CSS - 原子化 CSS 框架
- **语言**: TypeScript - 类型安全的 JavaScript
- **包管理**: pnpm 9.0.0
- **部署**: Cloudflare Pages
- **Serverless**: Cloudflare Workers (wrangler.toml 配置)

### 项目结构
```
src/
├── pages/          # 路由页面（中文默认，/ja/ 日文路径）
│   ├── index.astro        # 首页
│   ├── books/             # 书籍
│   ├── news/              # 资讯
│   ├── about.astro        # 关于
│   ├── submit.astro       # 投稿
│   ├── contact.astro      # 联系
│   └── ja/                # 日文版本
│       ├── index.astro    # ホーム
│       ├── books/         # 書籍
│       ├── news/          # ニュース
│       ├── about.astro    # 会社概要
│       ├── submit.astro   # 投稿案内
│       └── contact.astro  # お問い合わせ
├── components/     # Astro 组件
├── layouts/        # 页面布局模板
├── assets/         # 静态资源
│   └── images/
│       ├── books/covers/
│       ├── brand/
│       └── news/
└── styles/        # 全局样式
```

### 多语言架构
- **默认语言**: 中文繁体 (zh-tw)，无 URL 前缀
- **支持语言**: 中文繁体、中文简体 (/zh-cn/)、日文 (/ja/)、英文 (/en/)
- **i18n 配置**: astro.config.mjs 中定义，使用 Astro 内置 i18n 功能
- **路由策略**: 默认语言不使用前缀，其他语言使用语言代码前缀

## 内容管理策略

### 书籍信息格式
每本书籍使用 Markdown 文件管理，包含标准化前置数据（frontmatter）：
- 基本信息：title, author, isbn, publishDate, pages, price
- 分类信息：category (period, subject), series
- 双语内容：title_ja, author_ja, summary_ja, series_ja
- 购买链接：purchaseLinks (Amazon, 京东等)
- 标签系统：tags, tags_ja

### URL 结构与导航
**中文版本导航**：
- `/` - 首页
- `/books` - 书籍
- `/news` - 资讯
- `/about` - 关于我们
- `/submit` - 学者投稿
- `/contact` - 联系我们

**日文版本导航**：
- `/ja` - ホーム
- `/ja/books` - 書籍
- `/ja/news` - ニュース
- `/ja/about` - 会社概要
- `/ja/submit` - 投稿案内
- `/ja/contact` - お問い合わせ

## 开发规范

### 组件开发
- 使用 `.astro` 文件格式
- 组件名称采用 PascalCase
- 布局组件放在 `src/layouts/`
- 通用组件放在 `src/components/`

### 样式规范
- 优先使用 Tailwind CSS 类
- 全局样式定义在 `src/styles/global.css`
- 响应式设计采用移动优先策略
- **品牌色彩**: 主色 `brand-primary` (#184E77)
- **自定义配置**: tailwind.config.mjs 中扩展了颜色和圆角配置

### TypeScript 配置
- 启用严格模式 (`strict: true`)
- 目标 ES2020
- 模块系统 ESNext

## SEO 优化重点

### 技术 SEO
- 静态 HTML 生成，优化页面加载速度
- 结构化数据 (Schema.org)
- 多语言 hreflang 标签
- 响应式图片和 WebP 格式支持

### 内容 SEO
- 为每本书籍创建专门的着陆页面
- 实现主题聚合页面
- 定期发布学术资讯内容

## 重要文档

- `docs/jidaisya_technical_design.md` - 完整技术设计文档
- `docs/academic_publisher_prd.md` - 产品需求文档
- `docs/jidaisya_test_cases.md` - 测试用例文档
- `docs/pic.index.md` - 图像管理规范
- `CHANGELOG.md` - 版本更新记录

## 注意事项

1. **图片资源**: 所有图片资源应放在 `src/assets/images/` 对应目录下
2. **双语内容**: 确保关键内容同时提供中文和日文版本
3. **性能优化**: 使用 Astro 的图片组件实现自动优化
4. **表单处理**: 使用 Cloudflare Workers + Resend 处理表单提交
5. **版本管理**: 更新功能后需更新 CHANGELOG.md，包含时间戳
6. **导航语言**: 页面导航使用对应语言（中文版用中文，日文版用日文），不使用英文