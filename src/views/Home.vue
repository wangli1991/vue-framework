<!--
 * @Author: WangLi
 * @Date: 2021-12-27 15:42:41
 * @LastEditors: WangLi
 * @LastEditTime: 2021-12-27 15:48:21
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
