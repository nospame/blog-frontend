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
    this.postShow();
  },
  methods: {
    postShow: function () {
      axios.get(`/posts/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data);
          this.post = response.data;
        })
    }
  },
};
</script>

<template>
  <div class="post-show">
    <h1>{{ post.title }}</h1>
    <img v-bind:src="post.image" />
    <p>{{ post.body }}</p>
    <p>
      <router-link v-bind:to="`/posts/${$route.params.id}/edit`">Edit Post</router-link>&nbsp;|
      <router-link to="/posts">All Posts</router-link>
    </p>
  </div>
</template>

<style></style>