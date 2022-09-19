<template>
  <RouterLink to="/sad">
    <div class="container">
      <h1>Welcome to sadic test!</h1>
      <span
        >This face below is Pepito, today, Pepito needs to help to have a good
        day, perphaps a joke resolve all</span
      >
      <img
        src="https://img.icons8.com/emoji/96/000000/expressionless-face.png"
      />
      <span>(Click to continue)</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped>
.container {
  background: #403b4a;
  background: -webkit-linear-gradient(to right, #e7e9bb, var(--bg-c-neutro));
  background: linear-gradient(to right, #e7e9bb, var(--bg-c-neutro));
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container h1 {
  color: var(--color-text);
  text-decoration: none;
  margin-right: 2rem;
}
</style>
