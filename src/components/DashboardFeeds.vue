<template>
  <section class="dashboard__feeds">
    <div class="dashboardfeeds__header">
      <div class="leftbox">
        <h1>FEEDS</h1>
        <p>Explore different contents you will love</p>
      </div>
      <button>Post a content</button>
    </div>
    <div class="dashboardfeeds__nav">
      <h3>FOR YOU</h3>
      <h3>FEATURED</h3>
      <h3>RECENT</h3>
    </div>
    <div class="post__box" v-if="users.length">
      <article class="post" v-for="(user, index) in users" :key="index">
        <div class="user__profile">
          <div class="user__image">
            <img :src="user.picture.thumbnail" alt="picture" />
          </div>
          <div class="user__info">
            <h3 class="username">
              {{ user.name.first + " " + user.name.last }}
            </h3>
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
          <h2>{{ blogsData[0].name }}</h2>
          <p>{{ blogsData[0].preContent }}</p>
          <a :href="blogsData[0].url">Click here to continue Reading this Article...</a>
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
    </div>
    <div v-else>
      <Loader></Loader>
    </div>
  </section>
</template>

<script setup lang="ts">
import Loader from "../components/Loader.vue";
import { blogsData } from "../stores/blogsData.ts";
import { reactive } from "vue";
import axios from "axios";

export interface IRandomUser {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: number;
    state: string;
    street: { number: number; name: string };
    timezone: {
      offset: string;
      description: string;
    };
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

interface IRandomUserResponse {
  info: {
    page: number;
    results: number;
    seed: string;
    version: string;
  };
  results: IRandomUser[];
}


let users: IRandomUser[] = reactive([]);

const fetchRandomUsers = async () => {
  const endpoint = "https://randomuser.me/api/?results=5";

  try {
    const response = await axios.get<IRandomUserResponse>(endpoint);

    // Log and assign the extracted user data
    console.log(response.data.results);
    return users = response.data.results;
  } catch (error) {
    console.error(error);
  }
};

fetchRandomUsers();
</script>

<style scoped>
.dashboard__feeds {
  margin-top: 10rem;
  margin-left: 24rem;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 2rem 4rem;
  border-radius: 2rem;
  background: rgba(225, 255, 255, 0.2);
  color: aliceblue;
  min-width: 33rem;
}

.dashboardfeeds__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.leftbox h1 {
  font-size: 2.6rem;
  letter-spacing: 2px;
}

.leftbox p {
  font-size: 1.3rem;
  letter-spacing: 1px;
}

.dashboardfeeds__nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-top-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  background: rgba(225, 225, 225, 0.2);
}

.dashboardfeeds__nav h3 {
  font-weight: bold;
}

.post__box {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.post {
  flex: 1 1 30rem;
  background: transparent rgba(250, 250, 220, 0.2);
  box-shadow: 4px 4px 4px 4px rgba(250, 250, 220, 0.2);
  height: 58rem;
  min-width: 28rem;
  border-radius: 1rem;
  padding: 2rem;
  line-height: 1.1;
  margin-bottom: 6rem;
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

.user__image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
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

@media (max-width: 767px) {
  .dashboard__feeds {
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1rem;
  }
}

@media (max-width: 640px) {
  .dashboard__feeds {
    width: 34rem;
  }
}

@media (max-width: 480px) {
  .dashboardfeeds__nav {
    display: none;
  }
  .dashboard__feeds {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border: none;
    padding: 2rem 1rem;
    width: 31rem;
  }

  .dashboardfeeds__header {
    margin-left: -1rem;
    gap: 2rem;
  }

  button {
    width: 23rem;
  }
}

@media (max-width: 320px) {
  .leftbox h1 {
    font-size: 2.3rem;
    letter-spacing: 2px;
  }

  .leftbox p {
    font-size: 1.3rem;
    letter-spacing: 1px;
    max-width: 20rem;
  }
}
</style>
