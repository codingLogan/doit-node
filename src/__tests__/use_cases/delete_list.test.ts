import { TestRepository } from "../../repositories/repository";
import { DeleteListInteractor } from "../../use_cases/DeleteList";

let repository: TestRepository;
let interactor: DeleteListInteractor;

beforeEach(() => {
  repository = new TestRepository();
  interactor = new DeleteListInteractor(repository);
});

test("Existing list can be deleted", () => {
  // Setup a repository with 1 list to delete
  repository.setLists([
    {
      id: "1",
      name: "testlist",
      items: [],
    },
  ]);

  const testId = "1";
  const actualResult = interactor.delete(testId);
  const expectedResult = true;

  expect(actualResult).toBe(expectedResult);
});
