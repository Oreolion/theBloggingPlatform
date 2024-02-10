<template>
    <div>
      <h1>THIS IS THE DASHBOARD</h1>
    </div>
    <button @click="handleLogout">Log out</button>
  </template>
  
  <script setup lang="ts">
  import { getAuth, signOut } from "firebase/auth";
  import {useRouter} from "vue-router"
//   console.log(user);
  
  
  const router = useRouter()
  
  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      localStorage.clear();
      router.push("/login")
    } catch (error) {
      console.log(error);
    }
  };
  
  
  </script>
  
  <style scoped></style>
  