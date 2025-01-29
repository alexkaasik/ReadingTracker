import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";



import UsersView from "../views/UsersView.vue";
import UsersDetail from "../views/UsersDetail.vue";
import UsersCreate from "../views/UsersCreate.vue";
import UsersUpdate from "../views/UsersUpdate.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },


  
  { path: "/users", name: "users", component: UsersView },
  { path: "/users/:id", name: "user detail", component: UsersDetail },
  { path: "/users/create", name: "create user", component: UsersCreate },
  { path: "/users/update/:id", name: "update user", component: UsersUpdate },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
