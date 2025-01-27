<script>
//import BooksConfirmDelete from '../components/BooksDelete.vue';
export default{
    //components: { BooksConfirmDelete },
    data() {
        return {
            oneBook: {}
        }
    },
    async created() {
        const confirmation = confirm("Are you sure you want to delete this book?")
        if (!confirmation) return;

        try {
            await fetch(`http://localhost:8080/books/${this.$route.params.BookId}`, {method: 'DELETE'});
            
            alert("Book deleted successfully.");
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Failed to delete the book. Please try again.");
        }

        this.$router.push('/books')
        //console.log("called from gamesview");  // for debugging purposes
    }
}
</script>