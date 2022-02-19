import { ToDoList } from "../../entities/ToDoList";

test("creates a named list", () => {
  const toDoList = new ToDoList("test-name");
  expect(toDoList.name).toBe("test-name");
});
