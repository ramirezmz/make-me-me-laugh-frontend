<template>
  <div class="container_message">
    <p>{{ props.message }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  message: String,
});
</script>
<style scoped>
.container_message {
  background-color: rgb(205, 62, 62);
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
}
</style>
