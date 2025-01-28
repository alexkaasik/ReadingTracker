<script>
import BookDeleteTable from '../components/BooksDeleteTable.vue';
export default{
    components: { BookDeleteTable },
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
        <BookDeleteTable :item=oneBook />
    </main>
</template>

<style scoped></style>