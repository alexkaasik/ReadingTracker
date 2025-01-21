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
                    <th>Gerne</th>
                    <th>ReleaseDate </th>
                    <th>ReviewScore</th>
                    <th>Length</th>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    
                    <td>{{ item.BookName }}</td>
                    <td>{{ item.Description }}</td>
                    <td>
                        <template  v-for="(Gerne, index) in item.Gerne" :key="index">
                            <div v-if="index < item.Gerne.length-1">{{ Gerne }},</div>
                            <div v-else>{{ Gerne }}</div> 
                        </template >
                    </td>
                    <td>{{ item.ReleaseDate  }}</td>
                    <td>{{ item.ReviewScore }}</td>
                    <td>{{ item.HowManyPages }} pages</td>                    
                    <td><a :href="'/books/'+  item.BookId"></a></td>
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>