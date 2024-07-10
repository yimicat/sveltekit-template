import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // @see https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: vitePreprocess(),
  kit: {
    // @see 适配器 https://kit.svelte.dev/docs/adapters
    adapter: adapter()
  }
}

export default config
