<template>
  <AppHeader />
  <div class="w-full flex">
    <!-- <DcHeroes /> -->
    <Calender />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
// import DcHeroes from "./components/DcHeroes";
import Calender from "./components/Calender";

export default {
  components: { AppHeader, Calender },
};
</script>