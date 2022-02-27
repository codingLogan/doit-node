import { ToDoItemInterface } from "./ToDoItemInterface";

export interface CompleteItemInput {
  listId: string;
  itemId: string;
}

export interface CompleteItemOutput {
  item: ToDoItemInterface;
}

export interface CompleteItemRepository {
  completeItem(input: CompleteItemInput): ToDoItemInterface;
}

export class CompleteItemInteractor {
  repository;
  constructor(repository: CompleteItemRepository) {
    this.repository = repository;
  }

  execute(input: CompleteItemInput) {
    // ToDo: Check that it can actually be completed before saving
    return this.repository.completeItem(input);
  }
}
