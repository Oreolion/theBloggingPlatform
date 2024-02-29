<template>
  <section class="dashboard__container">
    <DashboardNav></DashboardNav>
    <HeaderAndNav></HeaderAndNav>
    <DashboardFeeds></DashboardFeeds>
  </section>
</template>

<script setup lang="ts">
import DashboardNav from "../components/DashboardNav.vue";
import DashboardFeeds from "../components/DashboardFeeds.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
</script>

<style scoped>

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
