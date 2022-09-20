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
  background: #ff512f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f09819,
    #ff512f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f09819,
    #ff512f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

@media (max-width: 375px) {
  .container {
    height: 150vh;
  }
}
</style>
