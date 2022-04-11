<script>
import axios from 'axios'
export default {
  data: function () {
    return {
      message: "Edit the Post",
      editPostParams: {
      },
      errors: []
    };
  },
  created: function () {
    this.showPost();
  },
  methods: {
    submit: function () {
      axios.patch(`/posts/${this.$route.params.id}`, this.editPostParams)
        .then(response => {
          console.log(response.data);
          this.$router.push(`/posts/${this.$route.params.id}`);
        })
        .catch(
          errors => {
            console.log(errors.response.data.errors);
            this.errors = errors.response.data.errors;
          }
        )
    },
    showPost: function () {
      axios.get(`/posts/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data);
          this.editPostParams = response.data;
        })
    }
  },
};
</script>

<template>
  <div class="posts-edit">
    <h1>{{ message }}</h1>
    <div class="posts-edit">
      <form v-on:submit.prevent="submit()">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Title:</label>
          <input type="text" v-model="editPostParams.title" />
        </div>
        <div>
          <label>Body:</label>
          <input type="text" v-model="editPostParams.body" />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" v-model="editPostParams.image" />
        </div>
        <input type="submit" value="Submit" />
        <p>
          <router-link v-bind:to="`/posts/${this.$route.params.id}`">Back to Post</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<style></style>