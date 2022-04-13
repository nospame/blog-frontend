<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Create a New Post",
      newPostParams: {
        title: '',
        body: '',
        image: ''
      },
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
          <p v-if="newPostParams.body.length <= 200" class="text-secondary">{{ 200 - newPostParams.body.length }}
            characters remaining</p>
          <p v-if="newPostParams.body.length > 200" class="text-danger">{{ newPostParams.body.length - 200 }}
            characters
            too long</p>
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" v-model="newPostParams.image" />
        </div>
        <input type="submit" value="Submit" class="btn btn-primary" />
      </form>
    </div>
  </div>
</template>

<style>
</style>