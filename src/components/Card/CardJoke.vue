<template>
  <ToastNotificationAccept v-if="isWin" message="You win!" />
  <div class="profile-card">
    <div class="profile-image">
      <img :src="response.feel" />
    </div>
    <div class="profile-info">
      <span>Read, please...</span>
      <h3>Try to make me laugh</h3>
      <p>{{ response.joke.joke || props.joke }}</p>
    </div>
    <button class="btn_joke" @click="handleJoke()">Get joke</button>
  </div>
</template>
<script setup lang="ts">
import api from "../../services/api";
import { ref } from "vue";
import ToastNotificationAccept from "../ToastNotification/ToastNotificationAccept.vue";

const isWin = ref(false);

const response = ref({
  joke: "",
  feel: "https://img.icons8.com/color/96/000000/crying--v1.png",
});
const handleJoke = async () => {
  const data = await api.getJoke();
  if (
    response.value.feel != "https://img.icons8.com/color/96/000000/smiling.png"
  ) {
    response.value = {
      joke: data.data,
      feel: "https://img.icons8.com/color/96/000000/neutral-emoticon--v1.png",
    };
  } else {
    console.log("ok");
    response.value = {
      joke: data.data,
      feel: "https://img.icons8.com/color/96/000000/smiling.png",
    };
    isWin.value = true;
  }
  setTimeout(() => {
    response.value = {
      joke: data.data,
      feel: "https://img.icons8.com/color/96/000000/smiling.png",
    };
    isWin.value = false;
  }, 5000);
};

interface CardProps {
  pic: string;
  name: string;
  joke: string;
}

const props: CardProps = defineProps({
  pic: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  joke: {
    type: String,
    required: true,
  },
});
</script>
<style>
.profile-card {
  width: 100%;
  max-width: 700px;
  min-height: 180px;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.profile-image {
  width: 10%;
  padding-right: 10px;
}

.profile-image img {
  width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px solid #42b883;
  padding: 5px;
}

.profile-info {
  width: 40vw;
  padding-left: 20px;
}

.profile-info span {
  text-transform: uppercase;
  color: #777;
  letter-spacing: 2px;
}

.profile-info h3 {
  margin: 10px 0;
  font-size: 1.5em;
}

.profile-info p {
  line-height: 140%;
  color: #777;
}

.btn_joke {
  appearance: none;
  backface-visibility: hidden;
  background-color: #27ae60;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;
}

.btn_joke:hover {
  background-color: #1e8449;
  opacity: 1;
  transform: translateY(0);
  transition-duration: 0.35s;
}

.btn_joke:active {
  transform: translateY(2px);
  transition-duration: 0.35s;
}

.btn_joke:hover {
  box-shadow: rgba(39, 174, 96, 0.2) 0 6px 12px;
}
</style>
