import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: '图书管理',
    component: () => import('../components/Container.vue'),
    redirect: '/searchbook',
    meta :{title:'图书管理页面'},
    children: [
      {
      path: '/searchbook',
      name: '查询图书',
      component: () => import('../views/SearchBook.vue'),
      meta :{title:'查询图书页面'},
      },
      {
        path: '/addbook',
        name: '添加图书',
        component: () => import('../views/AddBook.vue'),
        meta :{title:'添加图书页面'},
      }
    ]
  },
  {
    path: '/nav',
    name: '修改',
    component: () => import('../components/Container.vue'),
    children: [
      {
        path: '/modification',
        name: '修改图书',
        component: () => import('../views/Modification.vue'),
        meta :{title:'修改图书页面'},
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
