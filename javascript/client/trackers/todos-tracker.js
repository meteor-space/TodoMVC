Space.messaging.Tracker.extend(TodoMVC, 'TodosTracker', {

  dependencies: {
    store: 'TodoMVC.TodosStore',
    meteor: 'Meteor'
  },

  // Reactively subscribe to the todos data based on the active filter
  autorun() {
    this.meteor.subscribe('todos', this.store.activeFilter());
  }

});
