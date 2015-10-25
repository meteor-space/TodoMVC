
class TodoMVC.LayoutController extends Space.Object

  Dependencies: {
    layout: 'BlazeLayout'
  }

  @mixin Space.messaging.EventSubscribing

  eventSubscriptions: -> [
    'TodoMVC.FilterRouteTriggered': (event) -> @layout.render "index"
  ]
