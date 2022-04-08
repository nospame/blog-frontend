<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;|
    <router-link to="/about">About</router-link>&nbsp;|
    <router-link to="/posts">Posts</router-link>&nbsp;|
    <router-link to="/signup">Sign Up</router-link>&nbsp;|
    <router-link to="/login">Log In</router-link>&nbsp;|
    <router-link to="/logout">Log Out</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #990099;
}
</style>
