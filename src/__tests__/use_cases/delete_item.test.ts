import { TestRepository } from "../../repositories/repository";
import { DeleteItemInteractor } from "../../use_cases/DeleteItem";

test("item can be deleted", () => {
  // Setup test repository
  const repository = new TestRepository();
  repository.setLists([
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

  const interactor = new DeleteItemInteractor(repository);
  const listId = "1";
  const itemId = "1";
  const actual = interactor.deleteItemFromList(listId, itemId);

  const expected = true;
  expect(actual).toBe(expected);

  // Now, make sure the list doesn't have the item anymore
  const listWithoutItem = [
    {
      id: "1",
      name: "testlist",
      items: [
        {
          id: "2",
          listId: "1",
          name: "hello2",
          done: false,
        },
      ],
    },
  ];

  expect(repository.lists).toStrictEqual(listWithoutItem);
});
