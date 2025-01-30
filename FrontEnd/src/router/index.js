import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BookIndexPage from '../views/Book/Index.vue'
import BookDetailPage from '../views/Book/Detail.vue'
import BookCreatePage from '../views/Book/Create.vue'
import BookUpdatePage from '../views/Book/Update.vue'
import BookDeletePage from '../views/Book/Delete.vue'
import BookConfirmDelete from '../views/Book/ConfirmDeletion.vue'


import UsersView from "../views/UsersView.vue";
import UsersDetail from "../views/UsersDetail.vue";
import UsersCreate from "../views/UsersCreate.vue";
import UsersUpdate from "../views/UsersUpdate.vue";


import OwnershipView from "../views/OwnershipView.vue";
import OwnershipDetail from "../views/OwnershipDetail.vue";
import OwnershipCreate from "../views/OwnershipCreate.vue";
import OwnershipUpdate from "../views/OwnershipUpdate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/book',
      name: 'book index',
      component: BookIndexPage,
    },
    {
      path: '/book/detail/:BookId',
      name: "book detail",
      component: BookDetailPage,
    },
    {
      path: '/book/create',
      name: "book create",
      component: BookCreatePage,
    },
    {
      path: '/book/update/:BookId',
      name: "book update",
      component: BookUpdatePage,
    },
    {
      path: '/book/delete/:BookId',
      name: "book delete",
      component: BookDeletePage,
    },
    {
      path: '/book/delete/confirmation/:BookId',
      name: "book delete confirmation",
      component: BookConfirmDelete,
    },
    { path: "/users", name: "users", component: UsersView },
    { path: "/users/:id", name: "user detail", component: UsersDetail },
    { path: "/users/create", name: "create user", component: UsersCreate },
    { path: "/users/update/:id", name: "update user", component: UsersUpdate },

    
    { path: "/ownerships", name: "ownerships", component: OwnershipView },
    { path: "/ownerships/:id", name: "ownership detail", component: OwnershipDetail },
    { path: "/ownerships/create", name: "create ownership", component: OwnershipCreate },
    { path: "/ownerships/update/:id", name: "update ownership", component: OwnershipUpdate },
    ],
})

export default router;
