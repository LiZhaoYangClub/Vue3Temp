import { PluginOption } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import { configAutoImportPlugin } from './autoImport'
import { configComponentsPlugin } from './components'
import { configCompressPlugin } from './compress'
import { configImageMinPlugin } from './imageMin'
import { configImagesPlugin } from './images'
import { configSvgPlugin } from './svgIcon'
import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

export const createVitePlugins = (): (PluginOption | PluginOption[])[] => {
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    // 配置自动引入模块
    configAutoImportPlugin(),
    // 配置自动引入组件
    configComponentsPlugin(),
    // 配置文件压缩
    configCompressPlugin(),
    // 配置图片压缩
    configImageMinPlugin(),
    // 配置图片自动引入
    configImagesPlugin(),
    // 配置svg load
    configSvgPlugin(),
    // 配置 mock 数据 [参考](https://github.com/pengzhanbo/vite-plugin-mock-dev-server/blob/HEAD/README.zh-CN.md)
    mockDevServerPlugin({
      prefix: '^/api-dev',
      include: fileURLToPath(
        new URL(
          '../../src/mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
          import.meta.url
        )
      )
    })
  ]
}
