<template>
  <div class="container__content">
    <ToastNotification
      v-if="isInvalid"
      message="The email or password you’ve entered is incorrect."
    />
    <ToastNotificationAccept v-if="validAccess" message="Welcome again!" />
    <form @submit.prevent="handleSubmit()" class="container__form">
      <h1>Login</h1>
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
      <button class="btn__send_form">Enter</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ToastNotification from "../ToastNotification/ToastNotification.vue";
import ToastNotificationAccept from "../ToastNotification/ToastNotificationAccept.vue";

const router = useRouter();

const email = ref("");
const password = ref("");
const isInvalid = ref(false);
const validAccess = ref(false);

const handleSubmit = async () => {
  if (email.value === "test@test.com" && password.value === "123456789") {
    try {
      const result = await axios.post("http://localhost:3000/login", {
        email: email.value,
        password: password.value,
      });
      validAccess.value = true;
      setTimeout(() => {
        goHome();
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  } else {
    isInvalid.value = true;
  }
  setTimeout(() => {
    isInvalid.value = false;
  }, 3000);
};

const goHome = () => {
  router.push({ path: "/" });
};
</script>
<style scoped>
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
