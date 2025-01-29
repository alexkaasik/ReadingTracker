<script>
export default {
  data() {
    return {
      newUser: {
        FirstName: "",
        LastName: "",
        UserName: "",
        Password: "",
        OwnerShipListID: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    async createUser() {
      if (!this.newUser.FirstName || !this.newUser.LastName || !this.newUser.UserName || !this.newUser.Password) {
        this.errorMessage = "All fields are required!";
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.newUser),
        });

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        this.$router.push("/users"); 
      } catch (error) {
        this.errorMessage = "Error: " + error.message;
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Create New User</h2>
    <form @submit.prevent="createUser">
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <label>First Name:</label>
      <input v-model="newUser.FirstName" type="text" required />

      <label>Last Name:</label>
      <input v-model="newUser.LastName" type="text" required />

      <label>Username:</label>
      <input v-model="newUser.UserName" type="text" required />

      <label>Password:</label>
      <input v-model="newUser.Password" type="password" required />

      <label>Ownership ID:</label>
      <input v-model="newUser.OwnerShipListID" type="number" required />

      <button type="submit">Create</button>
    </form>
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
