import { ToDoItem } from "./ToDoItem";

export class ToDoList {
  name: string;
  items: ToDoItem[];

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }

  addItem(item: ToDoItem) {
    this.items.push(item);
  }
}
