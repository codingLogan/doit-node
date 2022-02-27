import { ToDoItem } from "../entities/ToDoItem";
import { ToDoItemInterface } from "../use_cases/ToDoItemInterface";
import { ToDoListInterface } from "../use_cases/ToDoListInterface";

export interface AddItemInputInterface {
  listID: string;
  newItemName: string;
}

export interface AddItemOutputInterface {
  list: ToDoListInterface;
}

export interface AddItemRepositoryInterface {
  addItemToList(
    listId: string,
    item: ToDoItemInterface
  ): AddItemOutputInterface;
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
    const updatedList = this.repo.addItemToList(input.listID, {
      name: newItem.name,
      done: newItem.isDone(),
    });
    return updatedList;
  }
}
