export default [
  {
    component: () => import('./pages/Home.vue'),
    name: 'Home',
    path: '/',
  },
  {
    component: () => import('./pages/Menu.vue'),
    name: 'Menu',
    path: '/menu',
  },
]