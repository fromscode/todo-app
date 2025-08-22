import { displayTodos } from './dom.js';
import createTodo from './todo.js';
import menu from './assets/icons/menu.svg';
import menuOpen from './assets/icons/menu_open.svg';

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

            const div = button.parentElement.querySelector(".todo-info");

            if (div.classList.length > 1) {
                project.removeTodo(todoId);
                displayTodos(project);
                addAllTodoListeners(project);
            }
            else {
                console.log("res");
                const modal = document.querySelector("#outer-remove-btn-modal");
                modal.classList.remove("none");
                addRemoveModalEventListener(modal, project, todoId);
            }
        })
    })
}

function addRemoveModalEventListener(modal, project, todoId) {
    const removeBtn = document.querySelector("#modal-remove-btn");
    removeBtn.addEventListener('click', () => {
        modal.classList.add("none");
        project.removeTodo(todoId);
        displayTodos(project);
        addAllTodoListeners(project);
    });

    const outerModal = document.querySelector("#outer-remove-btn-modal");
    outerModal.addEventListener('click', () => {
        modal.classList.add("none");
    });
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
        const dueDate = document.querySelector("#dueDate").value;
        const priority = document.querySelector("#priority").value;
        const notes = document.querySelector("#notes").value;

        const todo = createTodo(title, dueDate,
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
        btn.textContent = "";
        const img = document.createElement("img");
        img.src = btn.parentElement.classList.length > 1 ? menuOpen : menu;
        btn.append(img);

        console.log(menu);
    })
}

function addAllListeners(project) {
    addAllTodoListeners(project);
    addModalListeners(project);
    addFormEventListeners(project);
}

export default addAllListeners;
export { addSidebarCollapseEventListener };