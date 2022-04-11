<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "This the post",
      post: {}
    };
  },
  created: function () {
    this.showPost();
  },
  methods: {
    showPost: function () {
      axios.get(`/posts/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data);
          this.post = response.data;
        })
    },
    destroyPost: function () {
      axios.delete(`/posts/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data);
          this.$router.push('/posts')
        })
    }
  },
};
</script>

<template>
  <div class="posts-show">
    <h1>{{ post.title }}</h1>
    <img v-bind:src="post.image" />
    <p>{{ post.body }}</p>
    <p>
      <router-link v-bind:to="`/posts/${$route.params.id}/edit`">Edit Post</router-link>&nbsp;|
      <router-link to="/posts">All Posts</router-link>
    </p>
    <p>
      <button v-on:click="destroyPost()">Delete Post</button>
    </p>
  </div>
</template>

<style></style>