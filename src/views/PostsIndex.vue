<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Blog Posts",
      posts: []
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get('/posts')
        .then(response => {
          console.log(response.data);
          this.posts = response.data;
        })
    }
  },
};
</script>

<template>
  <div class="posts-index">
    <h1>{{ message }}</h1>
    <div v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.image" />
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<style></style>