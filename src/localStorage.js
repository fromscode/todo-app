import { format } from "date-fns";
import createProject from "./project";
import projectList from "./projectList";
import createTodo from "./todo";

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

    const todo1 = createTodo("lmao2", Date.now(),
    "Extreme", "hell yea!"
    );

    defaultProject.addTodo(todo1);
    list.addProject(defaultProject);

    console.log(list.toJSON());

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
            const todo = createTodo(rawTodo.title, format(rawTodo.dueDate, "yyyy-MM-dd"), rawTodo.priority, rawTodo.notes);
            if (rawTodo.completed) {
                todo.toggleComplete();
            }
            if (!rawTodo.folded) {
                todo.toggleFolded();
            }
            todo.setId(rawTodo.id);
            project.addTodo(todo);
        }

        list.addProject(project);
    }
}

checkPopulation();

export default list;