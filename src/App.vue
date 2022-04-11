<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;|
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/posts">Posts</router-link>&nbsp;|
    <router-link to="/posts/new">New Post</router-link>&nbsp;|
    <router-link to="/signup">Sign Up</router-link>&nbsp;|
    <router-link to="/login">Log In</router-link>&nbsp;|
    <router-link to="/logout">Log Out</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
</style>
