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
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
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
    <div class="row">
      <div class="col-6" v-for="post in posts">
        <div class="card mb-3">
          <img v-bind:src="post.image" class="card-img-top" alt="post.title">
          <div class="card-body">
            <h3>
              {{ post.title }}
            </h3>
            <p class="card-text">{{ post.body }}</p>
            <router-link v-bind:to="`/posts/${post.id}`" class="btn btn-primary">View Post</router-link>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<style>
.card-img-top {
  max-height: 300px;
  object-fit: cover;
}
</style>