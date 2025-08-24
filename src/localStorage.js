import { format } from "date-fns";
import createProject from "./project.js";
import projectList from "./projectList.js";
import createTodo from "./todo.js";

const list = new projectList();

function checkPopulation() {
    if (!localStorage.getItem("projectList")) {
        populateStorage();
    }
    else {
        accessStorage();
    }
}

function populateStorage() {        // when accessing first time
    const defaultProject = createProject("Default");

    list.addProject(defaultProject);

    localStorage.setItem("projectList", JSON.stringify(list.toJSON()));
}

function accessStorage() {
    const rawJSONList = JSON.parse(localStorage.getItem("projectList"));
    console.log(rawJSONList);
    for (const rawProject of rawJSONList.list) {
        const project = createProject(rawProject.name);
        project.setId(rawProject.id);
        for (const rawTodo of rawProject.todoList) {
            console.log(rawJSONList);
            const todo = createTodo(rawTodo.title, "", rawTodo.priority, rawTodo.notes);
            if (rawTodo.isCompleted) {
                todo.toggleComplete();
            }
            if (!rawTodo.folded) {
                todo.toggleFolded();
            }
            if (rawTodo.dueDate !== "") todo.setDueDate(format(rawTodo.dueDate, "yyyy-MM-dd"));
            todo.setId(rawTodo.id);
            project.addTodo(todo);
        }

        list.addProject(project);
    }
}

function updateLocalStorage() {
    localStorage.setItem("projectList", JSON.stringify(list.toJSON()));
}

checkPopulation();

export default list;
export {updateLocalStorage};