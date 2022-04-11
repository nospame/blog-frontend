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
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="post.image" class="img-fluid rounded-start" v-bind:alt="post.title" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p class="card-text">{{ post.body }}</p>

            <router-link
              v-bind:to="`/posts/${$route.params.id}/edit`"
              class="btn btn-primary mx-1"
            >Edit Post</router-link>
            <router-link to="/posts" class="btn btn-primary mx-1">All Posts</router-link>
            <button v-on:click="destroyPost()" class="btn btn-danger mx-1">Delete Post</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>