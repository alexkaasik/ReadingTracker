<script>
export default {
    props: {
        item: Object, // Holds origanal data
    },
    data() {
        return {
            NewGenre: "",
            EditedItem: {},
        };
    },
    watch: {
        item: {
            immediate: true,
            handler(NewItem) {
                this.initializeEditedItem(NewItem);
            },
        },
    },
    methods: {
        // Create a deep copy of the item to EditedItem
        initializeEditedItem() {
            this.EditedItem = JSON.parse(JSON.stringify(this.item));
        },
        async SubmitFormBook() {
            // Prepare the payload
            console.log(JSON.stringify(this.EditedItem))
            try {
                
                const response = await fetch("http://localhost:8080/books/" + this.item.BookId, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.EditedItem),
                });
                if (response.ok) {
                    // Navigate to the books page after successful submission
                    this.$router.push("/book");
                } else {
                    console.error("Failed to submit form:", await response.text());
                }
            } catch (error) {
                console.error("Error during form submission:", error);
            }
        },
        ClearForm() {
            this.initializeEditedItem();
            this.NewGenre = "";
        },
        AddGenre() {
            if (this.NewGenre.trim() !== "") {
                this.EditedItem.Gerne.push(this.NewGenre.trim());
                this.NewGenre = "";
            }
        },
        RemoveGenre(index) {
            this.EditedItem.Gerne.splice(index, 1);
        },
    },
};
</script>

<template>
    <div>
        <form @submit.prevent="SubmitFormBook">
            <table class="table table-striped table-bordered">
                <tr>
                    <td>Id</td>
                    <td>{{ item.BookId }}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input
                            type="text"
                            v-model="EditedItem.BookName"
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
                                <li v-for="(genre, index) in EditedItem.Gerne" :key="index">
                                    {{ genre }}
                                    <button type="button" @click="RemoveGenre(index)">Remove</button>
                                </li>
                            </ul>
                            <input
                                type="text"
                                v-model="NewGenre"
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
                            v-model="EditedItem.ReleaseDate"
                            placeholder="Select release date"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>
                        <textarea
                            v-model="EditedItem.Description"
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
                            v-model="EditedItem.ReviewScore"
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
                            v-model="EditedItem.HowManyPages"
                            placeholder="Enter number of pages"
                            required
                        />
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <button type="submit">Submit</button>
                        <button type="button" @click="ClearForm">Reset</button>
                        <a href="/book">Back</a>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<style scoped>

</style>
