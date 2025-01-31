<script>
export default {
  name: "UsersDetail",
  data() {
    return {
      user: {},
    };
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:8080/users/${this.$route.params.id}`);
      this.user = await response.json();
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  }
};
</script>

<template>
  <div>
    <h2>User Details</h2>
    <table>
      <tr><td>ID:</td><td>{{ user.UserId }}</td></tr>
      <tr><td>First Name:</td><td>{{ user.FirstName }}</td></tr>
      <tr><td>Last Name:</td><td>{{ user.LastName }}</td></tr>
      <tr><td>Username:</td><td>{{ user.UserName }}</td></tr>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>
