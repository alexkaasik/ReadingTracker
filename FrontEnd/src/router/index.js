import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BooksView.vue'
import BookDetail from '../views/BooksDetail.vue'
import UsersView from '../views/UsersView.vue'
import UserDetail from '../views/UsersDetail.vue'

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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/books',
      name: 'books',
      component: BookView,
    },
    {
      path: '/books/:id',
      name: "book detail",
      component: BookDetail,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/users/:id',
      name: 'user detail',
      component: UserDetail,
    },
  ],
})

export default router
