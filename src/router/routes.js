
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/Login/Login.vue'),
        props: true
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
