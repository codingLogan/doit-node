import { GetListOutput, GetListsInteractor } from "../../use_cases/GetLists";
import { TestRepository } from "../../repositories/repository";

let repository: TestRepository;
let interactor: GetListsInteractor;

beforeEach(() => {
  repository = new TestRepository();
  interactor = new GetListsInteractor(repository);
});

test("get saved lists", () => {
  const repoLists: GetListOutput[] = [
    {
      id: "1",
      name: "list1",
      items: [],
    },
  ];
  repository.setLists(repoLists);

  const lists = interactor.getLists();

  expect(lists).toStrictEqual({
    lists: repoLists,
  });
});
