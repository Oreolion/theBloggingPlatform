<template>
  <article class="bloginput__box">
    <button type="button">Publish</button>
    <div class="inner__container">
      <div class="icons__box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>

        <div class="box" v-if="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
            />
          </svg>
          <input type="image" class="hidden" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
            />
          </svg>
          <input type="file" class="hidden" />
        </div>
      </div>

      <div class="inputbox">
        <input type="text" placeholder="Title" class="blog__title" />
        <input
          type="text"
          placeholder="Write a Post....."
          class="blog__title"
        />
      </div>
    </div>

    <input type="file">

    <div class="blog__content" v-if="false">
      <VMarkdownEditor
        style="background-color: transparent"
        v-model="content"
        locale="en"
        :upload-action="handleUpload"
        class="markdown"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VMarkdownEditor } from "vue3-markdown";
import "vue3-markdown/dist/style.css";

const content = ref("");
const handleUpload = (file: string) => {
  console.log(file);
  return "https://i.postimg.cc/52qCzTVw/pngwing-com.png";
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

.inner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  margin-left: -19rem;
}

.bloginput__box button {
  align-self: flex-end;
  margin: 2rem;
  width: 16rem;
}

.blog__title {
  height: 6rem;
  font-size: 2.2rem;
  padding-left: 1rem;
  width: 90%;
  background: rgba(255, 255, 255, 0.2);
  background: transparent;
  color: aliceblue;
  border: none;
}

.hidden {
  display: none;
}

.blog__title:first-child {
  font-weight: bold;
  font-size: 2.4rem;
}

.blog__content {
  height: 90%;
  width: 90%;
  margin-bottom: 4rem;
}

.bloginput__box .inputbox {
  display: flex;
  flex-direction: column;
}

.icons__box {
  display: flex;
  gap: 1rem;
  border-right: 1px solid #ccc;
  padding-top: 4rem;
  padding-right: 2rem;
}

.icons__box .box {
  display: flex;
  border-left: 1px solid #ccc;
}

.icons__box svg {
  height: 5rem;
  width: 5rem;
  color: #fff;
  margin: 1rem;
  border: 1px solid #e67e22;
  padding: 1rem;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .inner__container {
    margin-left: 0rem;
  }
}
</style>
