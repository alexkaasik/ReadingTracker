<script>
import BookDetail from '../../components/Book/Detail.vue';
export default{
    components: { BookDetail },
    data() {
        return {
            BookDetailData: {}
        }
    },
    async created() {

        this.BookDetailData = await (await fetch(`http://localhost:8080/books/${this.$route.params.BookId}`)).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BookDetail :item=BookDetailData />
    </main>
</template>

<style scoped></style>