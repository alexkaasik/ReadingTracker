<script>
import BookCreate from '../../components/Book/Create.vue';
export default{
    components: { BookCreate },
    
    data() {
        return {
            BookCreateData: {
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
        <BookCreate :item=BookCreateData />
    </main>
</template>

<style scoped></style>