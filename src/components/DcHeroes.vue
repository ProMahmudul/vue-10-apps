<template>
  <div class="m-auto">
    <h1 class="text-3xl text-center mb-4">Dc Heroes {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeros"
        :key="hero.name"
      >
        <div>{{ hero.name }}</div>
        <button @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-10" @submit.prevent="addHero">
      <input
        class="border rounded"
        type="text"
        v-model="newHero"
        placeholder="Type Hero Name here"
      />
      <button
        class="border rounded text-white p-1 bg-gradient-to-r from-red-700 to-pink-500"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    herosCount() {
      return this.dcHeros.length;
    },
  },

  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
    },
  },

  data() {
    return {
      newHero: "Aquaman",
      dcHeros: [
        { name: "SuperGirl" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "Superman" },
        { name: "Arrow" },
      ],
    };
  },
};
</script>