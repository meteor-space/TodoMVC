
Space.Object.extend(TodoMVC, 'LayoutController', {

  dependencies: {
    layout: 'BlazeLayout'
  },

  eventSubscriptions() {
    return [{
      'TodoMVC.FilterRouteTriggered'() {
        this.layout.render("index");
      }
    }];
  }
});

TodoMVC.LayoutController.mixin(Space.messaging.EventSubscribing);
