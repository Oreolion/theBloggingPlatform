<template>
  <section class="section">
    <div class="left__box">
      <h1>WELCOME TO READ ALONG...</h1>
      <p>
        Unleash the Power of Words, Connect with Like-minded Readers and
        Writers...
      </p>
    </div>
    <div class="right__box">
      <div class="signup__form">
        <form action="">
          <div class="navigatepagebtn-box">
            <button>
              <router-link to="/signup">REGISTER</router-link>
            </button>
            <button>
              <router-link to="/login">LOGIN</router-link>
            </button>
          </div>
          <h1 class="form__header">Welcome Back</h1>
          <div class="inner__form">
            <label for="email">
              Email address: <br />
              <input type="email" v-model="v$.email.$model" />
              <small v-if="v$.email.$errors.length > 0 && v$.email.$errors[0]">
                {{ v$.email.$errors[0].$message }}
              </small>
            </label>
            <label for="password">
              Password: <br />
              <input type="password" v-model="v$.password.$model" />
              <small v-if="v$.password.$errors.length">{{
                v$.password.$errors[0].$message
              }}</small>
            </label>

            <div class="btn-box">
              <button type="button" @click="handleLogin">Login account</button>
              <button>Sign in with google</button>
              <button>Sign in with LinkedIn</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const user = reactive({
  email: "",
  password: "",
});

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
};

const v$ = useVuelidate(userRules, user);

const router = useRouter();

const handleLogin = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    console.log(response);
    if (response.user) {
      localStorage.setItem("isLoggedIn", "true");

      router.push("/dashboard");
    }
  } catch (error: any) {
    console.log(error);
    toast.error(error.message);
  }
};
</script>

<style scoped>
.section {
  display: flex;
  padding: 0;
}

.left__box {
  flex: 1 1 40%;
  background: url("../assets/images/windows-YzLMmxDTrvI-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-left: -4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left__box h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  padding-top: 5rem;
}

.left__box p {
  font-size: 2rem;
  margin-left: 3rem;
  font-weight: bold;
  color: #e67e22;
  align-self: flex-start;
}
.right__box {
  flex: 1 1 60%;
  padding: 2rem;
  padding-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
}

.right__box form {
  width: 40rem;
  height: 100vh;
}

.right__box h1 {
  font-size: 2.2rem;
  text-align: center;
}
.right__box .navigatepagebtn-box {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.right__box .navigatepagebtn-box button {
  background-color: #ddd;
  border-bottom: 1rem solid green;
  border-radius: 3px;
  width: 40%;
  height: 3rem;
}
.form__header {
  margin-bottom: 2rem;
}

.inner__form {
  display: flex;
  flex-direction: column;
}

br {
  margin-bottom: 0.5rem;
}

.inner__form label {
  margin-bottom: 1rem;
  margin-right: 2rem;
  font-size: 1.5rem;
}

.inner__form label input {
  height: 4rem;
  width: 100%;
  padding: 0 1rem;
}

small {
  color: red;
}

.btn-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
}

.btn-box button {
  background: #777;
  width: 98%;
}

@media (max-width: 640px) {
  .left__box {
    display: none;
  }
}

@media (max-width: 480px) {
  .right__box {
    display: flex;
   
  }

  .right__box h1 {
  font-size: 2.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .right__box .navigatepagebtn-box {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4rem;
  width: 30rem;
}


  .right__box .navigatepagebtn-box button {
  margin-bottom: 2rem;
  display: flex;
  margin: 0 auto;
  width: 12rem;
  align-items: center;
  justify-content: center;


}

  .btn-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
 margin-left: auto;
 margin-right: auto;
}

.btn-box button {
    width: 100%;
    margin: 0 auto;
}

  .inner__form label input {
    width: 100%;
    margin-right: 3rem;
  }
}

@media (max-width: 320px) {
    .right__box h1 {
  font-size: 1.8rem;
}

.right__box form {
    width: 100%;
}

.right__box .navigatepagebtn-box {
  margin-bottom: 2rem;
  display: flex;
  margin: 0 auto;
  width: 30rem;

}


.inner__form select,
.inner__form label {
  font-size: 1.2rem;
}

.btn-box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
 margin-left: auto;
 margin-right: auto;
}


.right__box .navigatepagebtn-box button {
  width: 35%;
  color: #e67e22;
  font-weight: bold;
  &:hover {
    color: #000;
  }
}

}

</style>
