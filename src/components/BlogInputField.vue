<template>
  <article class="bloginput__box" v-if="props.togglePostInput && closeInput">
    <button
      type="button"
      class="btn"
      :class="[!inputContent ? ' cursor-not-allowed' : '']"
      :disabled="!inputContent"
      @click="handleSubmit"
    >
      Publish
    </button>
    <svg
      class="closeInput"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      v-if="props.togglePostInput && closeInput"
      v-show="closeInput"
      @click="handlePostInput"
    >
      <path
        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
      />
    </svg>
    <div class="inner__container">
      <div class="icons__box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          v-if="!upload"
          @click="handleFileUpload"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          v-if="upload || uploadImage"
          @click="handleFileUpload"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
      <div class="box" v-if="upload">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          @click="fileInput?.click()"
          v-if="!uploadImage"
        >
          <path
            d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
          />
        </svg>
        <input
          type="file"
          class="hidden"
          ref="fileInput"
          @change="handleFileChange"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          @click="fileInput?.click()"
          v-if="!uploadImage"
        >
          <path
            d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
          />
        </svg>
        <input
          type="file"
          class="hidden"
          ref="fileInput"
          @change="handleFileChange"
        />
      </div>
      <div class="imgbox" v-if="!upload">
        <img :src="photoImage" alt=".." />
      </div>

      <div class="inputbox" v-if="!upload">
        <input type="text" placeholder="Title" class="blog__title" />
        <input
          type="text"
          placeholder="click here to write..."
          class="blog__post"
          @click="handleInputcontent"
        />
      </div>
      <input
        v-if="photoImage"
        type="text"
        placeholder="Title"
        v-model="post.postTitle"
        class="otherblog__posttitle"
      />
      <input
        v-if="photoImage"
        style="width: 100%;, font-size: 1.2rem;"
        type="text"
        placeholder="click here to write..."
        class="otherblog__post"
        @click="handleInputcontent"
      />
    </div>

    <div class="blog__content" v-if="inputContent">
      <VMarkdownEditor
       
        v-model="post.content"
        locale="en"
        :upload-action="handleUpload"
        class="markdown"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
// @ts-ignore
import { VMarkdownEditor } from "vue3-markdown";
import "vue3-markdown/dist/style.css";
import { toast } from "vue3-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { db } from "../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import useFileUpload from "../composables/fileUpload";

const emit = defineEmits(["addNewPost", "removeBlogInputField"]);

let props = defineProps({
  togglePostInput: Boolean,
});

let closeInput = ref(true);

const { uploadFile } = useFileUpload();

const fileInput = ref<HTMLInputElement | null>();

let upload = ref(false);
let uploadImage = ref(false);
const inputContent = ref(false);
let photoImage = ref("");
// let togglePostInput = ref(false);

const userProfile: any = reactive({})

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    userProfile.userId = user.uid
    userProfile.displayName = user.displayName
    userProfile.photoURL = user.photoURL
    console.log(userProfile)
  } else {
    console.log("User is signed out");
  }
});


const post = reactive({
  postTitle: "",
  content: "",
  photoImage: photoImage,
  userId: userProfile.userId ,
});


const updatePost = () => {
  emit("addNewPost", post.postTitle);
};

const handleFileUpload = () => {
  return (upload.value = !upload.value);
};
const handleInputcontent = () => {
  return (inputContent.value = !inputContent.value);
};

const handlePostInput = () => {
  emit("removeBlogInputField", closeInput);
  !props.togglePostInput;
  return (closeInput.value = !closeInput.value);
};

const handleUpload = (file: string) => {
  console.log(file);
  return "https://i.postimg.cc/52qCzTVw/pngwing-com.png";
};

const handleFileChange = () => {
  // uploadImage.value = !uploadImage.value

  //   console.log((event.target as EventTarget).files);
  if (fileInput.value?.files) {
    uploadFile(fileInput.value?.files[0], {
      onDownloadUrl: (downloadUrl) => {
        console.log(downloadUrl);
        photoImage.value = downloadUrl;
      },
    });
  }
};

const createBlogPost = async (data: {
  userId: string;
  content: string;
  postTitle: string;
  photoImage: string;
  postDate: string;
  postFullName: string;
  postUserName: string;
  userPhotoURL: string;
}) => {
  try {
    await setDoc(doc(db, "blogpost", data.userId), { ...data });
    console.log(db);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const setCurrentDate = () => {

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);

  return formattedDate;
};




console.log(userProfile)


const handleSubmit = async () => {
  if (!post.postTitle || !post.photoImage || !post.content) {
    alert("please fill all the fields");
    return;
  }
  console.log("I am submitting...");

  await createBlogPost({
    userId: post.postTitle,
    postTitle: post.postTitle,
    content: post.content,
    photoImage: post.photoImage,
    postDate: setCurrentDate(),
    userPhotoURL: userProfile.photoURL,
    postUserName: userProfile.displayName,
    postFullName: userProfile.displayName ,
  });

  toast.success("Post Added Successfully");

  post.postTitle = "";
  post.content = "";
  post.photoImage = "";

  updatePost();

  !props.togglePostInput;
};

</script>

<style scoped>
.bloginput__box {
  height: 50rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}

.bloginput__box > svg {
  height: 3rem;
  width: 3rem;
  position: absolute;
  top: 17rem;
  left: 30%;
  cursor: pointer;
}

.inner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  margin-left: -19rem;
  position: relative;
}

.bloginput__box button {
  align-self: flex-end;
  margin: 2rem;
  width: 16rem;
}

.cursor-not-allowed {
  cursor: not-allowed;
}

.blog__title,
.blog__post,
.otherblog__post,
.otherblog__posttitle {
  height: 6rem;
  font-size: 2.2rem;
  padding-left: 1rem;
  width: 90%;
  background: rgba(255, 255, 255, 0.2);
  background: transparent;
  color: aliceblue;
  border: none;
}

.otherblog__post {
  position: absolute;
  top: 27rem;
  margin-left: 6rem;
}

.otherblog__posttitle {
  position: absolute;
  top: 22rem;
  margin-top: 1rem;
  padding-bottom: 2rem;
  margin-left: 6rem;
}
.hidden {
  display: none;
}

.imgbox {
  width: 50rem;
  height: 25rem;
  position: absolute;
  top: -3rem;
  left: 7rem;
  margin-bottom: 20rem;
}

.imgbox img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: #666;
}

.blog__title:first-child,
.otherblog__posttitle {
  font-weight: bold;
  font-size: 2.4rem;
}

.blog__content {
  height: 90%;
  width: 90%;
  margin-top: 10rem;
  margin-bottom: 4rem;
}

.bloginput__box .inputbox {
  display: flex;
  flex-direction: column;
  z-index: 11;
}

.icons__box {
  display: flex;
  gap: 1rem;
  border-right: 1px solid #ccc;
  padding-top: 4rem;
  padding-right: 2rem;
}

.box {
  display: flex;
  padding-top: 4rem;
}

.icons__box svg,
.box svg {
  height: 5rem;
  width: 5rem;
  color: #fff;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #e67e22;
  border-radius: 50%;
  cursor: pointer;
}

@media (max-width: 768px) {
  .inner__container {
    margin-left: 0rem;
  }

  .imgbox {
    width: 35rem;
    height: 22rem;
    top: -1rem;
  }

  .bloginput__box > svg {
    top: 16rem;
    left: 12%;
  }
}
</style>
