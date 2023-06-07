import type { Plugin } from 'vite'
import { fileURLToPath } from 'url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// svg处理
export const configSvgPlugin = (): Plugin => {
  return createSvgIconsPlugin({
    // 需要自行下载存放在public文件夹下
    iconDirs: [
      fileURLToPath(new URL('../../src/assets/icons', import.meta.url))
    ],
    // svgo配置
    svgoOptions: true,
    // 默认所有svg都可用
    symbolId: 'icon-[dir]-[name]'
  })
}
