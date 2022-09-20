<template>
  <div class="profile-card">
    <div class="profile-image">
      <img :src="response.pic || props.pic" />
      <img :src="response.feel" />
    </div>
    <div class="profile-info">
      <span>Written By</span>
      <h3>{{ response.name || props.name }}</h3>
      <p>{{ response.joke.joke || props.joke }}</p>
    </div>
    <button class="btn_joke" @click="handleJoke()">Get joke</button>
  </div>
</template>
<script setup lang="ts">
import api from "../../services/api";
import { ref } from "vue";

const response = ref({
  name: "",
  pic: "",
  joke: "",
  feel: "https://img.icons8.com/color/96/000000/neutral-emoticon--v1.png",
});
const handleJoke = async () => {
  const data = await api.getJoke();
  response.value = {
    name: "Pedrinho",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    joke: data.data,
    feel: "https://img.icons8.com/color/96/000000/smiling.png",
  };
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
  background-color: #42b883;
  border-radius: 8px;
  padding: 5px;
  width: 4.3rem;
  color: #fff;
  cursor: pointer;
}
</style>
