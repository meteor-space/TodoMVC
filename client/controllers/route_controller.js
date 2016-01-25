
Space.Object.extend(TodoMVC, 'RouteController', {

  eventSubscriptions() {
    return [{
      // Tell the rest of the application that the expected filter mode changed
      'TodoMVC.FilterRouteTriggered'(event) {
        this.publish(new TodoMVC.FilterChanged({
          filter: event.filterType
        }));
      }
    }];
  }

});

TodoMVC.RouteController.mixin([
  Space.messaging.EventSubscribing,
  Space.messaging.EventPublishing
]);
