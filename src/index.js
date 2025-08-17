import './styles.css';
import createTodo from './todo.js';
import createProject from './project.js';
import { displayProjectName, displayTodos } from '../dom.js';

const defaultProject = createProject("default");

const todo1 = createTodo("lmao", "just laugh brother", "whenever",
    "p9", "hell yea!"
);

defaultProject.addTodo(todo1);

displayProjectName(defaultProject.getProjectName());
displayTodos(defaultProject.getTodoList());

function addAllListeners() {
    const allBtns = document.querySelectorAll(".toggleButton");

    allBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            defaultProject.toggleTodo(todoId);
            displayTodos(defaultProject.getTodoList());
            addAllListeners();
        })
    })
}

addEventListener('DOMContentLoaded', addAllListeners);
