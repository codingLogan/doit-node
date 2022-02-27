import { ToDoItemInterface } from "../entities/ToDoItem";
import {
  AddItemOutputInterface,
  AddItemRepositoryInterface,
} from "../use_cases/AddItem";
import {
  CreateListInputInterface,
  CreateListOutputInterface,
  CreateListRepositoryInterface,
} from "../use_cases/CreateList";
import { GetListsRepository } from "../use_cases/GetLists";

/**
 * Test / In Memory Repository
 */
export class TestRepository
  implements
    CreateListRepositoryInterface,
    GetListsRepository,
    AddItemRepositoryInterface
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

  addItemToList(
    listId: string,
    item: ToDoItemInterface
  ): AddItemOutputInterface {
    const list = this.lists.find((listEntry) => listEntry.id === listId);

    if (typeof list === "undefined") {
      throw new Error(`List with id: ${listId} could not be found`);
    }

    list.items.push(item);

    return { list };
  }
}
