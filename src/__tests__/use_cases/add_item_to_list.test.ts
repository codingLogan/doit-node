import { ToDoItem } from "../../entities/ToDoItem";
import { ToDoList } from "../../entities/ToDoList";

test("create list and add an item to it", () => {
  const list = new ToDoList("test");
  list.addItem(new ToDoItem("chores"));
  expect(list.items.length).toBe(1);
});
