import { TestRepository } from "../../repositories/repository";

export function createSingleListRepository() {
  const testRepository = new TestRepository();

  testRepository.setLists([
    {
      id: "1",
      name: "testlist",
      items: [],
    },
  ]);

  return testRepository;
}
