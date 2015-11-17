
Space.flux.BlazeComponent.extend(TodoMVC, 'Footer', {

  dependencies: {
    store: 'TodoMVC.TodosStore',
    meteor: 'Meteor'
  },

  filters() {
    return _.map(this.store.FILTERS, function(key) {
      return {
        name: key[0].toUpperCase() + key.slice(1),
        path: key
      };
    });
  },

  activeTodosCount() {
    return this.store.activeTodos().count();
  },

  completedTodosCount() {
    return this.store.completedTodos().count();
  },

  pluralize(count) {
    if (count === 1) {
      return 'item';
    } else {
      return 'items';
    }
  },

  events() {
    return [{
      'click #clear-completed'() {
        this.meteor.call('clearCompletedTodos');
      }
    }];
  },

  _mapAvailableFilters() {
    return _.map(this.store.FILTERS, function(key) {
      return {
        name: key[0].toUpperCase() + key.slice(1),
        path: key
      };
    });
  }
})

.register('footer'); // BlazeComponent API to register with template
