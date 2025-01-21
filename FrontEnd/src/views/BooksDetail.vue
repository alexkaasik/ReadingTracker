<script>
import BooksDetailTable from '../components/BooksDetailTable.vue';
export default{
    components: { BooksDetailTable },
    data() {
        return {
            oneBook: {}
        }
    },
    async created() {
        this.oneBook = await (await fetch(`http://localhost:8080/books/${this.route.id}`)).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BooksDetailTable :item=oneBook />
    </main>
</template>

<style scoped></style>