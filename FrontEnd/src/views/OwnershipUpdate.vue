<template>
  <div>
    <h1>Update Ownership</h1>
    <form @submit.prevent="updateOwnership">
      <label>BookId:</label>
      <input v-model="ownership.BookId" required />

      <label>UserId:</label>
      <input v-model="ownership.UserId" required />

      <label>Status:</label>
      <input v-model="ownership.Status" required />

      <button type="submit">Update</button>
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
  created() {
    this.fetchOwnership();
  },
  methods: {
    fetchOwnership() {
      const ownerId = this.$route.params.id;
      axios.get(`http://localhost:8080/ownerships/${ownerId}`)
        .then(response => {
          this.ownership = response.data;
        })
        .catch(error => {
          console.error("Error fetching ownership details:", error);
        });
    },
    updateOwnership() {
      const ownerId = this.$route.params.id;
      axios.put(`http://localhost:8080/ownerships/${ownerId}`, this.ownership)
        .then(() => {
          this.$router.push("/ownerships");
        })
        .catch(error => {
          console.error("Error updating ownership:", error);
        });
    }
  }
};
</script>

<style scoped>

</style>
