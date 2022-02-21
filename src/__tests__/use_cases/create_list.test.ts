import {
  CreateListInputInterface,
  CreateListInteractor,
} from "../../use_cases/CreateList";
import { TestRepository } from "../repository";

test("CreateListInteractor creates a new blank list", () => {
  const repository: TestRepository = new TestRepository();

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
