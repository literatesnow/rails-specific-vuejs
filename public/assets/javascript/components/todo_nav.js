var TodoNav = Vue.component('todo-nav', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Todo</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" to="/list" active-class="active" exact-active-class="active">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">List</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/new" active-class="active" exact-active-class="active">
            <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">New</a>
          </router-link>
        </ul>
      </div>
    </nav>
  `
});
