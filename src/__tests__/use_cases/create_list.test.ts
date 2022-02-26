import {
  CreateListInputInterface,
  CreateListInteractor,
} from "../../use_cases/CreateList";
import { TestRepository } from "../../repositories/repository";

test("CreateListInteractor creates a new blank list", () => {
  const repository = new TestRepository();

  const createInputDTO: CreateListInputInterface = {
    name: "testname",
  };

  const createListInteractor = new CreateListInteractor(repository);
  const createOutputDTO = createListInteractor.createList(createInputDTO);

  expect(createOutputDTO).toEqual({
    id: "1",
    name: "testname",
    items: [],
  });
});

test("Blank list name does not create a list", () => {
  const repository = new TestRepository();

  const createListInteractor = new CreateListInteractor(repository);
  expect(() => createListInteractor.createList({ name: "" })).toThrowError();
});
