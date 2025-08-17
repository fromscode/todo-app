import { displayProjectName, displayTodos } from './dom.js';

function addToggleListeners(defaultProject) {
    const toggleBtns = document.querySelectorAll(".toggleButton");

    toggleBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            defaultProject.toggleTodo(todoId);
            displayTodos(defaultProject.getTodoList());
            addAllListeners(defaultProject);
        })
    })
}

function addRemoveListeners(defaultProject) {
    const removeBtns = document.querySelectorAll(".removeButton");

    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.parentElement.id;
            console.log(todoId);
            defaultProject.removeTodo(todoId);
            displayTodos(defaultProject.getTodoList());
            addAllListeners(defaultProject);
        })
    })
}

function addAllListeners(defaultProject) {
    addToggleListeners(defaultProject);
    addRemoveListeners(defaultProject);
}

export default addAllListeners;