
Space.Object.extend(TodoMVC, 'LayoutController', {

  Dependencies: {
    layout: 'BlazeLayout'
  },

  eventSubscriptions: function() {
    return [{
      'TodoMVC.FilterRouteTriggered': function(event) {
        this.layout.render("index");
      }
    }];
  }
});

TodoMVC.LayoutController.mixin(Space.messaging.EventSubscribing);
