export enum TaskType {
  feature = "feature",
  bug = "bug",
}

type Task<T> = {
  title: string;
  type: T;
};

var check = {
  title: "Do this task",
  type: TaskType.feature,
};
const checkBag = (check: Task<TaskType>) => {
  return console.log(check);
};

checkBag(check);
