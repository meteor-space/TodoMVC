
class TodoMVC.RouteController extends Space.messaging.Controller

  @mixin [
    Space.messaging.EventSubscribing
    Space.messaging.EventPublishing
  ]

  eventSubscriptions: -> [
    # Tell the rest of the application that the expected filter mode changed
    'TodoMVC.FilterRouteTriggered': (event) ->
      @publish new TodoMVC.FilterChanged filter: event.filterType
  ]
