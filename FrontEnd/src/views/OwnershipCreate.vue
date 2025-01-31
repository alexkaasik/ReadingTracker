<script>
export default {
  data() {
    return { ownership: { BookId: "", UserId: "", Status: "" }, errorMessage: "" , books: {}, users: {} };
  },
  created(){
    
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
    async fetchBooks() {
             
      this.books = await (await fetch("http://localhost:8080/booknames")).json();
    },
    async fetchUsers() {
      this.users = await (await fetch("http://localhost:8080/usernames")).json();
    },
  },
};
</script>

<template>  
  <div>
    <h2>Create Ownership</h2>
    <form >
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <label>Book ID:</label>
      <br>
      <select v-model="ownership.BookId" required>
        <option value="">--Please choose an option--</option>
        <option v-for="book in books" :value=book.BookId>{{ book.BookName }}</option>
      </select>

      <label>User ID:</label>
      <br>
      <select v-model="ownership.UserId" required>
        <option value="">--Please choose an option--</option>
        <option v-for="user in users" :value=user.UserId>{{ user.UserName }}</option>
      </select>

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
