/**
 * unocss config
 * @author Yimi by yimicat.com
 * @see https://unocss.dev/
 */
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    //支持 class: directive.
    //@see https://unocss.dev/extractors/svelte
    extractorSvelte()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  presets: [
    presetUno(),

    //支持属性写法
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/'
    }),
    presetTypography(),

    //@see https://unocss.net/presets/web-fonts
    presetWebFonts({
      provider: 'google', // 默认提供者
      fonts: {
        // 这些将扩展默认主题
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // 自定义的
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true
          },
          {
            name: 'sans-serif',
            provider: 'none'
          }
        ]
      }
    })
  ]
})
