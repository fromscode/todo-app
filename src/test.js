// This file is only for testing purposes

import projectList from "./projectList.js";
import createTodo from "./todo.js";
import createProject from "./project.js";
import { format } from "date-fns";

const list = new projectList();
const project = createProject();

const t1 = createTodo("t1", format("08/24/2025", "yyyy-MM-dd"), "None");
const t2 = createTodo("t2", format("08/25/2025", "yyyy-MM-dd"), "Medium");
const t3 = createTodo("t3", format("08/23/2025", "yyyy-MM-dd"));
project.addTodo(t1);
project.addTodo(t2);
project.addTodo(t3);

for (const todo of project.getTodoList()) {
    console.log(todo.getDueDate());
}

project.sortOnDates();

console.log("After sorting: ");

for (const todo of project.getTodoList()) {
    console.log(todo.getDueDate() + " " + todo.getPriority());
}

console.log("Sort on priorities: ")

project.sortOnPriorities();

for (const todo of project.getTodoList()) {
    console.log(todo.getDueDate() + " " + todo.getPriority());
}

console.log("Rmove Completed: ")
t1.toggleComplete();
// t2.toggleComplete();

project.removeCompleted();

for (const todo of project.getTodoList()) {
    console.log(todo.getDueDate() + " " + todo.getPriority() + " " + todo.getCompleted());
}