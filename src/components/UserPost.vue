<template>
  <section class="dashboard__feeds">
    <button @click="$router.go(-1)">
      <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
        />
      </svg>
    </button>
    <article class="post" v-if="!isLoading">
      <div class="user__profile">
        <div class="user__image">
          <span class="" v-if="!mypost.userPhotoURL">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              /></svg
          ></span>
          <img :src="mypost.userPhotoURL" alt="picture" v-else />
        </div>
        <div class="user__info">
          <h3 class="username">
            Name: {{ mypost.postFullName.toUpperCase() }}
          </h3>
          <div>
            <p class="userrole">
              {{ mypost.postUserName }}
            </p>
            <p class="p1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                /></svg
              >{{ mypost.postDate }}
            </p>
          </div>
        </div>
      </div>

      <div class="postheader">
        <h2>Title: {{ route.params.post }}</h2>
        <p>{{ mypost.content }}</p>
      </div>
      <div class="image">
        <img :src="mypost.photoImage" alt="" />
      </div>

      <div class="reaction-box">
        <div class="left">
          <div class="user">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            <span>29 views</span>
          </div>
        </div>
        <div class="right">
          <button @click="handleToggleCommentBox" class="icon">
            <svg
              fill="#ccc"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
              />
            </svg>
            <span>{{ commentLists.length }} </span>
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
            <span>{{ like.likeCount }} </span>
          </button>
        </div>
      </div>
    </article>
    <div class="comment__box" v-if="toggleCommentBox">
      <div class="comment__lists">
        <div
          v-for="each in commentLists"
          :key="each.email"
          v-if="commentLists.length"
        >
          <div class="user">
            <div class="user__profile">
              <div class="user__image">
                <span class="" v-if="!each.photoURL">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                    /></svg
                ></span>
                <img :src="each.photoURL" alt="picture" v-else />
              </div>
              <h3 class="username">
                {{ each.comment.displayName || each.comment.email }}
              </h3>
            </div>
          </div>
          <div class="comment__content">
            {{ each.comment.comment }}
          </div>
        </div>
      </div>
      <div class="user">
        <div class="user__profile">
          <div class="user__image">
            <span class="" v-if="!profile.photoURL">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                /></svg
            ></span>
            <img :src="profile.photoURL" alt="picture" v-else />
          </div>
          <h3 class="username">
            {{ profile.displayName.toUpperCase() || profile.email }}
          </h3>
        </div>
      </div>
      <label>
        <textarea placeholder="add comment..." v-model="comment.comment">
        </textarea>
      </label>
      <br />
      <div class="btnbox">
        <button @click="toggleCommentBox = !toggleCommentBox">cancel</button>
        <button @click="createComment">comment</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRoute } from "vue-router";
import { db } from "../utils/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const route = useRoute();
let thePost;
const post = localStorage.getItem("currentPost");
if (post !== null) {
  thePost = JSON.parse(post);
} else {
  console.log("No current Post");
}

const mypost = thePost.pop();
console.log(mypost);

let isLoading = ref(false);
let toggleCommentBox = ref(false);

const handleToggleCommentBox = () => {
  return (toggleCommentBox.value = !toggleCommentBox.value);
};

let profile = reactive({
  photoURL: "",
  displayName: "",
  email: "",
  userId: "",
});
let comment = reactive({
  photoURL: profile.photoURL,
  displayName: profile.displayName,
  email: profile.email,
  comment: "",
});

let commentLists: any[] = reactive([]);
let likeLists: any[] = reactive([]);
let isLike = ref(false);

console.log(comment.email);

const createComment = async () => {
  try {
    comment.email = profile.email;
    comment.photoURL = profile.photoURL;
    comment.displayName = profile.displayName;

    if (!profile.email) {
      console.error("Email is missing from comment data.");
      return;
    }
    await addDoc(collection(db, "comments"), { comment });
    console.log(comment);
    comment.comment = "";
  } catch (error) {
    console.log(error);
  }
};

let like = reactive({
  likeCount: likeLists.length,
  likeBy: profile.displayName,
  likeWithEmail: profile.email,
});

function toggleLike() {
  return (isLike.value = !isLike.value);
}

const createLike = async () => {
  try {
    like.likeWithEmail = profile.email;
    like.likeBy = profile.displayName;
    like.likeCount = isLike.value ? like.likeCount - 1 : like.likeCount + 1;
    const likeRef = doc(db, "likes", profile?.userId);

    toggleLike();

    //console.log(like.likeCount)
    //console.log(isLike.value);
  
    if (isLike.value) {
      return await deleteDoc(likeRef);
    } else {
      return await setDoc(likeRef, { userId: profile?.userId });
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

const onLike = async () => {
  await createLike();
  await handleUpdateLikes();
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoading.value = false;
    profile.photoURL = user.photoURL ?? "";
    profile.displayName = user.displayName ?? "";
    profile.email = user.email ?? "";
    profile.userId = user.uid ?? "";
  }
});

const handleUpdateComments = async () => {
  const postRef = collection(db, "comments");
  // isLoading.value = true;

  // Get initial data
  const querySnapshot = await getDocs(postRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
      // console.log(doc.id, " => ", doc.data());
      commentLists.push(doc.data());
    });
  } else {
    console.log("No such document!");
  }
};

const handleUpdateLikes = async () => {
  const postRef = collection(db, "likes");
  // isLoading.value = true;

  // Get initial data
  const querySnapshot = await getDocs(postRef);

  if (querySnapshot) {
    querySnapshot.docs.map((doc: any) => {
      // console.log(doc.id, " => ", doc.data());
      likeLists.push(doc.data());
    });
    //console.log(likeLists)
  } else {
    console.log("No such document!");
  }
};

onMounted(async () => {
  return await handleUpdateComments();
});

onMounted(async () => {
  return await handleUpdateLikes();
});
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
  min-height: 45rem;
  display: flex;
  flex-direction: column;
}

.dashboard__feeds > button {
  width: 15rem;
  margin-bottom: 2rem;
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
  width: 6rem;
  height: 6rem;
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

.post .reaction-box .right button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post .reaction-box .right button:nth-child(2):active svg {
  fill: red;
}
.post .reaction-box .right .icon {
  margin-right: 2rem;
}

.comment__box {
  position: relative;
  background: rgba(222, 222, 220, 0.2);
  padding: 1rem;
  border-radius: 1rem;
  right: 0%;
  left: 0%;
  top: -2%;
  min-width: 35rem;
}

.comment__box .user__profile {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}

.comment__box textarea {
  height: 10rem;
  border-radius: 2rem;
  margin-bottom: 1rem;
  background-color: rgba(29, 19, 19, 0.5);
  color: #ccc;
  text-indent: 1rem;
  width: 94%;
}

.comment__box .btnbox {
  display: flex;
  gap: 1rem;
}

.comment__box h3 {
  font-size: 1.5rem;
}

.comment__box .comment__content {
  background-color: transparent;
  margin-top: -2rem;
  margin-left: 8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 70%;
  height: 5rem;
}

.comment__lists {
  margin-bottom: 2rem;
}

.comment__lists + user .user__image {
  width: 4rem;
  height: 4rem;
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
    flex-direction: row;
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

  .comment__box {
    right: -10%;
  }
}

@media (max-width: 480px) {
  .dashboard__feeds {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border: none;
    padding: 2rem 1rem;
    width: 36rem;
  }

  .post {
    padding-left: 0;
  }
  .post .image {
    width: 29rem;
    height: 20rem;
    margin-bottom: 1rem;
  }

  .post .reaction-box .left {
    margin-right: 3rem;
  }

  .post .reaction-box svg {
    margin-right: 0.5rem;
  }

  .post .reaction-box .right .icon {
    margin-right: 1rem;
  }

  .comment__box {
    right: -27%;
  }

  .comment__box textarea {
    width: 90%;
    height: 10rem;
  }
}

@media (max-width: 320px) {
  .dashboard__feeds {
    margin-left: -1rem;
    margin-right: 1rem;
    border: none;
    padding: 2rem 1rem;
    width: 30rem;
  }
  .comment__box {
    top: -5%;
    right: -19%;
    min-width: 32rem;
  }
}
</style>
