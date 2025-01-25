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
<<<<<<< HEAD
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
            
=======
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
>>>>>>> e70e96a5f48e898cc5b2d565d2b5c3583311754b
        </table>
    </body>
</template>

<style scoped>
<<<<<<< HEAD
=======

>>>>>>> e70e96a5f48e898cc5b2d565d2b5c3583311754b
</style>