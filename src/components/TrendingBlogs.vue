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
  flex: 1 1 65%;
}

.inner-postcontainer {
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
}

.post-container .post {
  padding: 2rem;
  border: var(--border);
  border-radius: 1rem;
  margin-bottom: 2rem;
  background-color: #ddd;
  min-width: 32rem;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 36rem;
}

.side-bar {
    flex: 1 1 30%;

}


@media (max-width: 766px ) {

}
</style>
