<script>
export default {
    name: "BooksDetail",
    props: {
        item: {}
    },
    methods: {
    ConvertArrayToString: function (List) {
        var Result= ""
        for (let index = 0; index < List.length; index++) {
            Result = Result + ", " + List[index];
        }
        
        return Result.slice(1).slice(1)
    }
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
                <td>
                    {{ ConvertArrayToString(item.Gerne) }}
                </td>
            </tr>
            <tr>
                <td>ReleaseDate</td>
                <td>{{ item.ReleaseDate }}</td>
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
                <td>{{ item.HowManyPages }} pages</td>
            </tr>
            <tr>
                <a href="/books">Back</a>
            </tr>
        </table>  
    </body>
    
</template>

<style scoped>
</style>