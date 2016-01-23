
Space.ui.BlazeComponent.extend(TodoMVC, 'Input', {

  events() {
    return [{
      'keyup #new-todo'(event) {
        // When it was the ENTER key
        if (event.keyCode === 13) {
          // Tell mediator about it
          let input = this.$('#new-todo').val();
          this.publish(new TodoMVC.TodoCreated({ title: input}));
          // Reset input
          this.$('#new-todo').val('');
        }
      }
    }];
  }

})
.register('input'); // BlazeComponent API to register with template
