<template>
  <div>
    <h1>Ownership List</h1>
    <table class="table">
      <thead>
        <tr>
          <th>OwnerId</th>
          <th>BookId</th>
          <th>UserId</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ownership in ownerships" :key="ownership.OwnerId">
          <td>{{ ownership.OwnerId }}</td>
          <td>{{ ownership.BookId }}</td>
          <td>{{ ownership.UserId }}</td>
          <td>{{ ownership.Status }}</td>
          <td>
            <router-link :to="`/ownerships/${ownership.OwnerId}`">Detail</router-link> |
            <router-link :to="`/ownerships/update/${ownership.OwnerId}`">Update</router-link> |
            <button @click="deleteOwnership(ownership.OwnerId)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/ownerships/create">Create New Ownership</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ownerships: []
    };
  },
  created() {
    this.fetchOwnerships();
    this.fetchBooks();
    this.fetchUsers();

  },
  methods: {
    fetchOwnerships() {
      axios.get("http://localhost:8080/ownerships")
        .then(response => {
          this.ownerships = response.data;
        })
        .catch(error => {
          console.error("Error fetching ownerships:", error);
        });
    },
    fetchBooks() {
      axios.get("http://localhost:8080/booknames")
        .then(response => {
          this.books = response.data;
        })
        .catch(error => {
          console.error("Error fetching books:", error);
        });
    },
    fetchUsers() {
      axios.get("http://localhost:8080/usernames")
        .then(response => {
          this.user = response.data;
        })
        .catch(error => {
          console.error("Error fetching user:", error);
        });
    },
    deleteOwnership(ownerId) {
      axios.delete(`http://localhost:8080/ownerships/${ownerId}`)
        .then(() => {
          this.ownerships = this.ownerships.filter(o => o.OwnerId !== ownerId);
        })
        .catch(error => {
          console.error("Error deleting ownership:", error);
        });
    }
  }
};
</script>
