<template>
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.UserId">
            <td>{{ user.UserId }}</td>
            <td>{{ user.FirstName }}</td>
            <td>{{ user.LastName }}</td>
            <td>{{ user.UserName }}</td>
            <td>
              <router-link :to="`/users/${user.UserId}`">Detail</router-link>
              <router-link :to="`/users/update/${user.UserId}`">Update</router-link>
              <button @click="deleteUser(user.UserId)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/users/create">Create</router-link>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        users: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        axios.get("http://localhost:8080/users")
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error("Error fetching users:", error);
          });
      },
      deleteUser(userId) {
        axios.delete(`http://localhost:8080/users/${userId}`)
          .then(() => {
            this.fetchUsers(); 
          })
          .catch(error => {
            console.error("Error deleting user:", error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 8px;
    border: 1px solid #ddd;
  }
  </style>
  

