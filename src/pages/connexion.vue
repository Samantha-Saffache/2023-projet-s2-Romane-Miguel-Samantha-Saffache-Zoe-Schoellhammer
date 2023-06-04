<script setup lang="ts">
import PocketBase from 'pocketbase'
var pocketbase_ip=''
  if(import.meta.env.MODE === 'http://45.155.169.123:80')
      pocketbase_ip='http://45.155.169.123:80'
  else
      pocketbase_ip='http://127.0.0.1:8090' 
  alert (pocketbase_ip)   
  
  // connexion entre l'application et le serveur pocketbase
  const pb = new PocketBase(pocketbase_ip)
  export default {
    methods: {
      //this method allows a new user to sign up the system. Once done, the user receives an email
      //asking for account validation. Once the validation made the user is added to the system
      async login() {
          await pb.collection('users').authWithPassword(document.getElementById("login").value,
          document.getElementById("passwd").value);
      },
      //this method allows the already registred user to log in the system.
      async register() {
        await pb.collection('users').create({
          email: document.getElementById("login").value,
          password: document.getElementById("passwd").value,
          passwordConfirm: document.getElementById("passwd").value,
          name: document.getElementById("name").value,
        });
      }
      
    }
  }
</script>


<template>

      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  
      <div>
        <label width="50px">Login    : </label><input type="email" id="login">
        <p></p>
        <label width="50px">Password : </label><input type="password" id="passwd">
        <p></p>
        <label width="50px">Name : </label><input type="text" id="name">
        <p></p>
        <hr>
        <button v-on:click="register()">Register</button>
        <button v-on:click="login()">Login</button><p></p>
      </div>
    
  
    <main>
      <!-- <TheWelcome /> -->
    </main>
  </template>
  
