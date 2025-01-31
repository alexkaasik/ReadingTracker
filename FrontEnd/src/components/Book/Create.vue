<script>
export default {
    props: {
        item: {}
    },
    methods: {
        async SubmitFormBook() {
            //console.log("Form submitted", this.item);
            await fetch("http://localhost:8080/books", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.item),
            });
            this.$router.push('/book')
        },
        ClearForm() {
            this.item = {
                BookName: "",
                Gerne: [],
                ReleaseDate: "", 
                Description: "",
                ReviewScore: null,
                HowManyPages: null,
            };
            this.newGenre = "";
        },
        AddGenre() {
            if (this.newGenre.trim() !== "") {
                this.item.Gerne.push(this.newGenre.trim());
                this.newGenre = "";
            }
        },
        RemoveGenre(index) {
            this.item.Gerne.splice(index, 1);
        },
    }
};
</script>

<template>
    <div>
        <form @submit.prevent="SubmitFormBook">
            <table class="table table-striped table-bordered">
                <tr>
                    <td>Name</td>
                    <td>
                        <input 
                            type="text" 
                            v-model="item.BookName" 
                            placeholder="Enter book name" 
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>Genre</td>
                    <td>
                        <div>
                            <ul>
                                <li v-for="(genre, index) in item.Gerne" :key="index">
                                    {{ genre }} <button type="button" @click="RemoveGenre(index)">Remove</button>
                                </li>
                            </ul>
                            <input 
                                type="text" 
                                v-model="newGenre" 
                                placeholder="Enter a genre" 
                            />
                            <button type="button" @click="AddGenre">Add</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Release Date</td>
                    <td>
                        <input 
                            type="date" 
                            v-model="item.ReleaseDate" 
                            placeholder="Select release date" 
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        <textarea 
                            v-model="item.Description" 
                            placeholder="Enter book description" 
                            required
                        ></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Review Score</td>
                    <td>
                        <input 
                            type="number" 
                            v-model="item.ReviewScore" 
                            placeholder="Enter review score" 
                            min="0" 
                            max="10" 
                            step="0.1"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>Length</td>
                    <td>
                        <input 
                            type="number" 
                            v-model="item.HowManyPages" 
                            placeholder="Enter number of pages" 
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <button type="submit" class="button success" >Submit</button>
                        <button type="button" @click="ClearForm" class="button primary" >Reset</button>
                        <a href="/book" class="button primary" >Back</a>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<style scoped>
button {
    border-radius: 8px;
}
</style>

