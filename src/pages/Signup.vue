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
        <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 700 700"
        style="overflow: hidden; display: block"
        width="600"
        height="200"
      >
        <defs>
          <linearGradient
            id="two-7"
            x1="350"
            y1="-350"
            x2="350"
            y2="350"
            spreadMethod="pad"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stop-color="hsl(30, 100%, 50%)"
              stop-opacity="1"
            ></stop>
            <stop
              offset="100%"
              stop-color="hsl(30, 100%, 70%)"
              stop-opacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1">
          <path
            transform="matrix(1 0 0 1 350 350)"
            id="two-23"
            d="M 159.901711 46.951378 C 147.065248 55.807122 132.10133 68.094954 130.003243 83.548011 C 123.43876 131.897448 227.011911 187.486104 189.633141 218.848311 C 150.346139 251.811597 111.50992 137.476569 60.475541 132.422964 C 46.576293 131.046611 31.433599 138.923512 21.366166 148.60495 C -13.983535 182.599307 7.874379 289.796588 -40.776138 283.604262 C -87.129981 277.704262 -23.124918 163.111919 -65.875429 144.247066 C -112.214751 123.79855 -157.260458 258.831319 -195.799604 225.964788 C -233.440378 193.864396 -143.423745 137.113403 -137.023107 88.059403 C -135.04383 72.89037 -134.516318 54.452099 -143.647732 42.178779 C -163.368452 15.672621 -235.580286 33.018016 -234.442848 0 C -233.205487 -35.918649 -139.668004 -3.710863 -132.747955 -38.978317 C -119.088701 -108.591571 -328.97777 -127.108362 -289.522826 -186.065023 C -246.90746 -249.744234 -154.096042 -80.453903 -78.084244 -90.114021 C -66.732842 -91.556638 -56.906981 -102.028065 -51.096508 -111.885745 C -32.414529 -143.580406 -46.37827 -187.891844 -31.876216 -221.703947 C -14.573402 -262.04613 4.580486 -338.935354 47.249803 -328.629603 C 101.059517 -315.633157 55.217583 -215.001819 74.488716 -163.107539 C 80.58034 -146.703709 85.881972 -124.37924 102.115695 -117.847795 C 145.731047 -100.299679 216.235033 -194.795554 239.874782 -154.158162 C 267.159636 -107.254731 109.059611 -88.573256 124.846943 -36.658371 C 142.086997 20.033633 297.179491 -59.155032 300.626956 -0.000001 C 303.475195 48.872913 200.198365 19.151131 159.901711 46.951378 Z "
            fill="url(#two-7)"
            stroke="undefined"
            stroke-width="1"
            stroke-opacity="1"
            fill-opacity="1"
            visibility="visible"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="4"
          ></path>
        </g>
      </svg>
    </div>
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
      localStorage.setItem("firstname", user.firstname);
      localStorage.setItem("lastname", user.lastname);

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
    // const credential = await GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // console.log(user)
  } catch (error) {
    // Handle Errors here.
    console.log(error);
    // const errorCode = error.code;
    // const errorMessage = error.message;
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
    // const credential = await TwitterAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    // const user = result.user;
    // console.log(user)
  } catch (error) {
    console.log(error);
    // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
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
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: -15rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.left__box p {
  font-size: 2.2rem;
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
  font-size: 1.8rem;
  text-align: center;
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
  font-size: 1rem;
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
