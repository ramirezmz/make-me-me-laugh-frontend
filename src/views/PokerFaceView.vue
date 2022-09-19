<template>
  <div class="container">
    <h1>Poker Face</h1>
    <img
      src="https://img.icons8.com/color/96/000000/neutral-emoticon--v1.png"
    />
    <Modal />
  </div>
</template>
<script setup lang="ts">
import Modal from "../components/Modal/Modal.vue";
</script>
<style scoped>
.container {
  background-color: var(--bg-c-poker-face);
  height: 100vh;
}
</style>
