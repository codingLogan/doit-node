import {
  CreateListInputInterface,
  CreateListInteractor,
} from "../../use_cases/CreateList";
import { TestRepository } from "../../repositories/repository";

let repository: TestRepository;
let interactor: CreateListInteractor;

beforeEach(() => {
  repository = new TestRepository();
  interactor = new CreateListInteractor(repository);
});

test("CreateListInteractor creates a new blank list", () => {
  const createInputDTO: CreateListInputInterface = {
    name: "testname",
  };

  const createOutputDTO = interactor.createList(createInputDTO);

  expect(createOutputDTO).toEqual({
    id: "1",
    name: "testname",
    items: [],
  });
});

test("Blank list name does not create a list", () => {
  expect(() => interactor.createList({ name: "" })).toThrowError();
});
