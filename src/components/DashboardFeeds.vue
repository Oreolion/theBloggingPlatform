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
  padding: 1rem;
  
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

.post__box {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

@media (max-width: 768px) {
  .dashboard__feeds {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
