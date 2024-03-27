<template>
  <section class="dashboard__container">
    <DashboardNav></DashboardNav>
    <HeaderAndNav></HeaderAndNav>
    <UserPost></UserPost>
  </section>

  <div></div>
</template>

<script setup lang="ts">
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
import UserPost from "../components/UserPost.vue";
</script>

<style scoped></style>
