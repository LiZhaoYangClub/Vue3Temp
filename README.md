# Vue 3 + TypeScript + Vite

## 创建工程

```sh
pnpm create vite@latest projectName --template vue-ts
```

## 配置 `Eslint` `Prettier`

```sh
pnpm  add eslint  prettier -D
```

```sh
pnpx eslint --init
```

```sh
pnpm add eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest -D
```

```sh
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

tips: typescript@4.5.5 最好用此版本的 ts 其他版本有可能会不兼容

## 配置 `TailwindCss` [参考](https://www.tailwindcss.cn/docs/installation)

```sh
pnpm install -D tailwindcss
```

```sh
pnpx tailwindcss init
```

```sh
# postcss
pnpm install -D postcss autoprefixer
```

tips: 添加 `postcss.config.cjs`

## `typescript`

```sh
pnpm add @types/node -D
```

## 优化

### 路由动态引入

路由全部采用动态引入的方式加载，减小首页 chunk 生成时间，打包的 chunk 越大耗时也就越多，从大 chunk 中分离出小 chunk 可以有效减少打包时间，同时提高首页的加载速度。

```ts
{
   path: 'test',
   name: 'Test',
   component: () => import('@/views/test/index.vue')
}
```

## Npm

- 忽略安装包时，执行内部的 `script` `--ignore-scripts`

```bash
pnpm add vite-plugin-imagemin --ignore-scripts -D
```

## 安装 `@element-plus/icons-vue` 图标

```bash
pnpm install @element-plus/icons-vue
```

## 集成 `@vueuse/core`

```bash
pnpm install @vueuse/core
```

## Git 贡献提交规范

- feat 增加新功能
- fix 修复问题/BUG
- style 代码风格相关无影响运行结果的
- perf 优化/性能提升
- refactor 重构
- revert 撤销修改
- test 测试相关
- docs 文档/注释
- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进
- ci 持续集成
- types 类型定义文件更改
- wip 开发中
