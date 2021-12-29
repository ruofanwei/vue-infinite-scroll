export default [
  {
    component: () => import('./pages/HomePage.vue'),
    name: 'home',
    path: '/',
  },
  {
    component: () => import('./pages/AboutPage.vue'),
    name: 'about',
    path: '/about',
  },
]
