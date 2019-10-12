export default [
  {
    path: '/',
    component: resolve => require(['./Login.vue'], resolve),
    props: { name: 'next' },
    name:'login',
    hidden: true
  }
]