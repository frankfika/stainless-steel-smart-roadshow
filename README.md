<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 不锈钢智能路演系统

## 在线访问

- **国内访问**: https://roadshow.secondplanet.cc
- **海外访问**: https://stainless-steel-smart-roadshow.pages.dev

## 本地运行

**Prerequisites:** Node.js

1. 安装依赖：`npm install`
2. 运行开发服务器：`npm run dev`
3. 构建生产版本：`npm run build`

## 部署

### Cloudflare Pages（当前主要部署）

通过 GitHub 自动部署，推送到 `main` 分支即可。

### EdgeOne Pages（国内加速）

```bash
# 1. 安装 EdgeOne CLI（首次）
npm install -g edgeone

# 2. 登录腾讯云（首次，选择 China）
edgeone login

# 3. 构建 + 部署
npm run build && edgeone pages deploy ./dist -n stainless-steel-roadshow
```

> **注意**: EdgeOne 默认域名 `.edgeone.cool` 需要带 token 才能访问（3小时有效），绑定自定义域名后才能公开访问。
