<script>
import BookDelete from '../../components/Book/Delete.vue';
export default{
    components: { BookDelete },
    data() {
        return {
            BookDeleteData: {}
        }
    },
    async created() {

        this.BookDeleteData = await (await fetch(`http://localhost:8080/books/${this.$route.params.BookId}`)).json();
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>

<template>
    <main>
        <BookDelete :item=BookDeleteData />
    </main>
</template>

<style scoped></style>