import { ToDoItem } from "../entities/ToDoItem";
import { ToDoItemInterface } from "../use_cases/ToDoItemInterface";
import { ToDoListInterface } from "../use_cases/ToDoListInterface";

// Simplified interface for creating a new item
export interface AddItemInputInterface {
  listID: string;
  newItemName: string;
}

// Interface used to pass to the repository
export interface CreateItemInterface {
  listId: string;
  name: string;
  done: boolean;
}

export interface AddItemOutputInterface {
  list: ToDoListInterface;
}

export interface AddItemRepositoryInterface {
  addItemToList(item: CreateItemInterface): AddItemOutputInterface;
}

export class AddItemInteractor {
  repo;
  constructor(repository: AddItemRepositoryInterface) {
    this.repo = repository;
  }

  addItem(input: AddItemInputInterface) {
    // Create the item to make sure it's valid
    const newItem = new ToDoItem(input.newItemName);

    // Now that the item creation was successful, lets get the list
    // that it should be added to, and then add it
    const updatedList = this.repo.addItemToList({
      listId: input.listID,
      name: newItem.name,
      done: newItem.isDone(),
    });
    return updatedList;
  }
}
