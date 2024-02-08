<template>
  <div class="side-box">
    <div class="box">
      <h1>Discover More Interests</h1>
      <div class="aside-content">
        <ul>
          <li><a href="#">Travel</a> <span>42</span></li>
          <li><a href="#">Esoterics</a> <span>75</span></li>
          <li><a href="#">Technology</a> <span>22</span></li>
          <li><a href="#">Metaphysics</a> <span>17</span></li>
          <li><a href="#">fashion</a> <span>24</span></li>
          <li><a href="#">Philosophy</a> <span>45</span></li>
          <li><a href="#">science</a> <span>39</span></li>
          <li><a href="#">music</a> <span>59</span></li>
          <li><a href="#">Psychology</a> <span>12</span></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="side-box">
    <div class="box lastbox">
      <h1>popular tags</h1>
      <div class="aside-content">
        <ul class="tags">
          <li><a href="#">Metaphysics</a></li>
          <li><a href="#">science</a></li>
          <li><a href="#">biology</a></li>
          <li><a href="#">travel</a></li>
          <li><a href="#">Aliens</a></li>
          <li><a href="#">nature</a></li>
          <li><a href="#">Esoterics</a></li>
          <li><a href="#">Angels</a></li>
          <li><a href="#">Psychology</a></li>
          <li><a href="#">Philosophy</a></li>
        </ul>
      </div>
    </div>


  </div>


</template>

<script setup lang="ts"></script>

<style scoped>
.side-box {
    /* position: fixed; */

  text-align: center;
  border-radius: 1rem;
  background-color: #fff;
  margin-bottom: 2rem;
  min-width: 20rem;
  height: 40rem;
  /* max-width: 30rem; */
}



.sidebar .box {
  height: 40rem;
  border-radius: 1rem;
}

.sidebar .aside-content {
  padding: 3rem;
}

.side-box .box h1 {
  font-size: 2.5rem;
  color: #000;
  margin: 0 2rem;
  font-weight: 500;
  padding: 1rem;
}

/* .sidebar h3 {
  font-size: 2.3rem;
  font-weight: 500;
  color: var(--light);
  margin-bottom: 0.3rem;
} */

/* .sidebar img {
  width: 15rem;
  height: 14rem;
  border-radius: 50%;
  margin-bottom: 0.3rem;
  object-fit: cove;
} */

.sidebar p {
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 2rem;
}
.side-box .lastbox {
  height: 32rem;
  display: flex;
  flex-direction: column;
}
.side-box .aside-content {
  padding: 1rem;
}

.side-box .aside-content ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

.side-box .aside-content li {
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 1.5rem;
  padding: 0 2rem;
}

.side-box .aside-content a {
  color: #666;
}
.side-box li:hover,
.side-box .aside-content a:hover {
  color: #000;
}

.side-box .aside-content .tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2rem;
}

.side-box .tags li {
  color: #666;
  padding: 1rem;
  border-radius: 1rem;
}

.side-box .tags li:hover,
.side-box .tags a:hover {
  background-color: green;
  color: #fff;
}
</style>
