<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">
      {{ item.title }}
    </router-link>
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">
      Login
    </button>
  </nav>
</template>
<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Dc Heros", to: "/dc-heros" },
        { title: "Calender", to: "/calender" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reuseable-modal" },
        { title: "Chat", to: "/chat" },
        { title: "User Crud", to: "/user-crud" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openLogin(){
      this.$store.commit("setLoginModal", true)
    }
  },
};
</script>