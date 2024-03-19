<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <section>
    <article class="post">
      <h3>
        Their is currently no content to Display, refresh or check back later...
      </h3>
    </article>
  </section>
</template>

<script setup lang="ts">
import DashboardNav from "./DashboardNav.vue";
import HeaderAndNav from "./HeaderAndNav.vue";
</script>

<style scoped>
.post {
  flex: 1 1 30rem;
  background: rgba(215, 215, 215, 0.2);
  box-shadow: 4px 4px 4px 4px rgba(250, 250, 220, 0.2);
  height: 63rem;
  min-width: 28rem;
  margin-left: 30rem;
  margin-top: 10rem;
  margin-right: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 2rem;
  line-height: 1;
  color: #ccc;
}

h3 {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
}


@media (max-width: 768px) {
  .post {
    margin-left: 3rem;
    margin-bottom: 5rem;
    margin-right: 4rem;
  }

}
</style>
