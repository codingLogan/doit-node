import { ToDoItem } from "../../entities/ToDoItem";

test("Mark item as done", () => {
  const toDoItem = new ToDoItem("chores");
  toDoItem.markAsDone();
  expect(toDoItem.isDone()).toBe(true);
});
