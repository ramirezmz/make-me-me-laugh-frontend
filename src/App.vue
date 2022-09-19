<template>
  <header>
    <RouterLink to="/">Inicial | </RouterLink>
    <RouterLink to="/sad">Triste | </RouterLink>
    <RouterLink to="/poker-face">Poker Face | </RouterLink>
    <RouterLink to="/happy">Feliz | </RouterLink>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
