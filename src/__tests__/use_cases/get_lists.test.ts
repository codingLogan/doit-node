import { GetListOutput, GetListsInteractor } from "../../use_cases/GetLists";
import { TestRepository } from "../../repositories/repository";

test("get saved lists", () => {
  expect(true).toBeTruthy();
  const repository: TestRepository = new TestRepository();
  const repoLists: GetListOutput[] = [
    {
      id: "1",
      name: "list1",
      items: [],
    },
  ];
  repository.setLists(repoLists);

  const lists = new GetListsInteractor(repository).getLists();

  expect(lists).toStrictEqual({
    lists: repoLists,
  });
});
