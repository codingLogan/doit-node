import { ToDoList } from "../entities/ToDoList";

/**
 * To create a list a Use Case expects a name
 * Adapter Layers implement these
 */
export interface CreateListInputInterface {
  name: string;
}

/**
 * Upon creation it will be a named list, and an empty array of items
 */
export interface CreateListOutputInterface {
  name: string;
  items: [];
}

/**
 * Purpose: create a list using data from the user
 * Expects: CreateListInput
 * Operates On: ToDoList entity
 * Returns: CreateListOutput
 */
export class CreateListInteractor {
  createList(input: CreateListInputInterface) {
    const newList = new ToDoList(input.name);

    // Convert list to output
    const output: CreateListOutputInterface = {
      name: newList.name,
      items: [],
    };

    return output;
  }
}
