<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Owner ID</th>
          <th>Book ID</th>
          <th>User ID</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ownership in ownerships" :key="ownership.OwnerId">
          <td>{{ ownership.OwnerId }}</td>
          <td>{{ ownership.BookId }}</td>
          <td>{{ ownership.UserId }}</td>
          <td>{{ ownership.Status }}</td>
          <td>
            <router-link :to="'/ownerships/' + ownership.OwnerId">Detail</router-link> |
            <router-link :to="'/ownerships/update/' + ownership.OwnerId">Update</router-link> |
            <button @click="$emit('delete-ownership', ownership.OwnerId)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/ownerships/create" class="create-btn">Create</router-link>
  </div>
</template>
