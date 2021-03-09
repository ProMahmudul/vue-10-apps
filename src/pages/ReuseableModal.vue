<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5 w-full">Re-Useable Modal</h1>
      <modal />
    </div>
  </section>
</template>

<script>
import modal from "../components/Modal";
export default {
  components: { modal },
};
</script>