<template>
  <RouterLink to="/sad">
    <div class="container">
      <h1>Nem feliz nem triste</h1>
      <img
        src="https://img.icons8.com/emoji/96/000000/expressionless-face.png"
      />
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped>
.container {
  background-color: var(--bg-c-neutro);
  height: 100vh;
}
</style>
