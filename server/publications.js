Space.messaging.Publication.extend(TodoMVC, 'TodosPublication', {

  dependencies: {
    todosCollection: 'TodoMVC.Todos'
  },

  publications() {
    return [{
      'todos': function(context, filter) {
        // Publish filtered data based on the filter parameter
        switch (filter) {
        case 'all': return this.todosCollection.find();
        case 'active': return this.todosCollection.findActiveTodos();
        case 'completed': return this.todosCollection.findCompletedTodos();
        default: return context.ready();
        }
      }
    }];
  }
});
