
Space.Object.extend(TodoMVC, 'RouteController', {

  events: function() {
    return [{
      // Tell the rest of the application that the expected filter mode changed
      'TodoMVC.FilterRouteTriggered': function(event) {
        this.publish(new TodoMVC.FilterChanged({
          filter: event.filterType
        }));
      }
    }];
  }

});

TodoMVC.RouteController.mixin(Space.messaging.EventSubscribing);
TodoMVC.RouteController.mixin(Space.messaging.EventPublishing);
