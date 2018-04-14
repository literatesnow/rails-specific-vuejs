'use strict';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { name: 'list', path: '/list',      component: PageTodoList },
    { name: 'new',  path: '/new',       component: PageTodoNew  },
    { name: 'edit', path: '/edit/:id',  component: PageTodoEdit }
  ]
});

var app = new Vue({
  router: router
}).$mount('#app');
