import {
  CreateListInputInterface,
  CreateListRepositoryInterface,
} from "../use_cases/CreateList";

/**
 * Test Repository, move to better place
 */
export class TestRepository implements CreateListRepositoryInterface {
  lists: any[];

  constructor() {
    this.lists = [];
  }

  createList(input: CreateListInputInterface) {
    this.lists.push(input);
    return (this.lists.length - 1).toString();
  }
}
