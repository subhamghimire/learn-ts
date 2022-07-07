interface Robot {
  identify: (id: number) => void;
}

class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }

  answerQuestion() {
    console.log("42!");
  }
}

const newSeries = new OneSeries();
newSeries.answerQuestion();

// interface & classes
// Write an interface here
interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");

// the main difference between type  interface is that interface only used to type Objects but type can be used to type
// Object, primitives and more.

type Recipe = {
  title: string;
  excerpt: string;
  body: string;
};
function createMenu(params: Recipe) {
  console.log(params.title);
  console.log(params.excerpt);
  console.log(params.body);
}

createMenu({
  title: "Tea",
  excerpt: "make a tea",
  body: "this is way to make a tea",
});

// reduce function

type Contribute = {
  name: string;
  project: string;
  points: number;
};
const contributions: Contribute[] = [
  {
    name: "Subham Ghimire",
    project: "Ai in birds",
    points: 20,
  },
  {
    name: "Shekhar Ghimire",
    project: "Ai in tech",
    points: 60,
  },
  {
    name: "Sesh Ghimire",
    project: "Ai in finance",
    points: 30,
  },
];
const output = contributions.reduce((acc, curr) => acc + curr.points, 0);
console.log(output);

interface Setting {
  name: string;
}

class UserSetting {
  changeSetting(setting: Setting) {
    console.log(`your setting is ${setting.name}`);
  }
}

class Profile {
  private myUser: UserSetting;
  constructor(user: UserSetting) {
    this.myUser = user;
  }

  displaySetting(name: Setting) {
    this.myUser.changeSetting(name);
  }
}

let profile = new Profile(new UserSetting());

profile.displaySetting({ name: "subham" });
abstract class Shape {
  setColor(color: string) {
    // ...
  }

  render(area: number) {
    // ...
  }

  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(private readonly width = 0, private readonly height = 0) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(private readonly length: number) {
    super();
  }

  getArea(): number {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes: Shape[]) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.get();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// // backpack.add(22);
// backpack.add("book");

export interface ILogger {
  log(message: string): void;
  error: (message: string) => void;
}

class UserLog {
  private log: ILogger;

  constructor(logger: ILogger) {
    this.log = logger;
  }

  allLog() {
    this.log.log("Logged In");
  }
}

class Logger implements ILogger {
  log(message: string) {
    console.log(message);
  }
  error(message: string) {
    console.error(message);
  }
}

const userLog = new UserLog(new Logger());
userLog.allLog();

// import { showhandsome } from "./types/handsome";

// showhandsome("subham");

type Department = {
  name: string;
};

type Employee = {
  name: string;
  age: number;
};

class TeslaCompany {
  private static role = "Admin";
  private readonly credentials: string = "";
  private departments: Department[] = [];
  private employees: Employee[] = [];

  constructor(cred: string) {
    this.credentials = cred;
  }

  addDepartment(value: Department) {
    this.departments = [...this.departments, value];
  }

  addEmployee(value: Employee) {
    this.employees = [...this.employees, value];
  }
}

class TeslaEmployee extends TeslaCompany {
  private new_employee: Employee = { name: "", age: 0 };

  public setName(employee: Employee): void {
    this.new_employee = employee;
  }
}

const newTeslaEmployee = new TeslaEmployee("123456");
newTeslaEmployee.setName({ name: "Kevin Odongo", age: 36 });
newTeslaEmployee.addDepartment({ name: "Finance" });
newTeslaEmployee.addEmployee({ name: "Kevin Odongo", age: 36 });
console.log(newTeslaEmployee);

interface Todo {
  title: string;
  description?: string;
}

const todo1 = {
  title: "organize desk",
  extra: "metadata", // duck typing is allowed!
};

const updateTodo = (
  todo: Todo,
  fieldsToUpdate: Partial<Todo> // allow partial updates
) => ({ ...todo, ...fieldsToUpdate });

const result1 = updateTodo(todo1, {
  description: "throw out trash",
});

const todo2 = {
  ...todo1,
  description: "clean up", // call bombs without description
};

const updateRequiredTodo = (
  todo: Required<Todo>,
  fieldsToUpdate: Partial<Todo>
): Required<Todo> => ({ ...todo, ...fieldsToUpdate });

const result2 = updateRequiredTodo(todo2, {
  description: "throw out trash",
});

console.log(result1);
console.log(result2);

// class Base {
//   private hiddenA = 0;
//   #hiddenB = 0;

//   printInternals() {
//     console.log(this.hiddenA); // works
//     console.log(this.#hiddenB); // works
//   }
// }

// const obj = new Base();
// console.log(obj.hiddenA); // these two bomb
// console.log(obj.#hiddenB);

interface GenericAdd<AddType> {
  add: (x: AddType, y: AddType) => AddType;
}

class GenericNumber implements GenericAdd<number> {
  add(x: number, y: number) {
    return x + y;
  }
}

class GenericString implements GenericAdd<string> {
  add(x: string, y: string) {
    return x + y;
  }
}

const genericNum = new GenericNumber();
console.log(genericNum.add(2, 3));

const genericString = new GenericString();
console.log(genericString.add("Hi", " Subham"));

type AType = { x: number; y: number; z: number };

const subset: Partial<AType> = {
  x: 2,
  y: 3,
};

console.log(subset);
