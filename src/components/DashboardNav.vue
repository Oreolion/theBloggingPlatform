<template>
  <nav class="dashboard__nav">
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
 
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

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

@media (max-width: 767px) {
  .mobile {
    display: flex;
  }

  .dashboard__nav {
    display: none;
  }

  .mobile {
    display: flex;
  }
}

@media (max-width: 480px) {
  .dashboard__nav {
    width: 17rem;
  }
}
</style>
