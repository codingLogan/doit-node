import { ToDoItemInterface } from "../use_cases/ToDoItemInterface";
import { ToDoListInterface } from "../use_cases/ToDoListInterface";
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
  private currentListId: number;
  lists: ToDoListInterface[];

  constructor() {
    this.currentListId = 0;
    this.lists = [];
  }

  getNextListId() {
    this.currentListId++;
    return this.currentListId.toString();
  }

  // Helper functions to help with setting "dummy" data
  setLists(lists: ToDoListInterface[]) {
    this.lists = lists;
  }

  createList(input: CreateListInputInterface): CreateListOutputInterface {
    const newList: ToDoListInterface = {
      id: this.getNextListId(),
      name: input.name,
      items: [],
    };

    this.lists.push(newList);

    return newList;
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
