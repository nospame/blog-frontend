<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Welcome to Home View",
    };
  },
  created: function () { },
  methods: {},
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>