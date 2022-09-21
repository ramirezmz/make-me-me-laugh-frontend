<template>
  <RouterLink to="/poker-face">
    <div class="container">
      <p>
        But I think today is a really bad day for him... he missed meeting time,
        the computer doesn't turn on, and the boss is calling <br />
        I think a <strong>joke</strong> will help him...
      </p>
      <img src="https://img.icons8.com/color/96/000000/crying--v1.png" />
      <span>(Click to tell him a joke)</span>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<style scoped>
.container {
  background-color: var(--bg-c-sad);
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.container span {
  color: rgba(255, 255, 255, 0.727);
}
</style>
