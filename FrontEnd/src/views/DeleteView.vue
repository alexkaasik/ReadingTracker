<script>
import BooksTable from '../components/BooksTable.vue';
export default{
    components: { BooksTable },
    data() {
        return {
            allBooks: []
        }
    },
    async delete() {
        this.allBooks = await (await fetch('http://localhost:8080/books')).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style scoped></style>