<template>
  <div class="container">
    <LoginForm />
  </div>
</template>
<script setup lang="ts">
import LoginForm from "../components/LoginForm/LoginForm.vue";
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ff512f;
  background: -webkit-linear-gradient(to right, #f09819, #ff512f);
  background: linear-gradient(to right, #f09819, #ff512f);
}

@media (max-width: 375px) {
  .container {
    height: 150vh;
  }
}
</style>
