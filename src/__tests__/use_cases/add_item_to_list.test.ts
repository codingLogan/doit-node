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
    list: {
      name: "testlist",
      items: [],
    },
    newItemName: "hello",
  };

  const expected: AddItemOutputInterface = {
    list: {
      name: "testlist",
      items: [
        {
          name: "hello",
          done: false,
        },
      ],
    },
  };

  const interactor = new AddItemInteractor(list);
  expect(interactor.addItem()).toStrictEqual(expected);
});
