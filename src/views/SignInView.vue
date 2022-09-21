<template>
  <div class="container">
    <div class="container__content">
      <form @submit.prevent="handleSubmit()" class="container__form">
        <h1>Create an Account</h1>
        <div class="container__button__social__media">
          <button class="btn__login">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
            <span>Sign up with Google</span>
          </button>
          <button class="btn__login">
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            />
            <span>Sign up with Facebook</span>
          </button>
        </div>
        <h2>-OR-</h2>
        <input
          class="input__login"
          type="email"
          placeholder="Email Address"
          v-model="email"
        />
        <input
          class="input__login"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <button class="btn__send_form" @click="goToLogin">Register</button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  try {
    const result = await axios.post("http://localhost:3000/sign-in", {
      email: email.value,
      password: password.value,
    });
    console.log(result);
  } catch (e) {
    console.error(e);
  }
};

const goToLogin = () => {
  router.push({ path: "/login" });
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #24c6dc;
  background: -webkit-linear-gradient(to right, #514a9d, #24c6dc);
  background: linear-gradient(to right, #514a9d, #24c6dc);
}

@media (max-width: 375px) {
  .container {
    height: 150vh;
  }
}

.container__content {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.945);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* min phone */
@media (max-width: 375px) {
  .container__content {
    display: flex;
    padding: 0;
  }

  .btn__login span {
    font-size: 0;
  }
  .btn__send_form {
    margin: 0;
    width: 100px;
    height: 30px;
  }
}
.container__content h1 {
  padding: 14px;
}

.container__button__social__media {
  display: flex;
}
.btn__login {
  display: flex;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  border-radius: 8px;
  background-color: #fff;
}
.btn__login img {
  width: 1.8rem;
  padding-right: 5px;
}

.container__form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container__form h2 {
  font-weight: 700;
  color: #1a171799;
}

.input__login {
  width: 375px;
  height: 30px;
  margin-top: 7px;
  border: none;
}

.btn__send_form {
  margin-top: 10px;
  width: 375px;
  height: 30px;
  background-color: #279574;
  color: #fff;
  border-radius: 8px;
}
</style>
