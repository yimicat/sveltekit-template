<script>
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<main class="grid min-h-full place-items-center px-6 py-24 lg:px-8 sm:py-32">
  <div class="text-center">
    <p class="text-3xl text-indigo-600 font-semibold">{$page.status}</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
      {#if $page.status === 404}Page not found{:else}{$page.error}{/if}
    </h1>
    <p class="mt-6 text-base text-gray-600 leading-7">
      {#if $page.status === 404}Sorry, we couldn’t find the page you’re looking for.{:else}{$page.params}{/if}
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a class="text-sm text-gray-900 font-semibold" href="/">
        Go back home<span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</main>
