import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: resolve => require(['./components/Login.vue'], resolve),
    props: { name: 'next' },
    name:'login',
    hidden: true
  },{
    path: '/index',
    component: resolve => require(['./components/main/Index.vue'], resolve),
    name: 'index',
    leaf: true//只有一个节点
  },{
    path: '*',
    hidden: true,
    redirect: { path: '/login' }
  }
];

const router = new VueRouter({
  routes //缩写:相当于 routes: routes
});


export default router;
