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
              >
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
              <button>Sign up with google</button>
              <button>Sign up with LinkedIn</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from "firebase/auth";
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
  padding-top: 20rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
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
  background: #777;
  width: 98%;
}

@media (max-width: 640px) {
  .left__box {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 460px) {
}
</style>
