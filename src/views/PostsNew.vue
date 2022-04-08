<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Create a New Post",
      newPostParams: {},
      errors: []
    };
  },
  created: function () { },
  methods: {
    submit: function () {
      axios.post('/posts', this.newPostParams)
        .then(response => {
          console.log(response.data);
          this.$router.push('/posts');
        })
        .catch(
          errors => {
            console.log(errors.response.data.errors);
            this.errors = errors.response.data.errors;
          }
        )
    }
  },
};
</script>

<template>
  <div class="posts-new">
    <h1>{{ message }}</h1>
    <div class="posts-create">
      <form v-on:submit.prevent="submit()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label>
          <input type="text" v-model="newPostParams.title" />
        </div>
        <div>
          <label>Body:</label>
          <input type="text" v-model="newPostParams.body" />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" v-model="newPostParams.image" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<style></style>