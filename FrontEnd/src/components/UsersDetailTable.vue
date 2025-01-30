<script>
export default {
  name: "UsersDetail",
  props: {
    user: Object
  }
}
</script>

<template>
  <table class="table table-striped table-bordered">
    <tbody>
      <tr>
        <td>UserId</td>
        <td>{{ user.UserId }}</td>
      </tr>
      <tr>
        <td>First Name</td>
        <td>{{ user.FirstName }}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{{ user.LastName }}</td>
      </tr>
      <tr>
        <td>Username</td>
        <td>{{ user.UserName }}</td>
      </tr>
      <tr>
        <td>Ownership ID</td>
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
