<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()" class="row g-3">
      <h1>Signup</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div class="col-md-6">
        <label for="inputName" class="form-label">Name:</label>
        <input type="text" v-model="newUserParams.name" placeholder="John Doe" id="inputName" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="inputEmail" class="form-label">Email:</label>
        <input type="email" v-model="newUserParams.email" placeholder="email@example.com" id="inputEmail"
          class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="inputPassword" class="form-label">Password:</label>
        <input type="password" v-model="newUserParams.password" id="inputPassword" class="form-control" />
      </div>
      <div class="col-md-6">
        <label for="confirmPassword" class="form-label">Confirm Password:</label>
        <input type="password" v-model="newUserParams.password_confirmation" id="confirmPassword"
          class="form-control" />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </form>
  </div>
</template>