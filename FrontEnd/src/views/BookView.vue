<script>
import BooksTable from '../components/BooksTable.vue';
export default{
    name: "BooksTable",
    components: { BooksTable },
    data() {
        return {
            allBooks: []
        }
    },
    async created() {
        this.allBooks = await (await fetch('http://localhost:8080/Books')).json();
    }
}
</script>

<template>
    <main>
        <BooksTable :items=allBooks />
    </main>
</template>

<style scoped></style>