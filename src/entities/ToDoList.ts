import { ToDoItem, ToDoItemInterface } from "./ToDoItem";

export interface ToDoListInterface {
  name: string;
  items: ToDoItemInterface[];
}

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
