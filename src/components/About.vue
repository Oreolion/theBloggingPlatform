<template>
  <section>
    <div class="inner__box">
      <div class="leftbox">
        <h1>About The Read Along Blog...</h1>
        <p>
          The Read Along Blog is a multi-functional platform where authors and
          readers can have access to their own content. It aims to be a
          traditional bookworm’s heaven and a blog to get access to more text
          based content. Our vision is to foster an inclusive and vibrant
          community where diversity is celebrated. We encourage open-mindedness
          and respect for all individuals, regardless of their backgrounds or
          beliefs. By promoting dialogue and understanding, we strive
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  height: 45rem;
  margin-bottom: 3rem;
  background: url("/src/assets/images/pexels-kaboompics-com-6469.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding-top: 6rem;
}
.inner__box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.inner__box .leftbox {
  color: #e67e22;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 3.9rem;
  font-weight: bold;
  margin-bottom: 3rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

p {
  font-size: 2.2rem;
  font-weight: bold;
  max-width: 92rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

@media (max-width: 678px) {
  p {
    font-size: 1.9rem;
  }
}

@media (max-width: 480px) {
  section {
    padding-top: 2rem;
  }
  h1 {
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
}
@media (max-width: 320px) {
  section {
    padding-top: 2rem;
  }
  h1 {
    font-size: 2.3rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
}
</style>
