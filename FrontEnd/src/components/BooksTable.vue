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
                    <th>Length</th>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    
                    <td>{{ item.BookName }}</td>
                    <td>{{ item.HowManyPages }} pages</td>                    
                    <td>
                        <a :href="'/books/' + item.BookId">Detail</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</template>

<style scoped>

</style>