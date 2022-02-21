import { ToDoItem, ToDoItemInterface } from "./ToDoItem";

export interface ToDoListInterface {
  id: string | null;
  name: string;
  items: ToDoItemInterface[];
}

export class ToDoList {
  id: string | null;
  name: string;
  items: ToDoItem[];

  constructor(name: string) {
    this.id = null;
    this.name = name;
    this.items = [];
  }

  addItem(item: ToDoItem) {
    this.items.push(item);
  }
}
