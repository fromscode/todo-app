import { displayTodos, displayEditForm } from './dom.js';
import createTodo from './todo.js';
import menu from './assets/icons/menu.svg';
import menuOpen from './assets/icons/menu_open.svg';
import projectList from './index.js';
import initialize from './init.js';

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
                modal.querySelector("#hidden").value = todoId;
            }
        })
    })

    addRemoveModalEventListener(project);
}

function addRemoveModalEventListener(project) {
    const modal = document.querySelector("#outer-remove-btn-modal");
    const removeBtn = document.querySelector("#modal-remove-btn");
    removeBtn.addEventListener('click', () => {
        modal.classList.add("none");
        const todoId = modal.querySelector("#hidden").value;
        project.removeTodo(todoId);
        displayTodos(project);
        addAllTodoListeners(project);
    });

    const outerModal = document.querySelector("#outer-remove-btn-modal");
    outerModal.addEventListener('click', () => {
        modal.classList.add("none");
    });
}

function addEditButtonListeners(project) {
    const editBtnList = document.querySelectorAll(".edit-btn");
    editBtnList.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            const todoId = parent.id;
            const title = parent.querySelector(".todo-title").textContent;
            const dueDate = parent.querySelector(".dueDate") ? parent.querySelector(".dueDate").textContent : "";
            const priority = parent.querySelector(".priority").textContent;
            const notes = parent.querySelector(".todo-notes").textContent;
            console.log("in edit button listener" + todoId);

            displayEditForm(project, todoId, title, dueDate, priority, notes);
        })
    })
}

function addEditFormButtonListener(project) {
    const button = document.querySelector("#done-edit");
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const form = button.parentElement;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }


        const title = form.querySelector("#title").value;
        const dueDate = form.querySelector("#dueDate").value;
        const priority = form.querySelector("#priority").value;
        const notes = form.querySelector("#notes").value;
        const todoId = form.querySelector("#hidden").value;
        console.log("in edit form listener " + todoId);
        console.log("in edit form listener " + title);
        console.log("in edit form listener " + priority);
        project.editTodo(todoId, title, dueDate, priority, notes);

        displayTodos(project);
        addAllTodoListeners(project);
        form.reset();
        document.querySelector("#edit-modal").classList.add("none");
    })


    const modal = document.querySelector("#edit-modal");
    modal.addEventListener('click', (event) => {
        if (event.target.id === "edit-modal") {
            modal.classList.add("none");
        }
    })
}

function addSeeButtonListeners(project) {
    const seeBtnList = document.querySelectorAll(".see-btn");
    seeBtnList.forEach(button => {
        button.addEventListener('click', () => {
            const todoId = button.parentElement.id;
            project.toggleTodoFolded(todoId);
            displayTodos(project);
            addAllTodoListeners(project);
        })
    })
}

function addAllTodoListeners(project) {
    addToggleListeners(project);
    addRemoveListeners(project);
    addEditButtonListeners(project);
    addSeeButtonListeners(project);
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
        if (event.target.id == "outer-modal") {
            event.target.classList.add("none");
        }
    })
}

function addModalListeners(project) {
    addAddButtonListener(project);
    addCancelAddTaskListener();
    addEditFormButtonListener(project);
}

function addSubmitButtonListener(project) {
    const submitBtn = document.querySelector("#submit-btn");
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const form = submitBtn.parentElement;

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
    const notesList = document.querySelectorAll("#notes");
    notesList.forEach(notes => {
        const form = notes.parentElement;
        notes.addEventListener("input", () => {

            notes.style.height = "";
            form.style.paddingBottom = "";

            if (notes.value !== "") {
                notes.style.height = notes.scrollHeight + "px";
                form.style.paddingBottom = notes.scrollHeight - 19 + "px";
            }
        })
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
        btn.parentElement.querySelector(".project-list").classList.toggle("flex");
        btn.parentElement.querySelector(".project-list").classList.toggle("column");
        btn.parentElement.querySelector(".project-list").classList.toggle("none");
        btn.firstChild.src = btn.parentElement.classList.length > 1 ? menu : menuOpen;
        console.log(menu);
    })
}

function addProjectNameListener() {
    const projectNameList = document.querySelectorAll(".project-name");
    projectNameList.forEach(projectName => {
        projectName.addEventListener('click', () => {
            const projectId = projectName.getId();
            const project = projectId.find(temp => temp.getId() === projectId);
            initialize(projectList, project);
        })
    })
}

function addAllListeners(project) {
    addAllTodoListeners(project);
    addModalListeners(project);
    addFormEventListeners(project);
    addProjectNameListener();
}

export default addAllListeners;
export { addSidebarCollapseEventListener };