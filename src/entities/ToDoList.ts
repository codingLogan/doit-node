import { ToDoItem } from "./ToDoItem";

export class ToDoList {
  id: string | null;
  name: string;
  items: ToDoItem[];

  constructor(name: string) {
    if (!name) {
      throw new Error("ToDoList->constructor must have a name");
    }

    this.id = null;
    this.name = name;
    this.items = [];
  }

  addItem(item: ToDoItem) {
    this.items.push(item);
  }
}
