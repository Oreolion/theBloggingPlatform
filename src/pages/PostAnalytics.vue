<template>
  <DashboardNav></DashboardNav>
  <HeaderAndNav></HeaderAndNav>
  <div class="postanalytics__box">
    <div class="postanalytics__topheader">
      <h1>Post Analytics</h1>
      <span
        ><h3>May 2023,</h3>
        <!-- </span>
    <span> -->
        <small>25 days so far</small>
      </span>
    </div>

    <div class="line"></div>

    <article class="post">
      <h3>Posts Highlights</h3>
      <span
        ><h3 class="analytics__header">Top posts</h3>
        <small>earned 2980 impressions</small>
      </span>

      <div class="user__profile">
        <div class="user__image"></div>
        <div class="user__info">
          <h3 class="username">Grace Ikpang</h3>
          <div>
            <p class="userrole">Product Designer</p>
            <p class="p1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                /></svg
              >1st may, 2023
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2>blog the title here</h2>
        <p>
          Lorem ipsum dolor sit rporis itaque eligendi magnam? A modi sequi et
          quae deleniti magnam ducimus, impedit tempora obcaecati. Enim.
        </p>
        <p>Lorem ipsum or numquam veniam recusandae veritatis cumque!</p>
      </div>
      <div class="image">
        <img
          src="https://media.istockphoto.com/id/475680439/photo/mountain-biking-british-columbia.jpg?b=1&s=170667a&w=0&k=20&c=Yi_mh2gqEDh12juV7_SPi0PTTq2-Tic7Cc9CSWSl0Rg="
          alt="/"
        />
      </div>

      <div class="reaction-box">
        <div class="left">
          <a href="#" class="user">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <span>2980 views</span>
          </a>
        </div>
        <div class="right">
          <a href="#" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
              />
            </svg>
            <span>(45) </span>
          </a>
          <a href="#" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              />
            </svg>
            <span>(29) </span>
          </a>
        </div>
      </div>
    </article>

    <div class="line"></div>

    <div class="bottom">
      <button>View post activity</button>
      <h3>Post summary</h3>
      <p>May 2023 summary</p>
    </div>
    <div class="lower__box">
      <div class="box">
        <p>Posts</p>
        <h3>3</h3>
      </div>
      <div class="box">
        <p>Posts impressions</p>
        <h3>2.98Kviews</h3>
      </div>
      <div class="box">
        <p>Profile visits</p>
        <h3>300</h3>
      </div>
      <div class="box">
        <p>New followers</p>
        <h3>300</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardNav from "../components/DashboardNav.vue";
import HeaderAndNav from "../components/HeaderAndNav.vue";
</script>

<style scoped>
.postanalytics__box > .postanalytics__topheader {
  margin-left: 30rem;
  margin-top: 13rem;
  font-size: 2rem;
  color: #fff;
}

.postanalytics__box .bottom {
  margin-left: 30rem;
  color: #fff;
}

.postanalytics__box .bottom button {
  margin-bottom: 2rem;
}

.postanalytics__box .bottom h3 {
  font-size: 1.8rem;
}

.postanalytics__box .bottom p {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.postanalytics__box > .line {
  height: 0.4rem;
  width: 100%;
  background-color: #e67e22;
  margin-bottom: 2rem;
}

.post > h3 {
  font-size: 2.3rem;
  margin-bottom: 2rem;
}

span {
  display: flex;
  gap: 1rem;
}
span h3 {
  font-size: 2.3rem;
  margin-bottom: 2rem;
}

span small {
  align-self: self-end;
  padding-bottom: 2rem;
  font-size: 1.5rem;
}

.post {
  flex: 1 1 30rem;
  background: rgba(215, 215, 215, 0.2);
  box-shadow: 4px 4px 4px 4px rgba(250, 250, 220, 0.2);
  height: 63rem;
  min-width: 28rem;
  margin-left: 30rem;
  margin-top: 4rem;
  margin-right: 15rem;
  margin-bottom: 8rem;
  border-radius: 1rem;
  padding: 2rem;
  line-height: 1;
  color: aliceblue;
}

.user__profile {
  display: flex;
  gap: 2rem;
}

.user__image {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #000;
}

.user__info div {
  display: flex;
  gap: 2rem;
}

.username {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.post .image {
  width: 90%;
  height: 24rem;
  margin-bottom: 1rem;
}

.post .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.post h2 {
  font-size: 2.3rem;
  font-weight: bold;
  color: var(--green);
  margin-bottom: 1rem;
}

.post p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  color: aliceblue;
  max-width: 90%;
}

.post .p1 {
  color: aliceblue;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.post .reaction-box {
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  margin-bottom: 0.2rem;
}

.post .reaction-box a {
  color: aliceblue;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post .reaction-box a:hover {
  color: var(--light);
  letter-spacing: 0.1rem;
}
.post .reaction-box svg {
  color: green;
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
}

svg {
  height: 2rem;
  width: 2rem;
}

.post .reaction-box .right {
  display: flex;
}
.post .reaction-box .right .icon {
  margin-right: 2rem;
}

.postanalytics__box .lower__box {
  margin-left: 30rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50%;
  margin-bottom: 4rem;
  font-size: 1.3rem;
  padding: 2rem 0;
  white-space: nowrap;
  color: aliceblue;
}

.postanalytics__box .lower__box .box {
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.postanalytics__box .lower__box .box h3 {
  font-size: 1.7rem;
}

@media (max-width: 768px) {
  .postanalytics__box > .postanalytics__topheader {
    margin-left: 8rem;
    margin-top: 12rem;
  }
  .post {
    height: 73rem;
    min-width: 30rem;
    margin-left: 6rem;
    margin-right: 6rem;
    margin-top: 4rem;
  }

  .postanalytics__box .bottom {
    margin-left: 8rem;
    margin-bottom: 4rem;
  }
  .postanalytics__box .bottom button {
    margin-bottom: 2rem;
  }

  .user__profile {
    flex-direction: column;
    gap: 1rem;
  }

  .user__info div {
    gap: 0.5rem;
  }

  .username {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .post .image {
    margin-bottom: 0.5rem;
  }

  .postanalytics__box .lower__box {
    margin-left: 8rem;
  }
}

@media (max-width: 480px) {
  .post {
    margin-left: 3rem;
    margin-bottom: 5rem;
  }
  .postanalytics__box > .postanalytics__topheader {
    font-size: 1.6rem;
    color: #fff;
    margin-left: 3rem;
  }

  .post .image {
    width: 24rem;
    height: 20rem;
    margin-bottom: .2rem;
  }

  .post .reaction-box .left {
    margin-right: 3rem;
  }

  .post .reaction-box svg {
    margin-right: 0.5rem;
  }

  .post .reaction-box .right .icon {
    margin-right: 4rem;
  }

  .postanalytics__box .bottom {
    margin-left: 3rem;
  }

  .postanalytics__box .lower__box {
    margin-left: 3rem;
  }
}

@media (max-width: 320px) {
  .post p {
    font-size: 1.3rem;
  }
}
</style>
