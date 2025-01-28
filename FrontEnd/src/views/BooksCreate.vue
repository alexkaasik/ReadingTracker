<script>
import BookCreateTable from '../components/BooksCreateTable.vue';
export default{
    components: { BookCreateTable },
    
    data() {
        return {
            oneBook: {
                BookName: "",
                Gerne: [],
                ReleaseDate: "",
                Description: "",
                ReviewScore: null,
                HowManyPages: null,
            },
            newGenre: "",
        };
    },    
}
</script>

<template>
    <main>
        <BookCreateTable :item=oneBook />
    </main>
</template>

<style scoped></style>