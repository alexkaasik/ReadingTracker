<script>
export default {
  data() {
    return { ownership: { BookId: "", UserId: "", Status: "" }, errorMessage: "" };
  },
  methods: {
    async createOwnership() {
      if (!this.ownership.BookId || !this.ownership.UserId || !this.ownership.Status) {
        this.errorMessage = "All fields are required!";
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/ownerships", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.ownership),
        });

        if (!response.ok) throw new Error("Failed to create ownership");
        this.$router.push("/ownerships");
      } catch (error) {
        this.errorMessage = "Error: " + error.message;
      }
    },
  },
};
</script>

<template>
  <div>
    <h2>Create Ownership</h2>
    <form @submit.prevent="createOwnership">
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <label>Book ID:</label>
      <input v-model="ownership.BookId" type="number" required />

      <label>User ID:</label>
      <input v-model="ownership.UserId" type="number" required />

      <label>Status:</label>
      <br>
      <select v-model="ownership.Status" required>
        <option value="">--Please choose an option--</option>
        <option value="Borrowed">Borrowed</option>
        <option value="Owned">Owned</option>
      </select>
      
      <br>

      <button type="submit">Create</button>
    </form>
  </div>
</template>
