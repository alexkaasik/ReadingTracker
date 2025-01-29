<script>
export default {
  name: "UsersTable",
  props: {
    users: Array,
  },
};
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Ownership ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.UserId">
          <td>{{ user.FirstName }}</td>
          <td>{{ user.LastName }}</td>
          <td>{{ user.UserName }}</td>
          <td>{{ user.OwnerShipListID }}</td>
          <td>
            <router-link :to="'/users/' + user.UserId">Detail</router-link> |
            <router-link :to="'/users/update/' + user.UserId">Update</router-link> |
            <button @click="$emit('delete-user', user.UserId)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/users/create" class="create-btn">Create</router-link>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
a {
  color: #00c58e;
  text-decoration: none;
  margin-right: 10px;
}
.delete-btn {
  color: red;
  border: none;
  background: none;
  cursor: pointer;
}
.create-btn {
  display: block;
  margin-top: 10px;
  color: #00c58e;
  text-decoration: none;
}
</style>

