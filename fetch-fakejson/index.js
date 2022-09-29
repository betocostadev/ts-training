"use strict";
// Fetch fake json data from https://jsonplaceholder.typicode.com/
exports.__esModule = true;
var axios_1 = require("axios");
var theTodo = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(theTodo)
    .then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var done = todo.completed;
    console.log("\n      The todo with ID: ".concat(id, "\n      Has a title of ").concat(title, "\n      And the status is ").concat(done, "\n    "));
});
