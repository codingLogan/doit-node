import { ToDoItemInterface } from "./ToDoItemInterface";

export interface ToDoListInterface {
  id: string;
  name: string;
  items: ToDoItemInterface[];
}
