import { ToDoItemInterface } from "./ToDoItemInterface";

export interface MarkItemCompleteInput {
  listId: string;
  itemId: string;
}

export interface MarkItemCompleteOutput {
  item: ToDoItemInterface;
}

export interface MarkItemCompleteRepository {
  markItemAsComplete(input: MarkItemCompleteInput): ToDoItemInterface;
}

export class MarkItemCompleteInteractor {
  repository;
  constructor(repository: MarkItemCompleteRepository) {
    this.repository = repository;
  }

  execute(input: MarkItemCompleteInput) {
    // ToDo: Check that it can actually be completed before saving
    return this.repository.markItemAsComplete(input);
  }
}
