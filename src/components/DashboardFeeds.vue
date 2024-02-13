<template>
  <section class="dashboard__feeds">
    <div class="dashboardfeeds__header">
      <div class="leftbox">
        <h1>FEEDS</h1>
        <p>Explore different contents you will love</p>
      </div>
      <button>Post a content</button>
    </div>
    <div class="dashboardfeeds__nav">
      <h3>FOR YOU</h3>
      <h3>FEATURED</h3>
      <h3>RECENT</h3>
    </div>
    <div class="post__box">
      <NewsFeedPostVue></NewsFeedPostVue>
      <NewsFeedPostVue></NewsFeedPostVue>
      <NewsFeedPostVue></NewsFeedPostVue>
      <NewsFeedPostVue></NewsFeedPostVue>
      <NewsFeedPostVue></NewsFeedPostVue>
    </div>
  </section>
</template>

<script setup lang="ts">
import NewsFeedPostVue from "./NewsFeedPost.vue";
</script>

<style scoped>
.dashboard__feeds {
  margin-top: 10rem;
  margin-left: 24rem;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 2rem 4rem;
  border: 2px solid #e67e22;
  color: aliceblue;
  min-width: 33rem;
}

.dashboardfeeds__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.leftbox h1 {
  font-size: 2.6rem;
  letter-spacing: 2px;
}

.leftbox p {
  font-size: 1.3rem;
  letter-spacing: 1px;
}

.dashboardfeeds__nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid #e67e22;
  border-radius: 3px;
}

.dashboardfeeds__nav h3 {
  font-weight: bold;
}

.post__box {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

@media (max-width: 767px) {
  .dashboard__feeds {
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem;
  }
}

@media (max-width: 640px) {
  .dashboard__feeds {
    width: 34rem;
  }
}

@media (max-width: 480px) {
  .dashboardfeeds__nav {
    display: none;
  }
  .dashboard__feeds {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border: none;
    padding: 2rem 1rem;
    width: 31rem;
  }

  .dashboardfeeds__header {
    margin-left: -1rem;
    gap: 2rem;
  }

  button {
    width: 23rem;
  }
}

@media (max-width: 320px) {
  .leftbox h1 {
    font-size: 2.3rem;
    letter-spacing: 2px;
  }

  .leftbox p {
    font-size: 1.3rem;
    letter-spacing: 1px;
    max-width: 20rem;
  }
}
</style>
