<template>
  <footer class="footer">
    <div class="inner-footer">
      <div class="logo link">
        <h3>THE <span>RA</span> BLOG</h3>
        <p>The <span>Read Along</span> Blog</p>
      </div>
      <div class="box1">
        <h5>Explore</h5>
        <ul>
          <li>Scissors 101</li>
          <li>Intergrations & API</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div class="box1">
        <h5>Support</h5>
        <ul>
          <li>Social Media</li>
          <li>Digital Marketing</li>
          <li>Customer Service</li>
          <li>For Developers</li>
        </ul>
      </div>
      <div class="box1">
        <h5>Official Blog</h5>
        <ul>
          <li>Link Management</li>
          <li>QR Codes</li>
          <li>Link-in-bio</li>
        </ul>
      </div>
    </div>
    <p class="p">Term of Service | Security | the RA Blog 2024</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  color: #e67e22;
  font-size: 2rem;
}

.logo h3 {
  line-height: 1;
  letter-spacing: 0.7;
  color: #e67e22;
}

.logo p {
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4px;
}

h3 span {
  color: green;
  background-color: #e67e22;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0.2rem;
  font-weight: bold;
}

.logo p {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem;
  padding-left: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  white-space: nowrap;
}

.logo p span {
  background: rgba(355, 355, 355, 0.3);
  font-weight: bold;
  border-radius: 0.4rem;
  padding: 0.2rem;
  font-size: 1.3rem;
}

footer {
  background: #bbb;
}

.inner-footer {
  display: flex;
  padding: 5rem 3%;
  flex-direction: row;
  gap: 15rem;
  margin-bottom: 2rem;
  color: #fff;
}

.footer h5 {
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.footer li {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  white-space: nowrap;
  font-family: "Gilroy-Regular", sans-serif;
  cursor: pointer;
  &:hover {
    color: #e67e22;
  }
}

footer .p {
  text-align: end;
  margin-right: 8rem;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: green;
}

@media (max-width: 768px) {
  .footer .logo {
    margin: 0 auto;
  }
  .inner-footer {
    flex-direction: column;
    gap: 6rem;
    justify-content: center;
    align-items: center;
  }

  .footer .p {
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .inner-footer {
    flex-direction: column;
    text-align: center;
  }
}
</style>
