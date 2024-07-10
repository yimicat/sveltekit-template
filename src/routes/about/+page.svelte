<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About this app" />
</svelte:head>
<div class="text-column text-center">
  <h1>About this app</h1>
  <p class="font-bold">{data.test}</p>
</div>

<style lang="scss">
  p {
    color: var(--color-font-2);
  }
</style>
