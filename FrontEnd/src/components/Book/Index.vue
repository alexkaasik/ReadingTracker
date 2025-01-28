<script>
export default {
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
                        <a :href="'/book/detail/' + item.BookId">Detail</a>
                        <a :href="'/book/update/' + item.BookId">Update</a>
                        <a :href="'/book/delete/' + item.BookId">Delete</a>
                    </td>
                </tr>
                <a :href="'/book/create'">Create</a>
            </tbody>
        </table>
    </body>
</template>

<style scoped>
</style>