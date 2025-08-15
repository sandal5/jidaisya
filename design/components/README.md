# 组件清单（属性与变体）

- A/Button: variant{Primary|Secondary|Quiet|Link} · size{L|M|S} · state{default|hover|pressed|disabled|loading} · icon{none|left|right}
- A/Input/Text: size{M|S} · state{default|focus|error|disabled} · withIcon{true|false} · helperText
- A/TextArea · A/Select · A/Checkbox: 统一支持 error/disabled
- A/Badge: kind{period|subject|author-region|news}
- A/Alert: {success|warning|error|info}
- A/LanguageSwitcher: active{zh|ja}
- A/Skeleton: {card-book|card-news|detail}
- M/Card/Book: cover · title · author · summary · tags[] · category · featured{true|false}
- M/Card/News: title · summary · category · publishDate · featured{true|false}
- M/Filter/Pill: selected{true|false} · disabled{true|false} · count(optional)
- M/Breadcrumb: 自动截断与移动端收缩
- M/List/Books · M/List/News: 支持空状态与骨架屏
- O/Header: sticky{true|false} · scrolled{true|false}
- O/Footer: 版权/链接/社交
- O/Pagination: size{compact|default} · showEdges{true|false}
- O/Form/Submit/Scholar: 字段分组，含校验/错误提示
- O/Form/Contact: 轻量联系表单

可访问性：按钮与标签的对比度满足 WCAG AA；焦点环清晰；所有交互可键盘导航。