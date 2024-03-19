<template>
  <!-- mobile dashboard navbar -->
  <nav class="dashboard__nav mobile" v-if="toggle">
    <div class="logo link">
      <h3>THE <span>RA</span> BLOG</h3>
      <p>The <span>Read Along</span> Blog</p>
    </div>

    <ul class="dashboard__navlists">
      <h5>Overview</h5>
      <li>
        <router-link class="link" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"
            />
          </svg>
          Feeds
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
            />
          </svg>
          Bookmarks
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/nocontent" class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"
            />
          </svg>
          <p>Team Blog</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"
            />
          </svg>
          <p>Drafts</p>
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/postanalytics">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
            />
          </svg>
          Analytics
        </router-link>
      </li>
      <h5>Trending Tags</h5>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          Programming
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          Data Science
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          Metaphysics
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
          Machine Learning
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
         Politics
        </router-link>
      </li>
     
      <h5>Personal</h5>

      <li>
        <router-link class="link" to="/dashboard/accountprofile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
            />
          </svg>
          Account
        </router-link>
      </li>
      <li>
        <router-link class="link" to="/dashboard/nocontent">
            <svg
            
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
          Notifications
        </router-link>
      </li>
      <li @click="handleLogout">
        <div class="link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
            />
          </svg>
          <p>Logout</p>
        </div>
      </li>
    </ul>
  </nav>
  <main class="innerdashboard__container">
    <!-- header -->
    <header class="header">
      <div class="logo link">
        <h3>THE <span>RA</span> BLOG</h3>
        <p>The <span>Read Along</span> Blog</p>
      </div>
      <nav class="right__nav">
        <div class="nav__icons">
          <div v-if="!toggle" @click="toggleMenu" class="menu-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
          <svg
            class="close-btn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            @click="toggleMenu"
            v-else="toggle"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
          <svg
            class="notification-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
            />
          </svg>
        </div>
      </nav>
      <div class="search-form">
        <label for="search">
          <div class="search">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </div>
        </label>
        <input type="search" placeholder="search and Read Along..." />
      </div>
      <svg
        class="caret"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        @click="toggleDropDown"
      >
        <path
          d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
        />
      </svg>
      <div class="img__box">
        <router-link to="/dashboard/accountprofile">
          <span class="" v-if="!profile.photoURL">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              /></svg
          ></span>

          <img :src="profile.photoURL" alt="photo" class="" v-else />
        </router-link>
      </div>

      <div class="notificationbox" v-if="dropDown">
        <li @click="handleLogout">
          <div class="link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            <p>Logout</p>
          </div>
        </li>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import { auth } from "../utils/firebase";

const router = useRouter();

const isLoading = ref(true);

let profile = reactive({
  photoURL: "",
  displayName: "",
});

const handleLogout = async () => {
  try {
    await signOut(getAuth());
    localStorage.clear();
    router.push("/login");
  } catch (error) {
    console.log(error);
  }
};

let toggle = ref<boolean>(false);
let dropDown = ref<boolean>(false);

function toggleMenu() {
  return (toggle.value = !toggle.value);
}
function toggleDropDown() {
  return (dropDown.value = !dropDown.value);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoading.value = false;
    profile.photoURL = user.photoURL ?? "";
    profile.displayName = user.displayName ?? "";
  }
});
</script>

<style scoped>
.logo {
  color: #e67e22;
  font-size: 2rem;
  margin-right: auto;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
  font-size: 1.8rem;
  text-align: center;
}

h3 span {
  color: green;
  background-color: #e67e22;
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
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 25rem;
  height: 100vh;
  background: rgba(0, 0, 05, 0.8);
  color: #ccc;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
}

.logo {
  margin: 2rem 0 -2rem;
  color: #e67e22;
}

.logo p {
  font-size: 1rem;
}

.mobile {
  display: none;
}

.dashboard__navlists .link {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  color: #ddd;
  font-weight: bold;
  &:hover {
    letter-spacing: 2px;
  }
}

.dashboard__navlists .link svg {
  background-color: #fff;
  color: red;
  height: 2.3rem;
  border-radius: 50%;
  padding: 0.2rem;
  width: 2.3rem;
}

.dashboard__navlists li:last-child {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 3px solid #e67e22;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(295, 295, 295, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 7%;
  height: 9rem;
}

.innerdashboard__container .header .logo {
  display: none;
}

.innerdashboard__container .header p {
  min-width: 2rem;
}

.right__nav {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.notificationbox {
  height: 6rem;
  width: 22rem;
  position: absolute;
  color: #fff;
  top: 10rem;
  right: 7%;
  background: rgba(0, 0, 015, 0.5);
  z-index: 111;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  list-style: none;
}

.notificationbox svg {
  display: flex;
}

.notificationbox .link {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.notificationbox p {
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: red;
  }
}

.navigationlist {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  top: 11%;
  right: 5%;
  background: rgba(0, 0, 015, 0.5);
  text-align: center;
  padding-top: 1rem;
  z-index: 1111;
}

.navigationlist li .link {
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #fff;
  font-weight: bold;
}

.header .nav__icons {
  display: flex;
  gap: 3rem;
  position: absolute;
  top: 40%;
  right: 20%;
  z-index: 111;
  color: #fff;
  cursor: pointer;
  gap: 1rem;
}

.nav__icons .notification-icon {
  display: flex;
  height: 3rem;
  width: 3rem;
}
.icons .menu-icon,
.icons .close-icon {
  display: none;
}

.mobile-header {
  display: none;
}

.nav__icons .menu-bar svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
}

.caret {
  display: inline-block;
  cursor: pointer;
}

svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
  fill: #e67e22;
}

.search-form {
  position: absolute;
  width: 46rem;
  top: 25%;
  right: 30%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #eee;
  padding: 0.6rem;
  border-radius: 0.6rem;
  height: 5rem;
}

.search {
  height: 4.5rem;
  padding: 1rem;
  width: 4.5rem;
  text-align: center;
  color: var(--black);
  background-color: #eee;
  border-radius: 50%;
  margin-left: 0.7rem;
  font-size: 1.7rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 05, 0.3);
  }
}

.search-form .search svg {
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #e67e22;
}

.search-form input {
  height: 4rem;
  width: 80%;
  padding: 1rem;
}

.header .img__box {
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  background-color: #000;
  top: 15%;
  right: 10%;
  position: absolute;
}

.img__box span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header .img__box svg {
  display: block;
}

.header .img__box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 111;
}

@media (max-width: 767px) {
  .header {
    padding: 1.2rem 5%;
  }
  .logo {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #e67e22;
    /* margin-left: -2rem; */
  }

  .logo h3 {
    white-space: nowrap;
  }

  .logo p {
    white-space: nowrap;
  }

  .innerdashboard__container .header .logo {
    margin-bottom: 1rem;
    color: #e67e22;
    max-width: 18rem;
    font-weight: bold;
    display: block;
  }

  .innerdashboard__container .header h3 {
    line-height: 1;
    letter-spacing: 0.2;
    font-size: 2rem;
  }

  .innerdashboard__container .header .logo p {
    font-size: 1.1rem;
    letter-spacing: 1px;
    padding-left: 4px;
  }

  .nav__icons .menu-bar svg {
    display: flex;
  }

  .mobile {
    display: flex;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }

  svg {
    display: flex;
  }

  .search-form {
    width: 30rem;
    margin-right: 4rem;
  }

  .header .img__box {
    height: 5rem;
    width: 5rem;
    top: 22%;
    right: 10%;
    position: absolute;
  }

  .post {
    width: 40rem;
    padding-left: 20rem;
  }
}

@media (max-width: 480px) {
  .logo h3 {
    font-size: 1.7rem;
  }

  .logo p {
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0;
  }

  .logo p span {
    padding: 0.2rem;
    font-size: 0.9rem;
  }

  .header {
    padding: 1.2rem 2%;
  }

  .header .nav__icons {
    display: flex;
    gap: 3rem;
    position: absolute;
    top: 40%;
    right: 23%;
  }
  .dashboard__nav {
    width: 17rem;
  }

  .search-form {
    display: none;
  }

  .caret {
    margin-left: 1rem;
  }

  .header .nav__icons {
    right: 27%;
    gap: 1rem;
  }
}

@media (max-width: 320px) {
  .logo {
    margin-left: 0rem;
    margin-top: 3rem;
  }

  .dashboard__navlists h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .dashboard__nav {
    padding: 0rem 1rem;
  }

  .dashboard__navlists .link {
    gap: 1rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }

  .header .nav__icons {
    gap: 0.5rem;
    top: 40%;
    right: 27%;
  }
}
</style>
