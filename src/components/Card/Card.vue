<template>
  <div class="profile-card">
    <div class="profile-image">
      <img :src="userData.pic" />
    </div>
    <div class="profile-info">
      <span>Written By</span>
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.joke }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import api from "../../services/api";

const getData = async () => {
  const uri = "api?format=json";
  const result = await api.get(uri);
  return result.data.joke;
};

const loadData = async () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      resolve({
        name: "Roberto",
        pic: "https://randomuser.me/api/portraits/men/1.jpg",
        joke: await getData(),
      });
    }, 2000);
  });
};

export default {
  async setup() {
    const userData = ref(await loadData());

    return {
      userData,
    };
  },
};
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
</style>
