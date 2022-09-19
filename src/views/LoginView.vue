<template>
  <div class="container">
    <img src="@/assets/space-bg-2.jpg" alt="space" class="img__background" />
    <Form />
  </div>
</template>
<script lang="ts" setup>
import Form from "@/components/LoginForm/Form.vue";
</script>
<style scoped>
img {
  width: 60vw;
  height: 100vh;
  position: relative;
}

@media (max-width: 1056px) {
  img {
    width: 0vw;
    height: 0vh;
  }
}
</style>
