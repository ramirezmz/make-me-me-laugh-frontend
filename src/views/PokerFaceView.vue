<template>
  <div class="container">
    <h1>Poker Face</h1>
    <button @click="isModalOpen = true">Open Modal</button>
    <img
      src="https://img.icons8.com/color/96/000000/neutral-emoticon--v1.png"
    />
    <Teleport to="#modal">
      <Transition name="modal">
        <div class="modal__bg" v-if="isModalOpen">
          <div class="modal" ref="modal">
            Click outside this modal to close it
            <button @click="isModalOpen = false" class="close-btn">x</button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const isModalOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => (isModalOpen.value = false));
</script>
<style scoped>
.container {
  background-color: var(--bg-c-poker-face);
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

.modal__bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background: #fff;
  padding: 50px 100px;
  border-radius: 5px;
  box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
}

.modal .close-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
