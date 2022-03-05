import { TestRepository } from "../../repositories/repository";
import { ToDoItem } from "../../entities/ToDoItem";
import { ToDoList } from "../../entities/ToDoList";
import {
  AddItemInputInterface,
  AddItemInteractor,
  AddItemOutputInterface,
} from "../../use_cases/AddItem";
import { createSingleListRepository } from "../helpers/repository";

test("create list and add an item to it", () => {
  const list = new ToDoList("test");
  list.addItem(new ToDoItem("chores"));
  expect(list.items.length).toBe(1);
});

describe("AddItemInteractor - with repository", () => {
  let testRepository = new TestRepository();
  let interactor: AddItemInteractor;

  beforeEach(() => {
    testRepository = createSingleListRepository();
    interactor = new AddItemInteractor(testRepository);
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
            id: "1",
            listId: "1",
            name: "hello",
            done: false,
          },
        ],
      },
    };

    expect(
      interactor.addItem({ listID: "1", newItemName: "hello" })
    ).toStrictEqual(expected);
  });

  test("Item is not added if name is missing", () => {
    expect(() => {
      interactor.addItem({ listID: "1", newItemName: "" });
    }).toThrowError();
  });
});
