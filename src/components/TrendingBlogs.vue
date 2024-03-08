<template>
  <section>
    <div class="inner-container">
      <div class="leftbox">
        <div class="imgbox">
          <img
            src="/src/assets/images/pexels-justin-shaifer-1222271.jpg"
            alt=""
          />
        </div>
        <div class="imgbox">
          <img
            src="/src/assets/images/pexels-andrea-piacquadio-762020.jpg"
            alt=""
          />
        </div>
        <div class="imgbox">
          <img
            src="/src/assets/images/pexels-daniel-xavier-1239291.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="rightbox">
        <h1>Write, read and connect with great minds on chatter</h1>
        <p>
          Share people your great ideas, and also read write-ups based on your
          interests. connect with people of same interests and goals
        </p>
        <button>Get Started</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import BlogPost from "./BlogPost.vue";
</script>

<style scoped>
section {
  padding: 4rem 10%;
}

.inner-container {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20rem;
}

.leftbox {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1 1 30%;
  height: 40rem;
  margin-bottom: 5rem;
}

.leftbox .imgbox:nth-child(2) {
  align-self: flex-end;
}

.imgbox {
  height: 11rem;
  width: 11rem;
}

.imgbox img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.rightbox {
  background-color: rgba(5, 5, 5, 0.2);
  flex: 1 1 50%;
  padding: 3rem;
  color: #ccc;
  box-shadow: 6px 4px 4px rgba(250, 250, 220, 0.2);
  border-top: 0.5rem dotted #e67e22;
  border-left: 0.5rem dotted #e67e22;
  border-top-left-radius: 3rem;
  border-bottom-left-radius: 3rem;
  border-top-right-radius: 6rem;
}

.rightbox h1 {
  font-size: 2.9rem;
  max-width: 51rem;
  margin-bottom: 2rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.rightbox p {
  font-size: 1.9rem;
  margin-bottom: 2rem;
  max-width: 51rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

button {
  width: 15rem;
  height: 6rem;
}

@media (max-width: 768px) {
  .inner-container {
    flex-direction: column;
    gap: 3rem;
  }
}
@media (max-width: 320px) {
  .rightbox h1 {
    font-size: 2.5rem;
  }
}
</style>
