<template>
  <RouterLink to="/happy">
    <div class="container">
      <img
        src="https://img.icons8.com/color/96/000000/neutral-emoticon--v1.png"
      />
      <Teleport to="#modal">
        <Transition name="modal">
          <div class="modal__bg" v-if="isModalOpen">
            <div class="modal" ref="modal">
              <ToastNotification
                v-if="messageTilNotHappy"
                message="Wait! Pepito is still not happy..."
              />
              <Card
                v-show="isLoading"
                :pic="data.pic"
                :name="data.name"
                :joke="data.joke"
              />
              <CardSkeleton v-show="!isLoading" />
              <button @click="isModalOpen = false" class="close-btn">x</button>
            </div>
          </div>
        </Transition>
      </Teleport>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import Card from "../components/Card/CardJoke.vue";
import CardSkeleton from "../components/Card/CardSkeleton.vue";
import api from "../services/api";
import ToastNotification from "../components/ToastNotification/ToastNotification.vue";

const isHappy = ref(false);
const messageTilNotHappy = ref(false);
const isLoading = ref(false);
const isModalOpen = ref(true);
const modal = ref(null);
const data = ref({
  pic: "",
  name: "",
  joke: "",
});

onMounted(() => getData());
const getData = async () => {
  setTimeout(async () => {
    isLoading.value = true;
    const result = await api.getJoke();
    data.value = {
      name: "Roberto",
      pic: "https://randomuser.me/api/portraits/men/1.jpg",
      joke: result.data.joke,
    };
  }, 1000);
  isLoading.value = false;
};

onClickOutside(modal, () => {
  if (isHappy.value === false) {
    messageTilNotHappy.value = true;
    setTimeout(() => {
      messageTilNotHappy.value = false;
    }, 2000);
  } else {
    isModalOpen.value = false;
  }
  setTimeout(() => {
    isHappy.value = true;
  }, 7000);
});
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

  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background: #fff;
  max-width: 50vw;
  padding: 2rem;
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
