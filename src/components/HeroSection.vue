<template>
  <section class="section">
    <div class="inner__herosection">
      <div class="left__herosection">
        <h1>Curious to learn new things? okay! READ ALONG...</h1>
        <h3>
            Unleash the Power of Words, Connect with Like-minded Readers and Writers, Discover stories, thinking, and expertise from writers on any topic.
        </h3>
        <button class="hero-btn">
          <router-link class="li" to="/signup">Get Started</router-link>
        </button>
      </div>
      <div class="right__herosection">
        <div class="imgbox">
          <img
            src="/src/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
            alt="backgroundimage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref } from "vue";

// const backgroundImage = ref(
//   "/src/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg"
// );
</script>

<style scoped>
h1 {
  color: #fff;
}

.li {
  color: aliceblue;
  font-weight: bold;
  &:hover {
    color: #000;
  }
}

.section {
  background-color: #e67e22;
  min-height: 56rem;
  padding: 2rem 3%;
}

.inner__herosection {
  display: flex;
}

.left__herosection {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-top: 20rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='600' height='800' preserveAspectRatio='none' viewBox='0 0 600 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1745%26quot%3b)' fill='none'%3e%3crect width='600' height='800' x='0' y='0' fill='rgba(230%2c 126%2c 34%2c 1)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask1747%26quot%3b)'%3e%3cpath d='M310.5 34.5L287.5 57.5L287.5 80.5M310.5 -11.5L310.5 11.5L310.5 34.5L310.5 57.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M304.75 57.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM281.75 80.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M287.5 -11.5L287.5 11.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M281.75 11.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M287.5 103.5L310.5 126.5L310.5 149.5L310.5 172.5L310.5 195.5M333.5 11.5L356.5 34.5M287.5 126.5L287.5 149.5L287.5 172.5L287.5 195.5L287.5 218.5M333.5 -11.5L333.5 11.5L333.5 34.5L333.5 57.5L310.5 80.5L287.5 103.5L287.5 126.5L264.5 149.5L264.5 172.5L264.5 195.5L264.5 218.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M258.75 218.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM304.75 195.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM350.75 34.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM281.75 218.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M241.5 149.5L241.5 172.5M218.5 241.5L241.5 264.5L241.5 287.5L241.5 310.5L241.5 333.5L241.5 356.5M218.5 310.5L195.5 333.5L195.5 356.5M218.5 195.5L241.5 218.5L241.5 241.5L264.5 264.5L264.5 287.5M264.5 -11.5L264.5 11.5L264.5 34.5L264.5 57.5L264.5 80.5L264.5 103.5L264.5 126.5L241.5 149.5L218.5 172.5L218.5 195.5L218.5 218.5L218.5 241.5L218.5 264.5L218.5 287.5L218.5 310.5L218.5 333.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M212.75 333.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM235.75 172.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM235.75 356.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM189.75 356.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM258.75 287.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M241.5 -11.5L241.5 11.5L241.5 34.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M235.75 34.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M379.5 -11.5L379.5 11.5L379.5 34.5L356.5 57.5L356.5 80.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M350.75 80.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M195.5 195.5L172.5 218.5L172.5 241.5L172.5 264.5M218.5 103.5L195.5 126.5L195.5 149.5M195.5 172.5L172.5 195.5L149.5 218.5L149.5 241.5L149.5 264.5M218.5 -11.5L218.5 11.5L218.5 34.5L218.5 57.5L218.5 80.5L218.5 103.5L218.5 126.5L218.5 149.5L195.5 172.5L195.5 195.5L195.5 218.5L195.5 241.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M189.75 241.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM166.75 264.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM189.75 149.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM143.75 264.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M379.5 195.5L356.5 218.5L356.5 241.5M379.5 103.5L402.5 126.5L402.5 149.5L402.5 172.5L402.5 195.5M402.5 34.5L402.5 57.5L402.5 80.5L402.5 103.5M402.5 -11.5L402.5 11.5L402.5 34.5L379.5 57.5L379.5 80.5L379.5 103.5L379.5 126.5L379.5 149.5L379.5 172.5L379.5 195.5L379.5 218.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M373.75 218.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM350.75 241.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM396.75 195.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM396.75 103.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M195.5 -11.5L195.5 11.5L195.5 34.5L195.5 57.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M189.75 57.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M425.5 172.5L448.5 195.5M425.5 103.5L448.5 126.5L448.5 149.5M425.5 11.5L448.5 34.5L471.5 57.5L471.5 80.5M425.5 241.5L402.5 264.5L402.5 287.5M425.5 -11.5L425.5 11.5L425.5 34.5L425.5 57.5L425.5 80.5L425.5 103.5L425.5 126.5L425.5 149.5L425.5 172.5L425.5 195.5L425.5 218.5L425.5 241.5L425.5 264.5L425.5 287.5L425.5 310.5L425.5 333.5L425.5 356.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M419.75 356.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM442.75 195.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM442.75 149.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM465.75 80.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM396.75 287.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3cpath d='M172.5 34.5L149.5 57.5L149.5 80.5L149.5 103.5L126.5 126.5M172.5 80.5L195.5 103.5M172.5 11.5L149.5 34.5L126.5 57.5M172.5 -11.5L172.5 11.5L172.5 34.5L172.5 57.5L172.5 80.5L172.5 103.5L149.5 126.5L149.5 149.5' stroke='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)' stroke-width='3.83'%3e%3c/path%3e%3cpath d='M143.75 149.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM120.75 126.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM189.75 103.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0zM120.75 57.5 a5.75 5.75 0 1 0 11.5 0 a5.75 5.75 0 1 0 -11.5 0z' fill='url(%26quot%3b%23SvgjsLinearGradient1746%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1745'%3e%3crect width='600' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0' y1='232' x2='600' y2='232' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1746'%3e%3cstop stop-color='%233a7cc3' offset='0'%3e%3c/stop%3e%3cstop stop-color='%23dd1133' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cmask id='SvgjsMask1747'%3e%3crect width='600' height='800' fill='white'%3e%3c/rect%3e%3cpath d='M307.62 57.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM284.62 80.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M284.62 11.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M261.62 218.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM307.62 195.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM353.62 34.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM284.62 218.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M215.62 333.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM238.62 172.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM238.62 356.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM192.62 356.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM261.62 287.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M238.62 34.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M353.62 80.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M192.62 241.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM169.62 264.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM192.62 149.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM146.62 264.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M376.62 218.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM353.62 241.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM399.62 195.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM399.62 103.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M192.62 57.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M422.62 356.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM445.62 195.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM445.62 149.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM468.62 80.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM399.62 287.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3cpath d='M146.62 149.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM123.62 126.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM192.62 103.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0zM123.62 57.5 a2.88 2.88 0 1 0 5.76 0 a2.88 2.88 0 1 0 -5.76 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}

.left__herosection h1 {
  font-size: 3.9rem;
  margin-bottom: 3rem;
  letter-spacing: 0.5px;
  font-weight: bold;
  min-width: 49rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.left__herosection h3 {
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 4rem;
  min-width: 47rem;
  max-width: 47rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.left__herosection .hero-btn {
  width: 17rem;
  height: 6rem;
}
.right__herosection {
  width: 50%;
}

.right__herosection .imgbox {
  width: 90%;
  height: 90%;
  padding-top: 13rem;
}

.right__herosection .imgbox img {
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  background: url("/src/assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 767px) {
  .inner__herosection {
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
  }

  .left__herosection {
    margin: 0 6rem;
    text-align: center;
    padding-bottom: 4rem;
    padding-top: 14rem;
  }

  .left__herosection h1 {
    font-size: 2.6rem;
    min-width: 45rem;
  }
  .left__herosection h3 {
    font-size: 2.3rem;
    min-width: 47rem;
    max-width: 47rem;
  }

  .left__herosection .hero-btn {
    width: 17rem;
    margin: 0 16rem;
    height: 6rem;
  }

  .right__herosection .imgbox {
    width: 200%;
    height: 100%;
    padding-top: 4rem;
  }
}

@media (max-width: 639px) {
  .left__herosection {
    margin: 0 3rem;
    text-align: center;
    padding-left: 4rem;
    /* background: transparent; */
  }

  .left__herosection h1 {
    min-width: 36rem;
    font-size: 2.5rem;
    margin-left: 3rem;
  }

  .left__herosection h3 {
    font-size: 2rem;
    min-width: 38rem;
  }

  .left__herosection .hero-btn {
    width: 17rem;
    margin: 0 10rem;
  }
}

@media (max-width: 480px) {
  .left__herosection {
    margin: 0 1rem;
    text-align: center;
    padding-left: 0rem;
    min-width: 36rem;
  }

  .left__herosection h1 {
    font-size: 2rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .left__herosection h3 {
    min-width: 16rem;
    color: #000;
    width: 28rem;
    font-size: 1.7rem;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .left__herosection .hero-btn {
    width: 17rem;
    margin: 0 4rem;
    margin: 0 auto;
  }
}

@media (max-width: 320px) {
  .left__herosection {
    padding-top: 10rem;
    min-width: 26rem;
  }

  .left__herosection h1 {
    min-width: 26rem;
    width: 28rem;
  }
}
</style>
