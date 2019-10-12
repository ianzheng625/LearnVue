import Vue from 'vue'

import VueRouter from 'vue-router'

const req = require.context('./components', true, /route\.js?$/);
const allRoutes = [].concat(...req.keys().map(k => req(k).default));
Vue.use(VueRouter);

const routes = [
  ...allRoutes,
  {
    path: '*',
    // hidden: true,
    redirect: { path: '/' }
  }
];

const router = new VueRouter({
  routes //缩写:相当于 routes: routes
});


export default router;
