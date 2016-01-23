
Space.Object.extend(TodoMVC, 'LayoutController', {

  dependencies: {
    layout: 'BlazeLayout'
  },

  eventSubscriptions() {
    return [{
      'TodoMVC.FilterRouteTriggered'() {
        this.layout.render('index', {
          input: 'input',
          todo_list: 'todo_list',
          footer: 'footer'
        });
      }
    }];
  }
});

TodoMVC.LayoutController.mixin(Space.messaging.EventSubscribing);
