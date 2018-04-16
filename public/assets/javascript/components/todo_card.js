/**
 * TodoCard
 *
 * Todo items represented as a card.
 */
var TodoCard = Vue.component('todo-card', {
  props: ['id', 'title', 'text', 'completed', 'due_at', 'created_at'],

  methods: {
    cardStyle: function() {
      var classes = {};
      if (this.completed) {
        classes['bg-success'] = true;
      } else if (this.isOverdue()) {
        classes['bg-danger'] = true;
      } else {
        classes['bg-dark'] = true;
      }

      return classes;
    },

    isCompleted: function() {
      return this.completed;
    },

    isOverdue: function() {
      if (!this.due_at) {
        return false;
      }

      return moment(this.due_at).isBefore(moment(), 'second');
    },
  },

  filters: {
    momentAt: function(date) {
      if (!date) {
        return '';
      }

      return moment(date).fromNow();
    },

    snip: function(text, max) {
      if (!text) {
        return '';
      }
      if (text.length < max) {
        return text;
      }
      return text.substring(0, max) + '...';
    }
  },

  template: `
    <router-link tag="div"
                 class="col-sm-3 text-white clickable"
                 :to="{ name: 'edit', params: { id: this.id } }">
      <div class="card mb-3" v-bind:class="cardStyle()">
        <div class="card-header clickable">
          <h5>{{ title }}</h5>
        </div>
        <div class="card-body clickable">
          <p class="card-text">{{ text | snip(100) }}</p>
        </div>
        <div class="card-footer clickable" v-if="!isCompleted() && due_at">
          <small>Due {{ due_at | momentAt }}</small>
        </div>
      </div>
    </router-link>
    `
});
