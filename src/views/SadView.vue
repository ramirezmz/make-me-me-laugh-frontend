<template>
  <RouterLink to="/poker-face">
    <div class="container">
      <h1>Triste</h1>
      <img src="https://img.icons8.com/color/96/000000/crying--v1.png" />
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";

/*
function testTimeOut() {
  console.log("aun nooo");
  setTimeout(() => console.log("funcionando"), 3000);
}
*/
</script>
<style scoped>
.container {
  background-color: var(--bg-c-sad);
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container h1 {
  color: var(--color-text);
  text-decoration: none;
  margin-right: 2rem;
}
</style>
