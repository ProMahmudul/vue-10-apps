<template>
  <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <Modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label for="name">Name</label>
            <input
              class="w-full p-2 rounded border"
              id="name"
              type="text"
              v-model="state.form.name"
              placeholder="User Name"
            />
          </div>
          <div class="p-2">
            <label for="email">Email</label>
            <input
              class="w-full p-2 rounded border"
              id="email"
              type="email"
              v-model="state.form.email"
              placeholder="User Email"
            />
          </div>
          <div class="p-2">
            <label for="avatar">Avatar</label>
            <input
              class="w-full p-2 rounded border"
              id="avatar"
              type="text"
              v-model="state.form.avatar"
              placeholder="Avatar Url"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-gray-300"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "../Modal";
import axios from "../../plugins/axios";

export default {
  components: { Modal },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit("new-user-added", data);
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { isModalOpen, submit, state };
  },
};
</script>