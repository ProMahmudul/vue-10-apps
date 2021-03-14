<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <table>
          <thead>
            <tr>
              <th class="border px-4 py-2">ID</th>
              <th class="border px-4 py-2">Avatar</th>
              <th class="border px-4 py-2">First Name</th>
              <th class="border px-4 py-2">Last Name</th>
              <th class="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="mt-2 px-3 py-2 border rounded"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="mt-2 px-3 py-2 border rounded"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="state.users.page === state.users.total_pages ? 'bg-gray-100' : 'hover:shadow'"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "@vue/runtime-core";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      state.users = data;
    }

    async function prev() {
      const { data } = await axios.get("https://reqres.in/api/users?page=1");
      state.users = data;
    }
    return { state, next, prev };
  },
};
</script>
