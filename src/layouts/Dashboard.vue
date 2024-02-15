<template>
  <section class="dashboard__container">
    <DashboardNav></DashboardNav>
    <!-- mobile dashboard navbar -->
    <nav class="dashboard__nav mobile" v-if="toggle">
      <div class="logo link">
        <h3>THE RA BLOG</h3>
        <p>The Read Along Blog</p>
      </div>
      <div class="user">
        <!-- <FaUserTie size="{40}" /> -->
        <div class="user__info"></div>
      </div>
      <ul class="dashboard__navlists">
        <h5>Overview</h5>
        <li>
          <div class="link" @click="">
            <!-- <IoMdHome size="{20}" /> -->
            <p>Feed</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <IoAddSharp size="{20}" /> -->
            <p>Bookmarks</p>
          </div>
        </li>
        <li>
          <div class="link">
            <!-- <AiOutlineMinus size="{20}" /> -->
            <p>Team Blog</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <LuHistory size="{20}" /> -->
            <p>Drafts</p>
          </div>
        </li>
        <li>
          <router-link class="link" to="/dashboard/postanalytics">
            <!-- <LuHistory size="{20}" /> -->
            Analytics
          </router-link>
        </li>
        <h5>Trending Tags</h5>
        <li>
          <div class="link" @click="">
            <!-- <IoMdHome size="{20}" /> -->
            <p>Programming</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <IoAddSharp size="{20}" /> -->
            <p>Data Science</p>
          </div>
        </li>
        <li>
          <div class="link">
            <!-- <AiOutlineMinus size="{20}" /> -->
            <p>Metaphysics</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <LuHistory size="{20}" /> -->
            <p>Machine Learning</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <LuHistory size="{20}" /> -->
            <p>Politics</p>
          </div>
        </li>
        <li>
          <div class="link" @click="">
            <!-- <LuHistory size="{20}" /> -->
            <p>See all</p>
          </div>
        </li>

        <h5>Personal</h5>

        <li>
          <router-link class="link" to="/dashboard/accountprofile">
            <!-- <LuHistory size="{20}" /> -->
            Account
          </router-link>
        </li>
        <li>
          <div class="link" @Click="">
            <!-- <MdOutlineSettings size="{20}" /> -->
            <p>Notifications</p>
          </div>
        </li>
        <li @click="handleLogout">
          <div class="link">
            <!-- <BiLogOut size="{20}" /> -->
            <p>Logout</p>
          </div>
        </li>
      </ul>
    </nav>
    <main class="innerdashboard__container">
      <header class="header">
        <div class="logo link">
          <h3>THE RA BLOG</h3>
          <p>The Read Along Blog</p>
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
        <div class="img__box">
          <!-- <img src="" alt="" /> -->
        </div>
      </header>
      <DashboardFeeds></DashboardFeeds>
    </main>
  </section>
</template>

<script setup lang="ts">
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
import DashboardNav from "../components/DashboardNav.vue";

import DashboardFeeds from "../components/DashboardFeeds.vue";

const router = useRouter();

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

function toggleMenu() {
  return (toggle.value = !toggle.value);
}


</script>

<style scoped>
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

/* header */

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
}
</style>
