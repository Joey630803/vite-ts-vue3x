import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import requireTransform from 'vite-plugin-require-transform';
// const path = require('path');

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    requireTransform({
      fileRegex: /.ts$|.vue$/
    }),
  ],
  resolve: {
    alias: {
      '@': '/src/'
    }
  },
  server: {
    port: 9090,

    proxy: {
      '/farm': {
        target: 'http://175.168.1.78:8905',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/farm/, '/farm')
      },
    },
  }
  
})
