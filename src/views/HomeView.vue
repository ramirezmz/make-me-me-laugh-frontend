<template>
  <RouterLink to="/sad">
    <div class="container">
      <h1>Welcome to sadic test!</h1>
      <p>
        This face below is Pepito, say Hi! <br />
        He is tired to do the same routine, go to work, go to daily meetings,
        make code review, refact code himself, eat, and more...
      </p>
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
  text-align: center;
}
.container h1 {
  color: var(--color-text);
  font-size: 2.7rem;
}

.container p {
  color: var(--color-text-p);
}
.container span {
  color: var(--color-text-p);
}
</style>
