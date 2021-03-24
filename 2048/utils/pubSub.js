function PubSub() {
    this.subscribers = [];
}

PubSub.prototype.subscribe = function (event, handler, context) {
    console.log('subscribe')
    this.subscribers.push({ event: event, handler: handler.bind(context) });
}

PubSub.prototype.publish = function (event, args) {
    console.log('publish')
    this.subscribers.forEach(function (action) {
        if (action.event === event) {
            action.handler(args);
        }
    })
}
