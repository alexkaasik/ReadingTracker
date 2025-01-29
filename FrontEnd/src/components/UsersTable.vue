<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Ownership ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.UserId">
          <td>{{ user.UserId }}</td>
          <td>{{ user.FirstName }}</td>
          <td>{{ user.LastName }}</td>
          <td>{{ user.UserName }}</td>
          <td>{{ user.OwnerShipListID }}</td>
          <td>
            <router-link :to="'/users/' + user.UserId">Detail</router-link> |
            <router-link :to="'/users/update/' + user.UserId">Update</router-link> |
            <button @click="$emit('delete-user', user.UserId)" class="delete-btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/users/create" class="create-btn">Create</router-link>
  </div>
</template>


