export interface ToDoItemInterface {
  name: string;
  done: boolean;
}

export class ToDoItem {
  name: string;
  private done: boolean;

  constructor(name: string) {
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
