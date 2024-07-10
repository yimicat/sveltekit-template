<script>
  import welcome from '$lib/images/svelte-welcome.webp'
  import welcome_fallback from '$lib/images/svelte-welcome.png'
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Sveltekit template" />
</svelte:head>

<section>
  <h1>
    <span class="welcome">
      <picture>
        <source srcset={welcome} type="image/webp" />
        <img src={welcome_fallback} alt="Welcome" />
      </picture>
    </span>
  </h1>
  <div text-center color-red class="group/text text-3xl font-bold hover:color-yellow">
    <i class="i-tdesign-calm-1 inline-block group-hover/text:(i-tdesign-cat color-pink)"></i>
    SvelteKit Template
  </div>
</section>

<style lang="scss">
  section {
    display: flex;
    flex: 0.6;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      width: 100%;
    }

    .welcome {
      position: relative;
      display: block;
      width: 100%;
      height: 0;
      padding: 0 0 calc(100% * 495 / 2048);

      img {
        position: absolute;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
