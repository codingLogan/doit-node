import { ToDoItemInterface } from "../use_cases/ToDoItemInterface";
import { ToDoListInterface } from "../use_cases/ToDoListInterface";
import {
  AddItemOutputInterface,
  AddItemRepositoryInterface,
  CreateItemInterface,
} from "../use_cases/AddItem";
import {
  CreateListInputInterface,
  CreateListOutputInterface,
  CreateListRepositoryInterface,
} from "../use_cases/CreateList";
import { GetListsRepository } from "../use_cases/GetLists";
import {
  CompleteItemInput,
  CompleteItemRepository,
} from "../use_cases/CompleteItem";
import { DeleteListRepository } from "../use_cases/DeleteList";
import { DeleteItemRepository } from "../use_cases/DeleteItem";

/**
 * Test / In Memory Repository
 */
export class TestRepository
  implements
    CreateListRepositoryInterface,
    GetListsRepository,
    DeleteListRepository,
    AddItemRepositoryInterface,
    CompleteItemRepository,
    DeleteItemRepository
{
  private currentListId: number;
  lists: ToDoListInterface[];

  private currentItemId: number;

  constructor() {
    this.currentListId = 0;
    this.lists = [];

    this.currentItemId = 0;
  }

  getNextListId() {
    this.currentListId++;
    return this.currentListId.toString();
  }

  getNextItemId() {
    this.currentItemId++;
    return this.currentItemId;
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

  deleteList(id: string): Boolean {
    const listIndex = this.lists.findIndex((list) => list.id === id);

    if (listIndex === -1) {
      return false;
    }

    // Remove the list from the array
    this.lists.splice(listIndex, 1);
    return true;
  }

  addItemToList(item: CreateItemInterface): AddItemOutputInterface {
    const list = this.lists.find((listEntry) => listEntry.id === item.listId);

    if (typeof list === "undefined") {
      throw new Error(`List with id: ${item.listId} could not be found`);
    }

    list.items.push({
      ...item,
      id: this.getNextItemId().toString(),
    });

    return { list };
  }

  completeItem(input: CompleteItemInput) {
    const list = this.lists.find((list) => list.id === input.listId);

    if (!list) {
      throw new Error("markItemAsComlete: List not found");
    }

    const listItem = list.items.find((item) => item.id === input.itemId);

    if (!listItem) {
      throw new Error("completeItem: Item not found");
    }

    // Using reference, kinda risky
    listItem.done = true;

    return listItem;
  }

  deleteItem(listId: string, itemId: string): Boolean {
    const list = this.lists.find((list) => list.id === listId);

    if (typeof list === "undefined") {
      return false;
    }

    // Find the item in the list
    const itemIndex = list.items.findIndex((item) => item.id === itemId);

    if (itemIndex === -1) {
      return false;
    }

    // Remove the item from the list
    list.items.splice(itemIndex, 1);

    return true;
  }
}
