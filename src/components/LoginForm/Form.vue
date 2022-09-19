<template>
  <div class="container">
    <div class="container__content">
      <h1>Create Account</h1>
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
      <div class="container__form">
        <h2>-OR-</h2>
        <input class="input__login" type="email" placeholder="Email Address" />
        <input class="input__login" type="password" placeholder="Password" />
        <button class="btn__send_form">Enter</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 110vh;
  height: 100vh;
  border-radius: 20px 0px 0px 20px;
}

@media (max-width: 1056px) {
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    top: 0px;
    left: 0px;
  }
}

.container__content {
  padding: 8rem;
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
