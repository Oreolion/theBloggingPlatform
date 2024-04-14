<template>
  <section class="dashboard__feeds">
    <div class="dashboardfeeds__header" v-if="!togglePostInput">
      <div class="leftbox">
        <h1>FEEDS</h1>
        <p>Explore different contents you will love</p>
      </div>
      <button @click="handleTogglePostInput">Post a content</button>
    </div>
    <div class="dashboardfeeds__nav" v-if="!togglePostInput">
      <h3>FOR YOU</h3>
      <h3>FEATURED</h3>
      <h3>RECENT</h3>
    </div>
    <BlogInputField
      v-if="togglePostInput"
      :togglePostInput="togglePostInput"
      @addNewPost="handleUpdateBlogPosts"
      @remove-blog-input-field="handleBlogInputField"
    ></BlogInputField>
    <div class="post__box" v-if="users.length || (posts && !togglePostInput)">
      <article
        class="post"
        v-for="(post, index) in posts"
        :key="post.postTitle"
        v-if="!isLoading"
        @click="handleBlogDetails(post, index)"
      >
        <div class="user__profile">
          <div class="user__image">
            <span class="" v-if="!post.userPhotoURL">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                /></svg
            ></span>
            <img :src="post.userPhotoURL" alt="picture" v-else />
          </div>
          <div class="user__info">
            <h3 class="username">
              Name: {{ post.postUserName }} 
            </h3>
            <div>
              <p class="userrole">
                {{ post.postUserName }}
              </p>
              <p class="p1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  /></svg
                >{{ post.postDate }}
              </p>
            </div>
          </div>
        </div>

        <div class="postheader">
          <h2>{{ post.postTitle }}</h2>
          <p>{{ post.content }}</p>
        </div>
        <div class="image">
          <img :src="post.photoImage" alt="" />
        </div>

        <div class="reaction-box">
          <div class="left">
            <div href="#" class="user">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
              <span>2980 views</span>
            </div>
          </div>
          <div class="right">
            <button class="icon">
              <svg
                fill="#ccc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                />
              </svg>
              <span>0 </span>
            </button>
            <button class="icon" @click="onLike">
              <svg
                fill="#ccc"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
              <span>{{ likeCount }} </span>
            </button>
          </div>
        </div>
      </article>
      <article
        class="post"
        v-for="user in users"
        :key="user.id.value"
        v-if="!isLoading"
      >
        <div class="user__profile">
          <div class="user__image">
            <img :src="user.picture.thumbnail" alt="picture" />
          </div>
          <div class="user__info">
            <h3 class="username">
              {{ user.name.first + " " + user.name.last }}
            </h3>
            <div>
              <p class="userrole">
                {{ user.location.country + ", " + user.location.state }}
              </p>
              <p class="p1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  /></svg
                >{{ user.registered.date.slice(0, 10) }}
              </p>
            </div>
          </div>
        </div>

        <div class="postheader">
          <h2>{{ blogsData[0].name }}</h2>
          <p>{{ blogsData[0].preContent }}</p>
          <a :href="blogsData[0].url"
            >Click here to continue Reading this Article...</a
          >
        </div>
        <div class="image">
          <img
            src="https://media.istockphoto.com/id/475680439/photo/mountain-biking-british-columbia.jpg?b=1&s=170667a&w=0&k=20&c=Yi_mh2gqEDh12juV7_SPi0PTTq2-Tic7Cc9CSWSl0Rg="
            alt=""
          />
        </div>

        <div class="reaction-box">
          <div class="left">
            <div href="#" class="user">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>
              <span>29 views</span>
            </div>
          </div>
          <div class="right">
            <button href="#" class="icon">
              <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                />
              </svg>
              <span>45 </span>
            </button>
            <button href="#" class="icon">
              <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
              <span>{{ user.registered.age }}</span>
            </button>
          </div>
        </div>
      </article>
    </div>
    <div v-if="isLoading">
      <Loader></Loader>
    </div>
  </section>
</template>

<script setup lang="ts">
import Loader from "../components/Loader.vue";
import { blogsData } from "../stores/blogsData.ts";
import BlogInputField from "../components/BlogInputField.vue";
import {
  getDocs,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

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

interface NewPost {
  userId: string;
  postTitle: string;
  content: string;
  photoImage: string;
  [key: string]: any;
}

let users: IRandomUser[] = reactive([]);
let togglePostInput = ref(false);
let isLoading = ref(true);

const handleTogglePostInput = () => {
  return (togglePostInput.value = !togglePostInput.value);
};

const fetchRandomUsers = async () => {
  const endpoint = "https://randomuser.me/api/?results=5";

  try {
    const response = await axios.get<IRandomUserResponse>(endpoint);
    console.log(response.data.results);
    users = response.data.results;
    handleUpdateBlogPosts();
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

let posts: NewPost[] = reactive([]);

let profile = reactive({
  photoURL: "",
  displayName: "",
  email: "",
});

const emits = defineEmits(["selected"]);

const selectedIndex = ref(0);
const likeCount = ref(0);

const handleBlogInputField = () => {
  return (togglePostInput.value = false);
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoading.value = false;
    profile.photoURL = user.photoURL ?? "";
    profile.displayName = user.displayName ?? "";
    profile.email = user.email ?? "";
  }
});

console.log(profile)

function handleBlogDetails(post: any, index: number) {
  selectedIndex.value = index;
  const postDetails = posts.filter((post, i) => {
    console.log(post);
    return i === index;
  });
  console.log(postDetails);
  localStorage.setItem("currentPost", JSON.stringify(postDetails));
  // const userId = post.userId;
  // Access the userId from the post object
  router.push({
    name: "blog-user-post",
    params: { post: post.userId },
  });
}

const userProfile: any = reactive([])

const handleUpdateUser = async () => {
  const postRef = collection(db, "users");
  //   const postQuery = query(postRef, orderBy("createdAt", "asc"), limit(5));

  // Get initial data
  const querySnapshot = await getDocs(postRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc) => {
        //  console.log(doc.id, " => ", doc.data());

            userProfile.push(doc.data() as any);

      
    });
  } else {
    console.log("No such document!");
  }
};

const handleUpdateBlogPosts = async () => {
  const postRef = collection(db, "blogpost");
  const postQuery = query(postRef, orderBy("createdAt", "desc"), limit(10));
  isLoading.value = true;

  // Get initial data
  const querySnapshot = await getDocs(postRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
        // console.log(doc.id, " => ", doc.data());
      posts.push(doc.data() as NewPost);
    });
  } else {
    console.log("No such document!");
  }

  // console.log(posts);

  onSnapshot(postQuery, (snapshot) => {
    snapshot.docs.map((doc) => {
      posts.push(doc.data() as NewPost);
    });
    // console.log(posts);
    isLoading.value = false;
  }),
    (error: any) => {
      console.log(error);
    };
};

onMounted(async () => {
  return await fetchRandomUsers();
});
onMounted(async () => {
  return await handleUpdateUser();
});

const onLike = () => {
  return likeCount.value++;
};
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
  min-width: 36rem;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
}

.dashboardfeeds__header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.leftbox {
  background: rgba(006, 006, 006, 0.2);
  padding: 1rem;
  padding-right: 4rem;
  border-radius: 1rem;
}

.leftbox h1 {
  font-size: 2.6rem;
  letter-spacing: 2px;
}

.postheader a {
  color: green;
  font-weight: bold;
  &:hover {
    letter-spacing: 1px;
  }
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
  background: rgba(005, 005, 005, 0.2);
  color: #e67e22;
}

.dashboardfeeds__nav h3 {
  font-weight: bold;
  font-size: 2rem;
  background: rgba(256, 256, 256, 0.1);
  padding: 0.5rem;
  border-radius: 0.5rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.user__image svg {
  fill: #e67e22;
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
  width: 94%;
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
  max-width: 90%;
}

.post p {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  color: aliceblue;
  max-width: 90%;
}

.post a,
.p1 {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.post .reaction-box {
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  margin-bottom: 0.2rem;
}

.post .reaction-box div {
  color: aliceblue;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.post .reaction-box .right button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post .reaction-box div:hover {
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

.post .reaction-box .right button:nth-child(2):active svg {
  fill: red;
}
.post .reaction-box .right .icon {
  margin-right: 2rem;
}

@media (max-width: 767px) {
  .dashboard__feeds {
    margin-left: 4rem;
    padding: 1rem;
  }

  .post {
    height: 76rem;
    min-width: 29rem;
  }

  .post h2 {
    font-size: 2rem;
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
}

@media (max-width: 640px) {
  .dashboard__feeds {
    width: 38rem;
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
    width: 37rem;
  }

  .leftbox {
    padding-right: 2rem;
    margin-left: 1rem;
  }

  .leftbox p {
    display: none;
  }

  .dashboardfeeds__header {
    margin-left: -1rem;
    gap: 2rem;
  }

  button {
    width: 23rem;
  }

  .reaction-box button {
    width: 9rem;
  }

  .user__profile {
    flex-direction: row;
  }

  .post__box {
    gap: 4rem;
    width: 95%;
  }

  .post {
    padding-left: 0;
  }
  .post .image {
    width: 30rem;
    height: 20rem;
    margin-bottom: 1rem;
  }

  .post .reaction-box .left {
    margin-right: 1rem;
  }

  .post .reaction-box svg {
    margin-right: 0.5rem;
  }

  .post .reaction-box .right .icon {
    margin-right: 1rem;
  }
}

@media (max-width: 320px) {
  .dashboard__feeds {
    width: 33rem;
    padding: 1rem;
    margin-left: -2rem;
  }

  .leftbox {
    padding-right: 1rem;
    margin-left: 1rem;
  }
  .leftbox h1 {
    font-size: 2.3rem;
    letter-spacing: 2px;
  }

  .leftbox p {
    display: none;
  }

  .user__profile {
    flex-direction: row;
  }

  .post__box {
    width: 90%;
    gap: 2rem;
  }

  .post {
    padding-left: 1rem;
  }

  .post p {
    font-size: 1.3rem;
  }

  .post .reaction-box button {
    width: 9rem;
  }

  .post .reaction-box .right .icon {
    margin-right: 1.5rem;
  }
}
</style>
