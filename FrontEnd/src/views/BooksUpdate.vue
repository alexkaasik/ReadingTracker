<script>
import BooksUpdateTable from '../components/BooksUpdateTable.vue';
export default{
    components: { BooksUpdateTable },
    data() {
        return {
            oneBook: {}
        }
    },
    async created() {

        this.oneBook = await (await fetch(`http://localhost:8080/books/${this.$route.params.BookId}`)).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BooksUpdateTable :item=oneBook />
    </main>
</template>

<style scoped></style>