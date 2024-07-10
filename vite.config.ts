import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [sveltekit(), UnoCSS()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  css: {
    // css 预处理器配置选项
    preprocessorOptions: {
      // sass 预处理器
      scss: {
        javascriptEnabled: true,
        // 将用于声明全局 sass 变量的文件导入到每个 svelte 文件中的 style 样式模块中
        additionalData: `@import "./src/styles/var.scss";`
      }
    }
  }
})
