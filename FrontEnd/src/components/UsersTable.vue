<script>
export default {
  name: "UsersTable",
  props: {
    users: Array
  }
}
</script>

<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>UserId</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Ownership ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.UserId">
        <td>{{ user.UserId }}</td>
        <td>{{ user.FirstName }}</td>
        <td>{{ user.LastName }}</td>
        <td>{{ user.UserName }}</td>
        <td>{{ user.OwnerShipListID }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
