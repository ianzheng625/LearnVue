export default [
  {
    path: '/index',
    component: resolve => require(['./Index.vue'], resolve),
    name: 'index',
    leaf: true//只有一个节点
  }
]