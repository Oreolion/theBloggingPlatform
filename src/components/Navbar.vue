<template>
  <header class="header">
    <div class="logo link">
      <router-link to="/">
        <h3>THE <span>RA</span> BLOG</h3>
        <p style="color: #e67e22">The <span>Read Along</span> Blog</p>
      </router-link>
    </div>

    <nav class="right__nav">
      <div class="nav__icons">
        <div class="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
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
          v-else="toggle"
          @click="toggleMenu"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
      <div class="search-form">
        <input type="search" placeholder="search here..." />
        <label for="search">
          <!-- <svg class="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> -->
        </label>
      </div>
      <ul class="navlist">
        <li>
          <router-link class="li" to="/">Home</router-link>
        </li>
        <li><router-link class="li" to="/login">Write</router-link></li>
        <li><router-link class="li" to="/login">Sign in</router-link></li>
        <li>
          <router-link class="li" to="/signup"
            ><button>Get Started</button></router-link
          >
        </li>
      </ul>
    </nav>
    <!-- Mobile Nav -->
    <nav v-if="toggle" class="mobile__nav">
      <ul class="mobile-navlist">
        <li>
          <router-link class="li" to="/">Home</router-link>
        </li>
        <li><router-link class="li" to="/login">Write</router-link></li>
        <li><router-link class="li" to="/login">Sign in</router-link></li>
        <li>
          <router-link class="li" to="/signup"
            ><button>Get Started</button></router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

let toggle = ref(false);
let toggleMenu = () => {
  return (toggle.value = !toggle.value);
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(295, 295, 295, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 4%;
  height: 9rem;
}

.header .logo {
  font-size: 2rem;
  margin-right: auto;
  background-color: rgba(05, 05, 05, 0.1);
  padding: 0.5rem;
  color: #e67e22;
  cursor: pointer;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}


h3 span {
  color: #ccc;
  background-color: green;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.logo p {
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  padding-left: 4px;
  background: rgba(05, 05, 05, 0.5);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.logo p span {
  background: rgba(05, 05, 05, 0.4);
  font-weight: bold;
  border-radius: 0.4rem;
  letter-spacing: 0.2;
  padding: 0.2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
}

.right__nav {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.header button {
  &:hover {
    color: #e67e22;
  }
}

.mobile__nav {
  background-color: rgba(350, 350, 350, 0.8);
  width: 34rem;
  height: 100vh;
  position: absolute;
  display: none;

  text-align: center;
  top: 100%;
  right: 0%;
  padding: 2rem;
  padding-bottom: 2rem;
}

.mobile__nav li,
.mobile__nav .li {
  margin-bottom: 2rem;
  color: #000;
  font-size: 1.6rem;
  font-weight: bold;
  &:hover {
    color: #e67e22;
  }
}

.nav__icons {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
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

.nav__icons .search svg {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navlist {
  display: flex;
  font-size: 1.4rem;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.navlist .li {
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  &:hover {
    color: #e67e22;
  }
}
.search-form {
  position: absolute;
  width: 46rem;
  top: 115%;
  right: 30%;
  display: none;
  align-items: center;
  gap: 1rem;
  background-color: #eee;
  padding: 0.6rem;
  border-radius: 0.6rem;
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
    background-color: #e67e22;
  }
}

@media (max-width: 767px) {
  .header {
    padding: 1.2rem 4%;
  }

  .header .logo {
    color: #222;
    font-size: 2rem;
    margin-right: 3rem;
    z-index: 111;
    background-color: rgba(05, 05, 05, 0.1);
    padding: 0.5rem;
  }

  .logo h3 {
    line-height: 1.2;
    letter-spacing: 0.2;
    font-size: 2.2rem;
  }

  .logo p {
    font-size: 1.3rem;
    letter-spacing: 0;
    padding-left: 4px;
    line-height: 0.9;
    white-space: nowrap;
    color: #e67e22;
  }

  .right__nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .navlist li:first-child,
  .navlist li:nth-child(2) {
    display: none;
  }
  .navlist li:nth-child(3) {
    display: none;
  }
  .navlist li:nth-child(4) {
    width: 13rem;
  }

  .nav__icons {
    gap: 2rem;
    cursor: pointer;
  }

  .nav__icons .menu-bar svg {
    display: flex;
  }

  .mobile__nav {
    display: flex;
    width: 26rem;
  }

  svg {
    display: flex;
  }
}

@media (max-width: 640px) {
  .navlist li:nth-child(3) {
    display: none;
  }
}
@media (max-width: 480px) {
  .mobile__nav {
    width: 24rem;
    width: 18rem;
  }
  .search {
    display: none;
  }

  .navlist li:nth-child(4) {
    width: 13rem;
    padding-right: 2rem;
  }

  .nav__icons .menu-bar svg {
    display: flex;
    margin-left: -1rem;
  }
}

@media (max-width: 320px) {
  .header .logo {
    width: 19rem;
    margin-right: 2rem;
    margin-left: -2rem;
  }
}
</style>
