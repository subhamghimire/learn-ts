"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var OneSeries = /** @class */ (function () {
    function OneSeries() {
    }
    OneSeries.prototype.identify = function (id) {
        console.log("beep! I'm ".concat(id.toFixed(2), "."));
    };
    OneSeries.prototype.answerQuestion = function () {
        console.log("42!");
    };
    return OneSeries;
}());
var newSeries = new OneSeries();
newSeries.answerQuestion();
var DesktopDirectory = /** @class */ (function () {
    function DesktopDirectory() {
    }
    DesktopDirectory.prototype.addFile = function (name) {
        console.log("Adding file: ".concat(name));
    };
    DesktopDirectory.prototype.showPreview = function (name) {
        console.log("Opening preview of file: ".concat(name));
    };
    return DesktopDirectory;
}());
var Desktop = new DesktopDirectory();
Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");
function createMenu(params) {
    console.log(params.title);
    console.log(params.excerpt);
    console.log(params.body);
}
createMenu({
    title: "Tea",
    excerpt: "make a tea",
    body: "this is way to make a tea"
});
var contributions = [
    {
        name: "Subham Ghimire",
        project: "Ai in birds",
        points: 20
    },
    {
        name: "Shekhar Ghimire",
        project: "Ai in tech",
        points: 60
    },
    {
        name: "Sesh Ghimire",
        project: "Ai in finance",
        points: 30
    },
];
var output = contributions.reduce(function (acc, curr) { return acc + curr.points; }, 0);
console.log(output);
var UserSetting = /** @class */ (function () {
    function UserSetting() {
    }
    UserSetting.prototype.changeSetting = function (setting) {
        console.log("your setting is ".concat(setting.name));
    };
    return UserSetting;
}());
var Profile = /** @class */ (function () {
    function Profile(user) {
        this.myUser = user;
    }
    Profile.prototype.displaySetting = function (name) {
        this.myUser.changeSetting(name);
    };
    return Profile;
}());
var profile = new Profile(new UserSetting());
profile.displaySetting({ name: "subham" });
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.setColor = function (color) {
        // ...
    };
    Shape.prototype.render = function (area) {
        // ...
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this) || this;
        _this.length = length;
        return _this;
    }
    Square.prototype.getArea = function () {
        return this.length * this.length;
    };
    return Square;
}(Shape));
function renderLargeShapes(shapes) {
    shapes.forEach(function (shape) {
        var area = shape.getArea();
        shape.render(area);
    });
}
var shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
var UserLog = /** @class */ (function () {
    function UserLog(logger) {
        this.log = logger;
    }
    UserLog.prototype.allLog = function () {
        this.log.log("Logged In");
    };
    return UserLog;
}());
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (message) {
        console.log(message);
    };
    Logger.prototype.error = function (message) {
        console.error(message);
    };
    return Logger;
}());
var userLog = new UserLog(new Logger());
userLog.allLog();
var TeslaCompany = /** @class */ (function () {
    function TeslaCompany(cred) {
        this.credentials = "";
        this.departments = [];
        this.employees = [];
        this.credentials = cred;
    }
    TeslaCompany.prototype.addDepartment = function (value) {
        this.departments = __spreadArray(__spreadArray([], this.departments, true), [value], false);
    };
    TeslaCompany.prototype.addEmployee = function (value) {
        this.employees = __spreadArray(__spreadArray([], this.employees, true), [value], false);
    };
    TeslaCompany.role = "Admin";
    return TeslaCompany;
}());
var TeslaEmployee = /** @class */ (function (_super) {
    __extends(TeslaEmployee, _super);
    function TeslaEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.new_employee = { name: "", age: 0 };
        return _this;
    }
    TeslaEmployee.prototype.setName = function (employee) {
        this.new_employee = employee;
    };
    return TeslaEmployee;
}(TeslaCompany));
var newTeslaEmployee = new TeslaEmployee("123456");
newTeslaEmployee.setName({ name: "Kevin Odongo", age: 36 });
newTeslaEmployee.addDepartment({ name: "Finance" });
newTeslaEmployee.addEmployee({ name: "Kevin Odongo", age: 36 });
console.log(newTeslaEmployee);
var todo1 = {
    title: "organize desk",
    extra: "metadata"
};
var updateTodo = function (todo, fieldsToUpdate // allow partial updates
) { return (__assign(__assign({}, todo), fieldsToUpdate)); };
var result1 = updateTodo(todo1, {
    description: "throw out trash"
});
var todo2 = __assign(__assign({}, todo1), { description: "clean up" });
var updateRequiredTodo = function (todo, fieldsToUpdate) { return (__assign(__assign({}, todo), fieldsToUpdate)); };
var result2 = updateRequiredTodo(todo2, {
    description: "throw out trash"
});
console.log(result1);
console.log(result2);
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    GenericNumber.prototype.add = function (x, y) {
        return x + y;
    };
    return GenericNumber;
}());
var GenericString = /** @class */ (function () {
    function GenericString() {
    }
    GenericString.prototype.add = function (x, y) {
        return x + y;
    };
    return GenericString;
}());
var genericNum = new GenericNumber();
console.log(genericNum.add(2, 3));
var genericString = new GenericString();
console.log(genericString.add("Hi", " Subham"));
var subset = {
    x: 2,
    y: 3
};
console.log(subset);
