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
// import { useRoute } from 'vue-router';

// const route = useRoute();
// Retrieve the postDetails from the query parameter
// const postDetailsString = JSON.parse(route.query.postDetails);
// const postDetails = route.state.postDetails;

// Check if postDetailsString is a string before parsing it as JSON
// let postDetails: any = null;
// if (typeof postDetailsString === 'string') {
//   postDetails = JSON.parse(postDetailsString);
// }


// Use the postDetails in your component
// console.log(route.params.postDetails);


</script>

<style scoped></style>
