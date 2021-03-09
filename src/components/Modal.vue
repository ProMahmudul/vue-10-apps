<template>
  <section
    @click="close"
    class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50"
  ></section>

  <div class="a inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function close(_, { emit }) {
      emit("close-login");
    }
    return { close };
  },
};
</script>