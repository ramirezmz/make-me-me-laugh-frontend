<template>
  <RouterLink to="/">
    <div class="container">
      <p>Thanks for make to feel better to Pepito</p>
      <img src="https://img.icons8.com/color/96/000000/smiling.png" />
      <span>(Click to redirect home page)</span>
    </div>
  </RouterLink>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.container p {
  color: #fff;
}
</style>
