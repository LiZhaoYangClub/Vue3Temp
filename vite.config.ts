import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import type { UserConfig, ConfigEnv } from 'vite'
import { wrapperEnv } from './build/getEnv'
import { createVitePlugins } from './build/plugins'
import { createProxy } from './build/proxy'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  return {
    root: mode === 'development' ? process.cwd() : './',
    base: './',
    // 配置别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    plugins: createVitePlugins(),
    server: {
      port: 3000,
      open: false,
      cors: true,
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
    build: {
      minify: 'terser',
      // 对依赖单独打包
      rollupOptions: {
        output: {
          // 对静态资源进行单独打包
          assetFileNames: 'static/[ext]/[name].[hash].[ext]',
          // 对项目依赖进行单独打包
          manualChunks: id => {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        }
      },
      // 清除console与debugger 需要安装 terser
      terserOptions: {
        compress: {
          drop_console: mode === 'production',
          drop_debugger: mode === 'production'
        }
      }
    }
  }
})
