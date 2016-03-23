var server = require("./server1");
var router = require("./router1");
var requestHandlers = require("./requestHandlers1");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);