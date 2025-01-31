<template>
  <div>
    <h1>Detail Ownership</h1>
    <table class="table table-striped table-bordered">
      <tr>
        <td>Book:</td>
        <td>{{ownership.BookId}}</td>
      </tr>
        <td>User:</td>
        <td>{{ownership.UserId}}</td>
      <tr>
        <td>Status:</td>
        <td>{{ownership.Status}}</td>
      </tr>
    </table>
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
      },
      users: {},
      books: {}

    };
  },
  async created()
    {
      this.fetchOwnership();
      this.books = await (await fetch("http://localhost:8080/booknames")).json();
      this.users = await (await fetch("http://localhost:8080/usernames")).json();
    },
  methods: {
    fetchOwnership()
    {
      const ownerId = this.$route.params.id;
      axios.get(`http://localhost:8080/ownerships/${ownerId}`)
        .then(response => {
          this.ownership = response.data;
        })
        .catch(error => {
          console.error("Error fetching ownership details:", error);
        });
    },
  }
};
</script>
