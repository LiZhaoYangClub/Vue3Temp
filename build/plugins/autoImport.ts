import type { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { fileURLToPath } from 'url'

export const configAutoImportPlugin = (): Plugin => {
  return AutoImport({
    imports: ['vue', 'vue-router'],
    // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    dts: fileURLToPath(new URL('../../src/auto-import.d.ts', import.meta.url)),
    // 解决 eslint 报错
    eslintrc: {
      enabled: true
    }
  })
}
