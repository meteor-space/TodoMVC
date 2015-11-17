
Space.flux.BlazeComponent.extend(TodoMVC, 'TodoList', {

  dependencies: {
    store: 'TodoMVC.TodosStore',
    meteor: 'Meteor'
  },

  todos() {
    return this.store.filteredTodos();
  },

  hasAnyTodos() {
    return this.store.filteredTodos().count() > 0;
  },

  allTodosCompleted() {
    return this.store.activeTodos().count() === 0;
  },

  isToggleChecked() {
    if (this.hasAnyTodos() && this.allTodosCompleted()) {
      return 'checked';
    } else {
      return false;
    }
  },

  prepareTodoData() {
    todo = this.currentData();
    todo.isEditing = this.store.editingTodoId() === todo._id;
    return todo;
  },

  events() {
    return [{
      'toggled .todo': this.toggleTodo,
      'destroyed .todo': this.deleteTodo,
      'doubleClicked .todo': this.editTodo,
      'editingCanceled .todo': this.stopEditing,
      'editingCompleted .todo': this.submitNewTitle,
      'click #toggle-all': this.toggleAllTodos
    }];
  },

  toggleTodo() {
    this.publish(new TodoMVC.TodoToggled({
      todoId: this.currentData()._id
    }));
  },

  deleteTodo() {
    this.publish(new TodoMVC.TodoDeleted({
      todoId: this.currentData()._id
    }));
  },

  editTodo() {
    this.publish(new TodoMVC.TodoEditingStarted({
      todoId: this.currentData()._id
    }));
  },

  submitNewTitle(event) {
    let todo = Space.flux.getEventTarget(event);
    let newTitle = todo.getTitleValue();
    this.publish(new TodoMVC.TodoTitleChanged({
      todoId: todo.data._id,
      newTitle: newTitle
    }));
    this.stopEditing();
  },

  toggleAllTodos() {
    this.meteor.call('toggleAllTodos');
  },

  stopEditing() {
    this.publish(new TodoMVC.TodoEditingEnded({
      todoId: this.currentData()._id
    }));
  }
})
// Register blaze-component for template
.register('todo_list');
