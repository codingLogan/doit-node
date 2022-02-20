import {
  CreateListInputInterface,
  CreateListInteractor,
} from "../../use_cases/CreateList";

test("CreateListInteractor creates a new blank list", () => {
  const createInputDTO: CreateListInputInterface = {
    name: "testname",
  };

  const createListInteractor = new CreateListInteractor();
  const createOutputDTO = createListInteractor.createList(createInputDTO);

  expect(createOutputDTO).toEqual({
    name: "testname",
    items: [],
  });
});
