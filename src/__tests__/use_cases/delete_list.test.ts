import { TestRepository } from "../../repositories/repository";
import { DeleteListInteractor } from "../../use_cases/DeleteList";

test("Existing list can be deleted", () => {
  // Setup a repository with 1 list to delete
  // Set up a repository with a test list
  const repository = new TestRepository();
  repository.setLists([
    {
      id: "1",
      name: "testlist",
      items: [],
    },
  ]);

  // Input for the operation
  const testId = "1";

  const interactor = new DeleteListInteractor(repository);
  const actualResult = interactor.delete(testId);

  const expectedResult = true;
  expect(actualResult).toBe(expectedResult);
});
