'use strict';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    { path: '/list', component: PageTodoList },
    { path: '/new',  component: PageTodoNew  }
  ]
});

var app = new Vue({
  router: router
}).$mount('#app');
