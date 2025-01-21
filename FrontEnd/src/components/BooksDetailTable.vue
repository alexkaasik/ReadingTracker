<script>
export default {
    name: "BooksDetail",
    props: {
        item: {}
    }
}
</script>

<template>    
    <body>
        <table class="table table-striped table-bordered">
            <tr>
                <td>Id</td>
                <td>{{ item.BookId }}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{{ item.BookName }}</td>
            </tr>
            <tr>
                <td>Gerne</td>
                <td>{{ item.Gerne }}</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>{{ item.Description }}</td>
            </tr>
            <tr>
                <td>Review Score</td>
                <td>{{ item.BookId }}</td>
            </tr>
            <tr>
                <td>Lenght</td>
                <td>{{ item.HowManyPages }}</td>
            </tr>
        </table>
    </body>
</template>

<style scoped>
</style>