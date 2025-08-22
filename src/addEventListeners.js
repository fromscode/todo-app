import { displayTodos } from './dom.js';
import createTodo from './todo.js';

function addToggleListeners(project) {
    const checkboxHolders = document.querySelectorAll(".checkbox-holder");

    checkboxHolders.forEach(holder => {
        holder.addEventListener('click', () => {
            const todoId = holder.parentElement.id;
            project.toggleTodo(todoId);
            displayTodos(project);
            addAllTodoListeners(project);
        })
    })
}

function addRemoveListeners(project) {
    const removeBtns = document.querySelectorAll(".remove-btn");

    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.id;
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
        const div = document.querySelector(".modal");
        div.classList.remove("none");
        document.querySelector("form").id = project.getId();
    })
}

function addCancelAddTaskListener() {
    const modal = document.querySelector(".modal")
    modal.addEventListener('click', (event) => {
        if (event.target.id === "outer-modal") {
            event.target.classList.add("none");
        }
    })
}

function addModalListeners(project) {
    addAddButtonListener(project);
    addCancelAddTaskListener();
}

function addSubmitButtonListener(project) {
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const form = document.querySelector("form");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }


        const title = document.querySelector("#title").value;
        // const description = document.querySelector("#description").value;
        const description = "";
        const dueDate = document.querySelector("#dueDate").value;
        const priority = document.querySelector("#priority").value;
        const notes = document.querySelector("#notes").value;

        const todo = createTodo(title, description, dueDate, 
            priority, notes
        );

        project.addTodo(todo);
        displayTodos(project);
        addAllTodoListeners(project);
        form.reset();
        document.querySelector(".modal").classList.add("none");
    })
}

function addNotesEventListener() {
    const notes = document.querySelector("#notes");
    const form = document.querySelector("form");
    notes.addEventListener("input", () => {

        notes.style.height = "";
        form.style.paddingBottom = "";

        if (notes.value !== "") {
            notes.style.height = notes.scrollHeight + "px";
            form.style.paddingBottom = notes.scrollHeight - 19 + "px";
        }
    })
}

function addFormEventListeners(project) {
    addSubmitButtonListener(project);
    addNotesEventListener();
}

function addSidebarCollapseEventListener() {
    const btn = document.querySelector(".collapse-btn");

    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle("collapsed");
    })
}

function addAllListeners(project) {
    addAllTodoListeners(project);
    addModalListeners(project);
    addFormEventListeners(project);
}

export default addAllListeners;
export {addSidebarCollapseEventListener};