<template>
  <section>
    <div class="post__box">
      <div class="header">
        <h1>Why You Should Join Read Along</h1>
        <p>
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
      </div>
      <div class="posts">
        <article class="post">
          <div class="svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"
              />
            </svg>
          </div>

          <div>
            <h2>Analytics</h2>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>
        </article>

        <article class="post">
          <div>
            <div class="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                />
              </svg>
            </div>

            <h2>Social Interactions</h2>
            <p>
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>
        </article>

        <article class="post">
          <div>
            <div class="svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                />
              </svg>
            </div>

            <h2>Content Creation</h2>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
section {
  margin-bottom: 12rem;
  padding-bottom: 12rem;
}
.post__box {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 4rem;
}

.post__box .header {
  margin: 0 auto;
}

.post__box .header h1 {
  text-align: center;
  color: #ccc;
  font-size: 3rem;
  margin-bottom: 2rem;
}
.post__box .header p {
  max-width: 89rem;
  font-size: 2rem;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  align-items: center;
  justify-content: center;
}

.post__box .post {
  flex: 1 1 20rem;
  max-width: 28rem;
  background: rgba(2, 1, 1, 0.3);
  box-shadow: 6px 4px 4px rgba(250, 250, 220, 0.2);
  height: 38rem;
  border-radius: 1rem;
  padding: 3rem;
}

.post__box h2 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ccc;
}

.post__box p {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #ccc;
  max-width: 20rem;
}

.post__box .post .svg {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: rgba(250, 250, 220, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.post__box .post svg {
  width: 4rem;
  height: 4rem;
  fill: #e67e22;
}

@media (max-width: 480px) {
  section {
    margin-bottom: 8rem;
    padding-bottom: 0;
  }

  .posts {
    gap: 4rem;
  }
}
</style>
