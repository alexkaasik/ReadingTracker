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
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item">
                    
                    <td>{{ item.BookName }}</td>
                    <td>{{ item.Description }}</td>
                    <td>
                        <div v-for="Gerne in item.Gerne" :key="Gerne">{{ Gerne }},</div>
                    </td>
                    <td>{{ item.ReleaseDate  }}</td>
                    <td>{{ item.ReviewScore }}</td>
                    <td>{{ item.HowManyPages }} pages</td>                    
                </tr>
            </tbody>
            
        </table>
    </body>
</template>

<style scoped>
</style>