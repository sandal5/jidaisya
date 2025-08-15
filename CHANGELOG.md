## Alpha-0.7 — 2025-08-15 16:04
- 统一：按照英文版本的样式更新了所有语言的books页面，包含完整的书籍介绍、分类浏览和图片展示
- 同步：按照繁体中文首页的布局同步了所有语言的首页，添加了"精选书籍"展示区域
- 优化：语言切换按钮改为2个字符显示（繁體/简体/日本/英文），统一按钮大小，提升移动端兼容性
- 移除：去除特色内容区域的emoji图标，采用纯文字设计
- 视觉：统一了所有语言版本的页面结构和视觉风格

## Alpha-0.6 — 2025-08-15 15:39
- 修复：默认繁体中文页面导航路径问题（所有根目录页面已更新为繁体中文）
- 新增：首页精选书籍展示区域（包含3本书籍图片）
- 更新：logo 尺寸增加一倍（h-16）
- 移除：联系我们栏目及页面
- 移除：特色内容区域的图标，改为纯文字展示
- 优化：页面布局和视觉设计

## Alpha-0.5 — 2025-08-15 15:24
- 新增：繁体中文版本支持（设为默认语言）
- 新增：网站 logo 显示在导航栏
- 更新：语言切换改为四个按钮（繁体/简体/日文/英文）
- 更新：URL 结构（繁体中文默认无前缀，简体中文 /zh-cn）
- 优化：当前语言按钮高亮显示

## Alpha-0.4 — 2025-08-15 15:04
- 新增：英语版本支持 (/en 路径)
- 新增：三语言切换功能（中文/日文/英语）
- 更新：Header 组件支持多语言导航
- 更新：关于我们页面添加完整公司信息（中/日/英）
- 更新：首页添加发刊词/発刊の言葉/Purpose of Publishing
- 更新：投稿页面改为邮件联系方式
- 优化：页面布局采用卡片式设计，提升视觉效果

## Alpha-0.3 — 2025-08-15 14:08
- 新增：图片目录与占位资源（src/assets/images/books/covers/*.jpg、brand/*.svg|.png、news/2024/*.jpg）
- 依据：docs/pic.index.md 图像与首页内容管理规范

## Alpha-0.2 — 2025-08-15 13:46
- 新增：Astro 项目骨架（i18n 双语路由、基础布局、Tailwind 集成）
- 新增：`src/pages`（首页/书籍/资讯/关于/投稿/联系 的 zh/ja 基本页面）
- 新增：`src/layouts/BaseLayout.astro`、`src/components/Header.astro`、`src/components/Footer.astro`
- 说明：跳过 Figma，直接本地构建可运行的 MVP 骨架

## Alpha-0.1 — 2025-08-15 13:35
- 新增：`design/figma_tokens/tokens.json`（Figma Tokens）
- 新增：`design/components/README.md`、`design/templates/README.md`、`design/pages/sitemap.md`、`design/wireframes/frames.md`
- 新增：`assets/logo-placeholder.svg`
- 说明：用于在 Figma 中快速落稿的设计令牌与线框/模板/组件规范