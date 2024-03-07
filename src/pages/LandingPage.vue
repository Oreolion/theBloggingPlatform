<template>
    <div>
        <Navbar />
        <HeroSection></HeroSection>
        <About></About>
        <TrendingPosts></TrendingPosts>
        <TrendingBlogs></TrendingBlogs>

    </div>
</template>

<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue';
import About from '../components/About.vue';
import Navbar from '../components/Navbar.vue';
import TrendingBlogs from '../components/TrendingBlogs.vue';
import TrendingPosts from '../components/TrendingPosts.vue';

</script>

<style scoped>

</style>