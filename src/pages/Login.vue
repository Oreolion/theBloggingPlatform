<template>
  <section class="section">
    <div class="left__box">
      <h1>WELCOME TO READ <span>ALONG...</span></h1>
      <p>
        Unleash the Power of Words, Connect with Like-minded Readers and
        Writers...
      </p>
    </div>
    <div class="right__box">
      <div class="logo link">
        <router-link to="/" style="color: inherit">
          <h3>THE <span>RA</span> BLOG</h3>
          <p>The <span>Read Along</span> Blog</p>
        </router-link>
      </div>
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
              <button @click="handleSignupWithGoogle">
                Sign in with google
              </button>
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
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
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

const provider = new GoogleAuthProvider();

const handleSignupWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // console.log(user)
  } catch (error) {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
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
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: -15rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.left__box p {
  font-size: 2.4rem;
  font-weight: bold;
  margin-left: 2rem;
  color: #e67e22;
  align-self: flex-start;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.left__box h1 span {
  color: #e67e22;
  font-weight: bold;
}
.right__box {
  flex: 1 1 60%;
  padding: 2rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
}

.logo {
  color: #e67e22;
  font-size: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  cursor: pointer;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}

h3 span {
  color: #ccc;
  background-color: green;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
}

.logo p {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  padding-left: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.logo p span {
  background: rgba(355, 355, 355, 0.3);
  font-weight: bold;
  border-radius: 0.4rem;
  padding: 0.2rem;
  font-size: 1.3rem;
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
  border-bottom: 0.5rem solid #e67e22;
  color: #fff;
  border-radius: 3px;
  width: 40%;
  height: 3rem;
}

.navigatepagebtn-box button > * {
  color: #e67e22;
  font-weight: bold;
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
  background: rgba(355, 355, 355, 0.2);
  width: 98%;
  border: 3px solid #fff;
  &:hover {
    color: #fff;
    background: rgba(005, 005, 005, 0.2);
  }
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
