<template>
  <div class="m-auto">
    <h1 class="text-center my-5 font-bold">Welcome to Vue3 App</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
    };
  },
};
</script>
