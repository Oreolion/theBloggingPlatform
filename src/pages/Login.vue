<template>
    <section class="section">
      <div class="left__box">
        <h1>WELCOME TO READ ALONG...</h1>
        <p>
          Unleash the Power of Words, Connect with Like-minded Readers and
          Writers...
        </p>
      </div>
      <div class="right__box">
        <div class="signup__form">
          <form action="">
            <div class="navigatepagebtn-box">
              <button>REGISTER</button>
              <button>LOGIN</button>
            </div>
            <h1 class="form__header">Welcome Back</h1>
            <div class="inner__form">
             
           
  
              <label for="email">
                Email address: <br />
                <input type="email" />
              </label>
              <label for="password">
                Password: <br />
                <input type="password" />
              </label>
              
              <div class="btn-box">
                <button>Login account</button>
                <button>Sign in with google</button>
                <button>Sign in with LinkedIn</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  .section {
    display: flex;
    padding: 0;
  }
  
  .left__box {
    flex: 1 1 40%;
    background: url("../assets/images/windows-YzLMmxDTrvI-unsplash.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-left: -4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .left__box h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
    padding-top: 5rem;
  }
  
  .left__box p {
    font-size: 2rem;
    margin-left: 3rem;
    font-weight: bold;
    color: #e67e22;
    align-self: flex-start;
  }
  .right__box {
    flex: 1 1 60%;
    padding: 2rem;
    padding-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
    color: #fff;
  }

  .right__box form {
    width: 40rem;
    height: 100vh;
  }
  
  .right__box h1 {
    font-size: 2.2rem;
    text-align: center;
  }
  .right__box .navigatepagebtn-box {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  
  .right__box .navigatepagebtn-box button {
    background-color: #ddd;
    border-bottom: 1rem solid green;
    border-radius: 3px;
    width: 40%;
    height: 3rem;
  }
  .form__header {
    margin-bottom: 2rem;
  }
  
  .inner__form {
    display: flex;
    flex-direction: column;
  }
 
  
  br {
    margin-bottom: 0.5rem;
  }
  
 
  .inner__form label {
    margin-bottom: 1rem;
    margin-right: 2rem;
    font-size: 1.5rem;
  }
  
 
  
  .inner__form label input {
    height: 4rem;
    width: 100%;
    padding: 0 1rem;
  }
  
  .btn-box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 4rem;
  }
  
  .btn-box button {
    background: #777;
    width: 98%;
  }
  
  @media (max-width: 640px) {
    .left__box {
      display: none;
    }
  }

    
  @media (max-width: 480px) {
    .right__box h1 {
    font-size: 2.2rem;
    text-align: center;
    padding-right: 13rem;
  }
  .right__box .navigatepagebtn-box {
   padding-right: 13rem;
  }
   
  .btn-box { 
    align-items: center;
    justify-content: center;
    padding-right: 10rem;
  }
  .btn-box button {
    width: 80%;
  }
  
  }

  @media (min-width: 320px) and (max-width: 460px) {
    
  }
  </style>
  