import {
  CreateListInputInterface,
  CreateListOutputInterface,
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

  // Helper functions to help with setting "dummy" data
  setLists(lists: []) {
    this.lists = lists;
  }

  createList(input: CreateListInputInterface): CreateListOutputInterface {
    const newList: CreateListOutputInterface = {
      id: null,
      name: input.name,
      items: [],
    };

    this.lists.push(newList);
    newList.id = this.lists.length.toString();

    return {
      id: this.lists.length.toString(),
      name: input.name,
      items: [],
    };
  }
}
