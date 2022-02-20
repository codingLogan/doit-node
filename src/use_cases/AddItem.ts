import { ToDoList } from "..";
import { ToDoItem, ToDoItemInterface } from "../entities/ToDoItem";
import { ToDoListInterface } from "../entities/ToDoList";

// TODO: something feels wrong about this
// Wasteful to send a full list and items
// just to add more items to it?
// Consider providing an ID for the list instead?
export interface AddItemInputInterface {
  list: ToDoListInterface;
  newItemName: string;
}

export interface AddItemOutputInterface {
  list: ToDoListInterface;
}

export class AddItemInteractor {
  data: AddItemInputInterface;
  list: ToDoList;

  constructor(data: AddItemInputInterface) {
    this.data = data;
    this.list = new ToDoList(data.list.name);
  }

  addItem() {
    this.list.addItem(new ToDoItem(this.data.newItemName));
    const output: AddItemOutputInterface = {
      list: {
        name: this.list.name,
        items: this.list.items.map((item) => ({
          name: item.name,
          done: item.isDone(),
        })),
      },
    };
    return output;
  }
}
