<script>
export default {
    name: "BooksTable",
    props: {
        items: Array
    }
}
</script>

<template>    
    <body>
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                <th>Books Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.BookId">
                    
                    <td>{{ item.BookId }}</td>
                    <td>{{ item.BookName }}</td>                    
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>