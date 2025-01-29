<script>
import UsersTable from "@/components/UsersTable.vue";

export default {
  components: { UsersTable },
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      const response = await fetch("http://localhost:8080/users");
      this.users = await response.json();
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  }
}
</script>

<template>
  <div>
    <h2>Users List</h2>
    <UsersTable :users="users" />
  </div>
</template>
