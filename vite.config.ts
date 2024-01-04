import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { format } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/LiteUI.ts'),
  //     name: 'liteui',
  //     fileName: (format)=>`${format}.ts`
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
