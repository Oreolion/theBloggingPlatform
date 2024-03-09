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
              <router-link to="/signup" class="nbtn">REGISTER</router-link>
            </button>
            <button>
              <router-link to="/login">LOGIN</router-link>
            </button>
          </div>
          <h1 class="form__header">Register as a Writer/Reader</h1>
          <div class="inner__form">
            <div class="name">
              <label for="firstname">
                First name: <br />
                <input v-model="user.firstname" type="text" />
              </label>
              <label for="lastname">
                Last name: <br />
                <input v-model="user.lastname" type="text" />
              </label>
            </div>
            <label for="select">
              You are joining as <br />
              <select v-model="user.typeOfUser" name="select-user" id="">
                <option>Writer</option>
                <option>Reader</option>
              </select>
            </label>

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
            <label for="password">
              Password: <br />
              <input type="password" v-model="v$.confirmPassword.$model" />
              <small v-if="v$.confirmPassword.$errors.length">{{
                v$.confirmPassword.$errors[0].$message
              }}</small>
            </label>

            <div class="btn-box">
              <button @click="handleSignUp">Create account</button>
              <button @click="handleSignupWithGoogle">
                Sign up with
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  />
                </svg>
              </button>
              <button @click="handleSignupWithX">
                Sign up with
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase.ts";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/pinia";

const userRules = {
  email: { required, email },
  password: { required, minLength: minLength(8) },
  confirmPassword: {
    required,
    minLength: minLength(8),
    sameAs: sameAs(computed(() => user.password)),
  },
};

const router = useRouter();

const user = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  firstname: "",
  lastname: "",
  typeOfUser: "",
});

const v$ = useVuelidate(userRules, user);

// const password = ref("");

const handleSignUp = async () => {
  const isValid = await v$.value.$validate();
  if (!isValid) return;
  try {
    const response = await createUserWithEmailAndPassword(
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

const handleSignupWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
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

const handleSignupWithX = async () => {
  const provider = new TwitterAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = await TwitterAuthProvider.credentialFromResult(result);
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
    // const credential = TwitterAuthProvider.credentialFromError(error);
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
  font-size: 2.5rem;
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
  background-color: #e67e22;
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
  color: #e67e22;
}

.navigatepagebtn-box button > * {
  color: #e67e22;
  font-weight: bold;
}

.right__box .navigatepagebtn-box button,
.nbtn {
  background-color: #ddd;
  border-bottom: 0.5rem solid #e67e22;
  border-radius: 3px;
  width: 40%;
  font-weight: bold;
  height: 3rem;
}
.form__header {
  margin-bottom: 2rem;
}

.inner__form {
  display: flex;
  flex-direction: column;
}
.inner__form .name {
  margin-bottom: 1rem;
  display: flex;
}

br {
  margin-bottom: 0.5rem;
}

.inner__form .name input {
  padding: 0 1rem;
  width: 100%;
}
.inner__form select,
.inner__form label {
  margin-bottom: 1rem;
  margin-right: 2rem;
  font-size: 1.5rem;
}

.inner__form select {
  margin-bottom: 1rem;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
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
  margin-top: 1rem;
}

.btn-box button {
  background: rgba(355, 355, 355, 0.2);
  width: 98%;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &:hover {
    color: #fff;
    background: rgba(005, 005, 005, 0.2);
  }
}

.btn-box button svg {
  height: 3rem;
  width: 3rem;
  fill: #e67e22;
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

  .inner__form label input {
    width: 100%;
    margin-right: 3rem;
  }
}

@media (max-width: 320px) {
  .right__box h1 {
    font-size: 1.8rem;
  }

  .inner__form select,
  .inner__form label {
    font-size: 1.2rem;
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
