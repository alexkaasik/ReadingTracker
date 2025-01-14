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
                <tr v-for="item in items" :key="item">
                    
                    <td>{{ item.BookName }}</td>
                    <td>{{ item.Description }}</td>                    
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>