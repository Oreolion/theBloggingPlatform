<template>
  <section class="section">
    <div class="left__box">
      <h1>
        WELCOME TO <br /> READ 
        <span>ALONG...</span>
      </h1>
      <p>
        Unleash the Power of Words, Connect with Like-minded Readers and
        Writers...
      </p>
      <div class="imgbox">
        <img
          src="../assets/images/3d-hygge-isometric-view-of-young-woman-working-in-vr-headset.png"
          alt=""
        />
      </div>
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
              <router-link to="/signup">REGISTER</router-link>
            </button>
            <button>
              <router-link to="/login">LOGIN</router-link>
            </button>
          </div>
          <h1 class="form__header">Welcome Back</h1>
          <div class="inner__form">
            <label for="email">
              Email:<br />
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
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 48 48"
                  enable-background="new 0 0 48 48"
                  font-size="20px"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
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
    // const credential = await GoogleAuthProvider.credentialFromResult(result);
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
    // const credential = GoogleAuthProvider.credentialFromError(error);
  }
};
</script>

<style scoped>
.section {
  display: flex;
  padding: 6rem 7%;
  background: #000;
}

.left__box {
  flex: 1 1 50%;
  background: #000;
  margin-top: -1rem;
  padding: 3rem;
  border-right: 10px solid #e67e22;
  box-shadow: 4px 8px 16px rgb(215, 215, 215, 0.6);
  border-radius: 3rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.left__box h1 {
  font-size: 4.5rem;
  margin-bottom: 1rem;
  margin-top: -5rem;
  color: #ccc;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.left__box p {
  font-size: 3rem;
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
  flex: 1 1 50%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 3px;
  width: 40%;
  height: 3rem;
  &:hover {
    box-shadow: 4px 8px 16px rgba(225, 225, 225, 0.4);
  }
}

.right__box .navigatepagebtn-box button:last-child {
  border-bottom: 0.5rem solid green;
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
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  border: 3px solid #fff;
  &:hover {
    color: #fff;
    background: rgba(005, 005, 005, 0.2);
  }
}

.btn-box button svg {
  height: 3rem;
  width: 3rem;
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
