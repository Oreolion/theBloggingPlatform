<template>
  <section>
    <div class="inner-postcontainer">
      <div class="post-container">
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
        <BlogPost></BlogPost>
      </div>
      <div class="side-bar">
        <PostCategory></PostCategory>
        <div class="footer-box">
          <ul class="links">
            <li><a href="#">Help</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Teams</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogPost from "./BlogPost.vue";
import PostCategory from "./PostCategory.vue";
// defineProps({
//     image: {
//         type: String,
//         required: true
//     }
// })
</script>

<style scoped>
section {
  padding: 2rem 5%;
}
.post-container {
  display: flex;
  gap: 3rem;
  flex-flow: row;
  flex-wrap: wrap;
  flex: 1 1 67%;
}

.inner-postcontainer {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
}

.post-container .post {
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  background-color: #ddd;
  box-shadow: 2px 4px 2px rgba(250, 250, 220, 0.2);
  min-width: 32rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 36rem;
}

.side-bar {
  flex: 1 1 25%;
  display: flex;
  flex-direction: column;
}

.side-bar .footer-box {
  border-radius: 1rem;
  min-width: 20rem;
  height: 20rem;
}

.side-bar .footer-box .links {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-size: 1.7rem;
  padding: 2rem;
}

@media (max-width: 766px) {
}
</style>
