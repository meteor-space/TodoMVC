
class TodoMVC.LayoutController extends Space.Object

  dependencies: {
    layout: 'BlazeLayout'
  }

  @mixin Space.messaging.EventSubscribing

  eventSubscriptions: -> [
    'TodoMVC.FilterRouteTriggered': (event) -> @layout.render "index"
  ]
