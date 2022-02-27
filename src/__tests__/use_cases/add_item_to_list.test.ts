import { TestRepository } from "../../../lib";
import { ToDoItem } from "../../entities/ToDoItem";
import { ToDoList } from "../../entities/ToDoList";
import {
  AddItemInputInterface,
  AddItemInteractor,
  AddItemOutputInterface,
} from "../../use_cases/AddItem";

test("create list and add an item to it", () => {
  const list = new ToDoList("test");
  list.addItem(new ToDoItem("chores"));
  expect(list.items.length).toBe(1);
});

test("AddItemInteractor can add items to a list", () => {
  const list: AddItemInputInterface = {
    listID: "1",
    newItemName: "hello",
  };

  const expected: AddItemOutputInterface = {
    list: {
      id: "1",
      name: "testlist",
      items: [
        {
          name: "hello",
          done: false,
        },
      ],
    },
  };

  // Set up a repository with a test list
  const repository = new TestRepository();
  repository.setLists([
    {
      id: "1",
      name: "testlist",
      items: [],
    },
  ]);

  const interactor = new AddItemInteractor(repository);
  expect(
    interactor.addItem({ listID: "1", newItemName: "hello" })
  ).toStrictEqual(expected);
});
