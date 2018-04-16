/**
 * TodoFormButton
 *
 * Buttons which provide an indication of state.
 */
var TodoFormButton = Vue.component('todo-form-button', {
  props: ['label'],

  data: function() {
    return {
      loading: false,
    }
  },

  created: function() {
    this.$parent.$on('buttonReset', function() {
      this.loading = false;
    }.bind(this));
  },

  methods: {
    buttonClick: function(e) {
      e.preventDefault();

      this.loading = true;
      this.$emit('buttonClick');
    }
  },

  template: `
    <button v-on:click="buttonClick" type="submit" :disabled="loading">
      <img v-if="loading" src="assets/images/gear.png" class="spinning"> {{ label }}
    </button>
    `
});

