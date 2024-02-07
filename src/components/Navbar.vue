<template>
  <header class="header">
    <div class="logo">
      <h3>THE RA BLOG</h3>
      <p>The Read Along Blog</p>
    </div>

    <nav class="right__nav">
      <div class="nav__icons">
        <div class="menu-bar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
        <div class="search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </div>
      </div>
      <div class="search-form">
        <input type="search" placeholder="search here..." />
        <label for="search">
          <!-- <svg class="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg> -->
        </label>
      </div>
      <ul class="navlist">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/login">Write</router-link></li>
        <li><router-link to="/login">Sign in</router-link></li>
        <li>
          <router-link to="/signup"><button>Get Started</button></router-link>
        </li>
      </ul>
    </nav>
    <!-- Mobile Nav -->
    <nav class="mobile__nav">
      <ul class="navlist">

        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/login">Write</router-link></li>
        <li><router-link to="/login">Sign in</router-link></li>
        <li>
          <router-link to="/signup"><button>Get Started</button></router-link>
        </li>
      </ul>
    </nav>
    
</header>
</template>

<script setup lang="ts"></script>

<style scoped>
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

.header .logo {
  color: var(--black);
  font-size: 2rem;
  margin-right: auto;
}

h3 {
  line-height: 1;
  letter-spacing: 0.7;
}

.header .logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}
.right__nav {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
}

.mobile__nav {
  display: none;
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

.navlist li {
  cursor: pointer;
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
}

@media (max-width: 677px) {
  .navlist li:first-child,
  .navlist li:nth-child(2) {
    display: none;
  }

  .nav__icons .menu-bar svg {
    display: flex;
    order: 2;
  }
}
</style>
