<template>
  <div class="container">
    <img src="https://img.icons8.com/color/96/000000/smiling.png" />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.container {
  /* background-color: var(--bg-c-happy); */
  background: #ff8008;
  background: -webkit-linear-gradient(to right, #ffc837, #ff8008);
  background: linear-gradient(to right, #ffc837, #ff8008);
  height: 100vh;
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
