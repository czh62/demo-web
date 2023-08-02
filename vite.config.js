import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import useSvgIconsPlugin from './plugins/use-svg-icon'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    useSvgIconsPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 开发环境代理配置，请更换target为后端服务器地址
  server: {
    host: true,
    proxy: {
      // https://cn.vitejs.dev/config/#server-proxy
      '/dev-api': {
        target: 'http://172.24.1.61:7101',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/dev-api/, '')
      }
    }
  },
  build: {
    // 当生产环境浏览器版本较低时，请改为es2015
    target: 'modules'
  }
})
