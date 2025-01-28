<script>
import BookUpdate from '../../components/Book/Update.vue';
export default{
    components: { BookUpdate },
    data() {
        return {
            BookUpdateData: {}
        }
    },
    async created() {

        this.BookUpdateData = await (await fetch(`http://localhost:8080/books/${this.$route.params.BookId}`)).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BookUpdate :item=BookUpdateData />
    </main>
</template>

<style scoped></style>