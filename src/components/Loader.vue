<template>
  <span class="loader"></span>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  width: 780px;
  height: 400px;
  display: block;
  margin: auto;
  margin-top: 5rem;
  position: relative;
  background: #ccc;
  box-sizing: border-box;
}
.loader::after {
  content: "";
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(
      100deg,
      transparent,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 80%
    ),
    radial-gradient(circle 28px at 28px 28px, #ddd 99%, transparent 0),
    linear-gradient(#ddd 24px, transparent 0),
    linear-gradient(#ddd 18px, transparent 0),
    linear-gradient(#ddd 66px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
  background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  }
  100% {
    background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  }
}

@media (max-width: 768px) {
  .loader {
    width: 340px;
    height: 400px;
  }
}

@media (max-width: 480px) {
  .loader {
    width: 250px;
  }
}
</style>
