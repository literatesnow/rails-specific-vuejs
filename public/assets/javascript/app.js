'use strict';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/list',      component: PageTodoList },
    { path: '/new',       component: PageTodoNew  },
    { path: '/edit/:id',  component: PageTodoEdit }
  ]
});

var app = new Vue({
  router: router
}).$mount('#app');
