import { ToDoList } from "../entities/ToDoList";

/**
 * To create a list a Use Case expects a name
 * Adapter Layers implement these
 */
export interface CreateListInputInterface {
  name: string;
}

/**
 * Upon return a list will also have an ID (provided by the Repository)
 */
export interface CreateListOutputInterface {
  name: string;
  id: string;
}

/**
 * This is to be implemented by the actual Repository layer
 * and it is used here
 */
export interface CreateListRepositoryInterface {
  createList(list: CreateListInputInterface): string;
}

/**
 * Purpose: create a list using data from the user
 * Expects: CreateListInput
 * Operates On: ToDoList entity
 * Returns: CreateListOutput
 * Repository: Operates with the abstract layer of the persistence layer
 */

export class CreateListInteractor {
  input: CreateListInputInterface;
  repository: CreateListRepositoryInterface;

  constructor(
    input: CreateListInputInterface,
    repository: CreateListRepositoryInterface
  ) {
    this.input = input;
    this.repository = repository;
  }

  execute() {
    const returnedId = this.repository.createList(this.input);
    let output: CreateListOutputInterface = {
      name: this.input.name,
      id: returnedId,
    };

    return output;
  }
}
