<script>
import UsersTable from "@/components/UsersTable.vue";

export default {
  components: { UsersTable },
  data() {
    return {
      users: [],
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:8080/users");
      this.users = await response.json();
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  },
  methods: {
    async deleteUser(userId) {
      try {
        await fetch(`http://localhost:8080/users/${userId}`, { method: "DELETE" });
        this.users = this.users.filter(user => user.UserId !== userId);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h2>Users List</h2>
    <UsersTable :users="users" @delete-user="deleteUser" />
  </div>
</template>

