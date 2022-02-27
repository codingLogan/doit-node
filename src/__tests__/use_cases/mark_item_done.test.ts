import { ToDoItem } from "../../entities/ToDoItem";
import { ToDoItemInterface } from "../../use_cases/ToDoItemInterface";

test("Mark item as done", () => {
  const toDoItem = new ToDoItem("chores");
  toDoItem.markAsDone();
  expect(toDoItem.isDone()).toBe(true);
});

// test("Mark item as done in repository", () => {
//   const input = {
//     listId: "1",
//     itemId: "1",
//   };

//   const output: ToDoItemInterface = {
//     name: "testname",
//     done: true,
//     id: "1",
//   };

//   const interactor = new MarkItemAsDoneInteractor(repo);
//   const actual = interactor.markItemAsDone(input);

//   expect(actual).toStrictEqual(output);
// });
