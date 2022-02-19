import { ToDoList } from "../../entities/ToDoList";
import {
  CreateListInputInterface,
  CreateListInteractor,
  CreateListRepositoryInterface,
} from "../../use_cases/CreateList";
import { TestRepository } from "../repository";

test("creates a named list", () => {
  const toDoList = new ToDoList("test-name");
  expect(toDoList.name).toBe("test-name");
});

test("Use case creates list and returns POJO output", () => {
  const repository: TestRepository = new TestRepository();

  const createInputDTO: CreateListInputInterface = {
    name: "testname",
  };

  const createListInteractor = new CreateListInteractor(
    createInputDTO,
    repository
  );
  const createOutputDTO = createListInteractor.execute();

  expect(createOutputDTO).toEqual({
    name: "testname",
    id: "0",
  });
});
