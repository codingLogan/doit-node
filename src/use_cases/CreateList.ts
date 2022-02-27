import { ToDoItemInterface } from "../use_cases/ToDoItemInterface";
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
  id: string;
  name: string;
  items: ToDoItemInterface[];
}

/**
 * a repository needs to implement an interface to save it
 * Rather than rely on a specific db, it's abstract
 */
export interface CreateListRepositoryInterface {
  createList(input: CreateListInputInterface): CreateListOutputInterface;
}

/**
 * Purpose: create a list using data from the user
 * Expects: CreateListInput
 * Operates On: ToDoList entity
 * Returns: CreateListOutput
 */
export class CreateListInteractor {
  repo: CreateListRepositoryInterface;
  constructor(repo: CreateListRepositoryInterface) {
    this.repo = repo;
  }

  createList(input: CreateListInputInterface) {
    // Use logic from the Entity to handle a bad list
    const newList = new ToDoList(input.name);
    const outputList = this.repo.createList({ name: newList.name });

    // Convert list to output
    const output: CreateListOutputInterface = {
      id: outputList.id,
      name: outputList.name,
      items: [],
    };

    return output;
  }
}
