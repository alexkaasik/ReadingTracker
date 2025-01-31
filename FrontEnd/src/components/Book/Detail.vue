<script>
export default {
    props: {
        item: {}
    },
    methods: {
    ConvertArrayToString: function (ListOfGerne) {
        var Result= ""
        for (let index = 0; index < ListOfGerne.length; index++) {
            Result = Result + ", " + ListOfGerne[index];
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
                <td>{{ item.ReviewScore }}</td>
            </tr>
            <tr>
                <td>Lenght</td>
                <td>{{ item.HowManyPages }} pages</td>
            </tr>
            <tr>
                <br>    
                <a href="/book" class="button primary">Back</a>
            </tr>
        </table>  
    </body>
    
</template>

<style scoped>
</style>