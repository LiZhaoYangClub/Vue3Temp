import type { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath } from 'url'

export const configComponentsPlugin = (): Plugin => {
  return Components({
    // 指定组件位置，默认是src/components
    dirs: [fileURLToPath(new URL('../../src/components', import.meta.url))],
    // ui库解析器，也可以自定义
    resolvers: [
      ElementPlusResolver({
        importStyle: 'sass'
      })
    ],
    extensions: ['vue'],
    // 配置文件生成位置
    dts: 'src/components.d.ts'
  })
}
