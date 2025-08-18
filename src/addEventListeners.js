import { displayTodos } from './dom.js';

function addToggleListeners(project) {
    const toggleBtns = document.querySelectorAll(".toggleButton");

    toggleBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            project.toggleTodo(todoId);
            displayTodos(project);
            addAllTodoListeners(project);
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
            addAllTodoListeners(project);
        })
    })
}

function addAllTodoListeners(project) {
    addToggleListeners(project);
    addRemoveListeners(project);
}

function addAddButtonListener(project) {
    const addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener('click', () => {
        const form = document.querySelector("form");
        form.style.display = "flex";
    })
}

function addAllListeners(project) {
    addAllTodoListeners(project);
    addAddButtonListener(project);
}

export default addAllListeners;