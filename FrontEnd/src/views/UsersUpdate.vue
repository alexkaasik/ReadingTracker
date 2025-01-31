<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
      userData: {
        FirstName: "",
        LastName: "",
        UserName: "",
        Password: "",
      },
      errorMessage: "",
    };
  },
  async created() {
    try {
      const response = await fetch(`http://localhost:8080/users/${this.userId}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      this.userData = await response.json();
    } catch (error) {
      this.errorMessage = "Error: " + error.message;
    }
  },
  methods: {
    async updateUser() {
      if (!this.userData.FirstName || !this.userData.LastName || !this.userData.UserName || !this.userData.Password) {
        this.errorMessage = "All fields are required!";
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/users/${this.userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.userData),
        });

        if (!response.ok) {
          throw new Error("Failed to update user");
        }

        this.$router.push("/users"); // Перенаправление на список пользователей
      } catch (error) {
        this.errorMessage = "Error: " + error.message;
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Update User</h2>
    <form @submit.prevent="updateUser">
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <label>First Name:</label>
      <input v-model="userData.FirstName" type="text" required />

      <label>Last Name:</label>
      <input v-model="userData.LastName" type="text" required />

      <label>Username:</label>
      <input v-model="userData.UserName" type="text" required />

      <label>Password:</label>
      <input v-model="userData.Password" type="password" required />

      <button type="submit">Update</button>
    </form>
    <br>  
    <a href="/users" class="button primary">Back</a>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
button {
  margin-top: 10px;
  background-color: #00c58e;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
