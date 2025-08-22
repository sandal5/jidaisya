# Cloudflare Pages 部署指南

## 控制台配置

### 基本设置
- **Framework preset**: Astro
- **Build command**: `npm run build`  
- **Build output directory**: `dist`
- **Root directory**: `/`

### 环境变量
- `NODE_VERSION`: `18`
- `NPM_VERSION`: `latest`

### 如果使用pnpm (可选)
- **Build command**: `pnpm run build`
- 环境变量添加: `PNPM_VERSION`: `9.0.0`

## 故障排除

### 如果仍然404
1. 检查构建日志中是否有 `dist/index.html` 生成
2. 确认构建没有错误
3. 尝试删除项目重新创建
4. 考虑使用GitHub Actions自动化部署

### 测试本地构建
```bash
pnpm run build
cd dist
python -m http.server 8000  # 或使用其他静态服务器
```

## 部署验证
- 根路径: https://jidaisha.com/
- 中文: https://jidaisha.com/zh-cn/
- 日文: https://jidaisha.com/ja/
- 英文: https://jidaisha.com/en/