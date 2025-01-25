import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
<<<<<<< HEAD
import BookView from '../views/BookView.vue'
=======
import BookView from '../views/BooksView.vue'
import BookDetail from '../views/BooksDetail.vue'
>>>>>>> e70e96a5f48e898cc5b2d565d2b5c3583311754b

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
<<<<<<< HEAD
    }
    
=======
    },
    {
      path: '/books/:BookId',
      name: "book detail",
      component: BookDetail,
    },
>>>>>>> e70e96a5f48e898cc5b2d565d2b5c3583311754b
  ],
})

export default router
