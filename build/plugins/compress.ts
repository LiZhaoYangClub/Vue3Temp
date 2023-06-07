import type { Plugin } from 'vite'
import compressPlugin from 'vite-plugin-compression'

// 文件压缩
export const configCompressPlugin = (): Plugin => {
  return compressPlugin({
    verbose: true, // 是否在控制台中输出压缩结果
    disable: false,
    threshold: 10240, // 如果体积大于阈值，将被压缩，单位为b，体积过小时请不要压缩，以免适得其反
    algorithm: 'gzip', // 压缩算法，可选['gzip'，' brotliccompress '，'deflate '，'deflateRaw']
    ext: '.gz',
    deleteOriginFile: false // 源文件压缩后是否删除(我为了看压缩后的效果，先选择了true)
  })
}
