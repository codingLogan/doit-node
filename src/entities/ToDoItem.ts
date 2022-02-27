export class ToDoItem {
  name: string;
  private done: boolean;

  constructor(name: string) {
    if (!name) {
      throw new Error("ToDoItem->constructor must have a name");
    }

    this.name = name;
    this.done = false;
  }

  markAsDone() {
    this.done = true;
  }

  isDone() {
    return this.done;
  }
}
