"use strict";
exports.__esModule = true;
exports.TaskType = void 0;
var TaskType;
(function (TaskType) {
    TaskType["feature"] = "feature";
    TaskType["bug"] = "bug";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var check = {
    title: "Do this task",
    type: TaskType.feature
};
var checkBag = function (check) {
    return console.log(check);
};
checkBag(check);
