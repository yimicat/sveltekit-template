<script lang="ts">
  import Header from './Header.svelte'
  import '@unocss/reset/normalize.css'
  import 'virtual:uno.css'
  import '../styles/app.scss'
</script>

<div class="app">
  <Header />

  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    max-width: 64rem;
    padding: 1rem;
    margin: 0 auto;
  }
</style>
