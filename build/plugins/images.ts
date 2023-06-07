import type { Plugin } from 'vite'
import { fileURLToPath } from 'url'
import ViteImages from 'vite-plugin-vue-images'

// 图片自动引入
export const configImagesPlugin = (): Plugin => {
  return ViteImages({
    dirs: [fileURLToPath(new URL('../../src/assets/images', import.meta.url))], // 指定图片所在的文件夹
    extensions: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // 有效的图像扩展
    customResolvers: [], // 覆盖名称->图像路径解析的默认行为
    customSearchRegex: '([a-zA-Z0-9]+)' // 重写搜索要替换的变量的Regex。
  })
}
