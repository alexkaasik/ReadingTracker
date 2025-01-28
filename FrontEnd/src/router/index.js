import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookView from '../views/BooksView.vue'
import BookDetail from '../views/BooksDetail.vue'
import BookCreate from '../views/BooksCreate.vue'
import BookUpdate from '../views/BooksUpdate.vue'
import BookDelete from '../views/BooksDelete.vue'
import BookConfirmDelete from '../views/BooksConfirmDelete.vue'

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
      path: '/books',
      name: 'books',
      component: BookView,
    },
    {
      path: '/books/:BookId',
      name: "book detail",
      component: BookDetail,
    },
    {
      path: '/books/create',
      name: "book create",
      component: BookCreate,
    },
    {
      path: '/books/update/:BookId',
      name: "book update",
      component: BookUpdate,
    },
    {
      path: '/books/delete/:BookId',
      name: "book delete",
      component: BookDelete,
    },
    {
      path: '/books/delete/confirmation/:BookId',
      name: "book delete confirmation",
      component: BookConfirmDelete,
    },
  ],
})

export default router