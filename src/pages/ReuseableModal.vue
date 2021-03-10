<template>
  <section class="flex w-full flex-wrap">
    <div class="m-auto">
      <h1 class="text-2xl my-5 w-full">Re-Useable Modal</h1>
      <modal v-if="isModalOneOpen" @close="isModalOneOpen = false">
        <template #title> Modal One </template>
        <template #body>
          <p>This is the body slot paragraph</p>
          <section>Section</section>
        </template>
      </modal>
      <button class="border rounded px-2 mx-4 bg-red-500 text-white" @click="isModalOneOpen = true">Modal One</button>

      <modal v-if="isModalTwoOpen" @close="isModalTwoOpen = false">
        <template #title> Modal Two </template>
        <template #body>
          <p>This is the body slot paragraph</p>
          <section>Section</section>
        </template>
      </modal>
      <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModalTwoOpen = true">Modal Two</button>
    </div>
  </section>
</template>

<script>
import modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { modal },
  setup() {
    const isModalOneOpen = ref(false);
    const isModalTwoOpen = ref(false);
    return { isModalOneOpen, isModalTwoOpen };
  },
};
</script>