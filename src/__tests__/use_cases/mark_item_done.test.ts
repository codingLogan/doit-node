import { ToDoItem } from "../../entities/ToDoItem";
import { ToDoItemInterface } from "../../use_cases/ToDoItemInterface";
import { TestRepository } from "../../repositories/repository";
import { CompleteItemInteractor } from "../../use_cases/CompleteItem";

test("Mark item as done", () => {
  const toDoItem = new ToDoItem("chores");
  toDoItem.markAsDone();
  expect(toDoItem.isDone()).toBe(true);
});

test("Mark item as done in repository", () => {
  const input = {
    listId: "1",
    itemId: "1",
  };

  const output: ToDoItemInterface = {
    name: "hello1",
    done: true,
    id: "1",
    listId: "1",
  };

  // Setup the test repo with a list and two items
  const repo = new TestRepository();
  repo.setLists([
    {
      id: "1",
      name: "testlist",
      items: [
        {
          id: "1",
          listId: "1",
          name: "hello1",
          done: false,
        },
        {
          id: "2",
          listId: "1",
          name: "hello2",
          done: false,
        },
      ],
    },
  ]);

  const interactor = new CompleteItemInteractor(repo);
  const actual = interactor.execute(input);

  expect(actual).toStrictEqual(output);
});
