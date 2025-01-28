<script>
import BookIndex from '../../components/Book/Index.vue';
export default{
    components: { BookIndex },
    data() {
        return {
            AllBooks: []
        }
    },
    async created() {
        this.AllBooks = await (await fetch('http://localhost:8080/books')).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BookIndex :items=AllBooks />
    </main>
</template>

<style scoped></style>