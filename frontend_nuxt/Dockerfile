# 阶段 1: 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm install

# 复制代码并打包
COPY . .
RUN npm run build

# 阶段 2: 运行阶段 (仅保留打包产物，大幅缩减镜像体积)
FROM node:18-alpine

WORKDIR /app

# 从 builder 阶段复制 .output (Nuxt 3 的独立运行所需文件)
COPY --from=builder /app/.output ./.output

# 暴露端口
EXPOSE 3000

# 启动 SSR 渲染引擎
CMD ["node", ".output/server/index.mjs"]
