/**
 * TodoNav
 *
 * Page navigation.
 */
var TodoNav = Vue.component('todo-nav', {
  props: ['title'],

  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">{{ title }}</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" :to="{ name: 'list' }" active-class="active" exact-active-class="active">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">&bull; Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" :to="{ name: 'new' }" active-class="active" exact-active-class="active">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">&bull; New</a>
          </router-link>
        </ul>
      </div>
    </nav>
  `
});
