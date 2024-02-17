<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <div class="settings__section">
    <div class="left__section">
      <h2>PROFILE UPDATE</h2>
      <div class="inner__box" v-if="!isLoading">
        <div class="usericon__box" @click="fileInput?.click()">
          <span class="" v-if="!profile.photoUrl">R.A</span>

          <img :src="profile.photoUrl" alt="photo-url" class="" v-else />

          <input
            type="file"
            class="hidden"
            ref="fileInput"
            @change="handleFileChange"
          />
        </div>
        <form action="">
          <label htmlFor="email">email</label>
          <input type="email" v-model="profile.email" />
          <label htmlFor="displayName">Display Name</label>
          <input type="text" v-model="profile.displayName" />
          <label htmlFor="firstname">Firstname</label>
          <input type="text" v-model="profile.firstname" />
          <label htmlFor="lastname">Lastname</label>
          <input type="text" v-model="profile.lastname" />
          <label htmlFor="country">Country</label>
          <input type="text" v-model="profile.country" />

          <button type="button" @click="handleProfileUpdate">
            Update Info
          </button>
        </form>
      </div>
    </div>
    <div class="right__section">
      <div class="innerbox">
        <div class="box1">
          <h2>ACCOUNT SETTINGS</h2>
          <button>Change Password</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
import { reactive, ref } from "vue";
import { onAuthStateChanged, updateProfile, type User } from "firebase/auth";
import { auth } from "../utils/firebase";
import useFileUpload from "../composables/fileUpload";

const { uploadFile } = useFileUpload();

const isLoading = ref(true);

const fileInput = ref<HTMLInputElement | null>();

const profile = reactive({
  email: "",
  username: "",
  displayName: "",
  firstname: "",
  lastname: "",
  photoUrl: "",
  country: "",
});

const handleProfileUpdate = async () => {
  try {
    await updateProfile(auth.currentUser as User, {
      displayName: profile.displayName,
      photoURL: profile.photoUrl,
    });
  } catch (error) {
    console.log(error);
  }
};

const handleFileChange = () => {
  //   console.log((event.target as EventTarget).files);
  if (fileInput.value?.files) {
    uploadFile(fileInput.value?.files[0], {
      onDownloadUrl: (downloadUrl) => {
        console.log(downloadUrl);
        profile.photoUrl = downloadUrl;
      },
    });
  }
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    isLoading.value = false;
    profile.email = user?.email ?? "";
    profile.displayName = user?.displayName ?? "";
    profile.photoUrl = user?.photoURL ?? "";
  }
});
</script>

<style scoped>
h1 {
  margin-top: 20rem;
  color: red;
}
.logo {
  color: var(--black);
  font-size: 2rem;
  margin-right: auto;
}

h3 {
  line-height: 1;
  letter-spacing: 0.7;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}
.dashboard__nav {
  position: fixed;
  top: 0;
  left: 0;
  padding: 3rem;
  width: 25rem;
  height: 100vh;
  background-color: #000;
  color: #ccc;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1111;
}

.logo {
  margin: 2rem 0 -2rem;
}

.logo p {
  font-size: 1rem;
}
.dashboard__nav .user {
  margin-bottom: 5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
}

.mobile {
  display: none;
}

.hidden {
  display: none;
}

.dashboard__nav .user p {
  font-size: 1.1rem;
}

.dashboard__navlists .link {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
  margin-left: 2rem;
  white-space: nowrap;
  cursor: pointer;
  font-weight: bold;
}

.dashboard__navlists li:last-child {
  color: red;
  font-weight: bold;
}

.dashboard__navlists h5 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.dashboard__navlists .link li {
  display: flex;
  align-items: center;
  &:hover {
    color: var(--primary);
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #bbb;
  /* box-shadow: var(--box-shadow); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 7%;
  height: 9rem;
}

.innerdashboard__container .header .logo {
  display: none;
}

.header .user {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  right: 6%;
}

.right__nav {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.notificationbox {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  color: #fff;
  top: 11%;
  left: 22%;
  background: rgba(0, 0, 015, 0.5);
  text-align: center;
  padding-top: 3rem;
  z-index: 111;
}

.notificationbox p {
  font-size: 1.6rem;
}

.navigationlist {
  height: 12rem;
  width: 22rem;
  padding: 2rem;
  position: absolute;
  /* color: var(--background-primary); */
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
  /* align-items: center; */
}

.nav__icons .notification-icon {
  display: flex;
  color: red;
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

svg {
  height: 3rem;
  width: 3rem;
  display: none;
  align-items: center;
  justify-content: center;
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
}

.search-form .search svg {
  display: flex;
  align-items: center;
  justify-content: center;
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
  z-index: 111;
}

/* account settings page */

.settings__section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  color: #ccc;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 10rem;
  margin-bottom: 6rem;
  margin-top: 14rem;
}

.settings__section .right__section {
  display: flex;
  flex-direction: column;
  width: 34rem;
  align-self: flex-start;
  background: rgba(215, 215, 215, 0.2);
}

.settings__section .right__section .box1,
.settings__section .right__section .box2 {
  background-color: var(--background-primary);
  padding: 2rem;
  margin-bottom: 3rem;
  height: 14rem;
}

.settings__section .right__section .box2 {
  width: 30rem;
  height: 24rem;
  margin-left: 2rem;
}
.settings__section .right__section .box1 {
  width: 35rem;
}

.settings__section .left__section {
  display: flex;
  flex-direction: column;
  background: rgba(215, 215, 215, 0.2);
  padding: 2rem;
  width: 37rem;
}

.settings__section .left__section h2 {
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
}
.settings__section .left__section .usericon__box {
  margin-bottom: 2rem;
  width: 10rem;
  height: 10rem;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.usericon__box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.settings__section .left__section .inner__box form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.settings__section .left__section .inner__box form label {
  font-size: 1.4rem;
}
.settings__section .left__section .inner__box form input {
  height: 3rem;
}

.settings__section .left__section .inner__box form .upload {
  margin: 1rem 0;
  font-size: 1.5rem;
}

.settings__section .left__section .inner__box form button {
  margin-top: 1rem;
  width: 15rem;
}

.settings__section .right__section h2 {
  border-bottom: 1px solid #ccc;
  margin-bottom: 2rem;
}

.settings__section .right__section button {
  width: 15rem;
  margin-bottom: 2rem;
}

.settings__section .right__section .box2 .box {
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}
.settings__section .right__section .box2 .box img {
  width: 12rem;
  margin-bottom: 2rem;
}

.settings__section .right__section .inner__box {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 767px) {
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
  }

  .settings__section {
    margin-left: 0;
  }

  .settings__section .right__section {
    margin-left: -1rem;
  }
}

@media (max-width: 640px) {
}

@media (max-width: 480px) {
  .header {
    padding: 1.2rem 2%;
  }
  .dashboard__nav {
    width: 17rem;
  }

  .search-form {
    display: none;
  }

  .header .nav__icons {
    right: 22%;
    gap: 1rem;
  }

  .settings__section h2 {
    text-align: center;
  }

  .settings__section .right__section {
    width: 31rem;
  }
}
</style>
