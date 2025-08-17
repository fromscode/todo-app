import './styles.css';
import createTodo from './todo.js';
import createProject from './project.js';
import { displayProjectName, displayTodos } from '../dom.js';

const defaultProject = createProject("default");

const todo1 = createTodo("lmao", "just laugh brother", "whenever",
    "p9", "hell yea!"
);
const todo2 = createTodo("lmao2", "just laugh brother", "whenever",
    "p9", "hell yea!"
);

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);

displayProjectName(defaultProject.getProjectName());
displayTodos(defaultProject.getTodoList());

function addToggleListeners() {
    const toggleBtns = document.querySelectorAll(".toggleButton");

    toggleBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            defaultProject.toggleTodo(todoId);
            displayTodos(defaultProject.getTodoList());
            addAllListeners();
        })
    })
}

function addRemoveListeners() {
    const removeBtns = document.querySelectorAll(".removeButton");

    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            defaultProject.removeTodo(todoId);
            displayTodos(defaultProject.getTodoList());
            addAllListeners();
        })
    })
}

function addAllListeners() {
    addToggleListeners();
    addRemoveListeners();
}

addEventListener('DOMContentLoaded', addAllListeners);
