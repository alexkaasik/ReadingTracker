<template>
  <div>
    <h1>Create Ownership</h1>
    <form @submit.prevent="createOwnership">
      <label>BookId:</label>
      <input v-model="ownership.BookId" required />

      <label>UserId:</label>
      <input v-model="ownership.UserId" required />

      <label>Status:</label>
      <input v-model="ownership.Status" required />

      <button type="submit">Create</button>
    </form>
    <router-link to="/ownerships">Back to List</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ownership: {
        BookId: "",
        UserId: "",
        Status: ""
      }
    };
  },
  methods: {
    createOwnership() {
      axios.post("http://localhost:8080/ownerships", this.ownership)
        .then(() => {
          this.$router.push("/ownerships");
        })
        .catch(error => {
          console.error("Error creating ownership:", error);
        });
    }
  }
};
</script>
