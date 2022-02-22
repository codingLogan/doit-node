import {
  CreateListInputInterface,
  CreateListOutputInterface,
  CreateListRepositoryInterface,
} from "../use_cases/CreateList";
import { GetListsRepository } from "../use_cases/GetLists";

/**
 * Test Repository, move to better place
 */
export class TestRepository
  implements CreateListRepositoryInterface, GetListsRepository
{
  lists: CreateListOutputInterface[];

  constructor() {
    this.lists = [];
  }

  // Helper functions to help with setting "dummy" data
  setLists(lists: CreateListOutputInterface[]) {
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

  getLists() {
    return {
      lists: this.lists,
    };
  }
}
