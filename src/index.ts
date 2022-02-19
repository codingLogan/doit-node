function printMsg() {
  console.log("This is a message from the demo package");
}

import { ToDoList } from "./entities/ToDoList";

// Public API
export { printMsg, ToDoList };
