import { displayTodos } from './dom.js';

function addToggleListeners(project) {
    const toggleBtns = document.querySelectorAll(".toggleButton");

    toggleBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            project.toggleTodo(todoId);
            displayTodos(project);
            addAllListeners(project);
        })
    })
}

function addRemoveListeners(project) {
    const removeBtns = document.querySelectorAll(".removeButton");

    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            project.removeTodo(todoId);
            displayTodos(project);
            addAllListeners(project);
        })
    })
}

function addAllListeners(project) {
    addToggleListeners(project);
    addRemoveListeners(project);
}

export default addAllListeners;