import { displayTodos, displayEditForm } from './dom.js';
import createTodo from './todo.js';
import menu from './assets/icons/menu.svg';
import menuOpen from './assets/icons/menu_open.svg';
import projectList from './localStorage.js';
import {reload} from './init.js';
import { format } from 'date-fns';
import { updateLocalStorage } from './localStorage.js';

function addToggleListeners(project) {
    // console.log("project: " + project);
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

            const div = button.parentElement.querySelector(".todo-info");

            if (div.classList.length > 1) {
                project.removeTodo(todoId);
                displayTodos(project);
                addAllTodoListeners(project);
            }
            else {
                const modal = document.querySelector("#outer-remove-btn-modal");
                modal.classList.remove("none");
                modal.querySelector("#hidden").value = todoId;
            }
        })
    })

    addRemoveModalEventListener(project);
}

function addRemoveModalEventListener() {
    const modal = document.querySelector("#outer-remove-btn-modal");
    const removeBtn = document.querySelector("#modal-remove-btn");
    removeBtn.addEventListener('click', () => {
        const projectId = document.querySelector(".add-btn").id;
        const project = projectList.getProject(projectId);
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

function addEditButtonListeners() {
    const editBtnList = document.querySelectorAll(".edit-btn");
    editBtnList.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = document.querySelector(".add-btn").id;
            const parent = button.parentElement;
            const todoId = parent.id;
            const title = parent.querySelector(".todo-title").textContent;
            const dueDate = parent.querySelector(".dueDate");
            let actualDueDate = null;
            if (dueDate) {
                actualDueDate = dueDate.querySelector("div").textContent;
            }
            const priority = parent.querySelector(".priority").textContent;
            const notes = parent.querySelector(".todo-notes").textContent;

            displayEditForm(projectId, todoId, title, actualDueDate, priority, notes);
        })
    })
}

function addEditFormButtonListener() {
    const button = document.querySelector(".done-edit");
    button.addEventListener('click', (event) => {
        event.preventDefault();

        const form = button.parentElement;

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const projectId = form.querySelector(".done-edit").id;
        const project = projectList.getProject(projectId);


        const title = form.querySelector("#title").value;
        const dueDate = form.querySelector("#dueDate").value;
        const priority = form.querySelector("#priority").value;
        const notes = form.querySelector("#notes").value;
        const todoId = form.querySelector("#hidden").value;
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
    // console.log("project" + project);
    addToggleListeners(project);
    addRemoveListeners(project);
    addEditButtonListeners(project);
    addSeeButtonListeners(project);
}

function addAddButtonListener() {
    const addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener('click', () => {
        const div = document.querySelector(".modal");
        div.classList.remove("none");
        const dueDate = div.querySelector("#dueDate")
        dueDate.setAttribute("min", format(Date.now(), "yyyy-MM-dd"));
        dueDate.value = format(Date.now(), "yyyy-MM-dd");
        div.querySelector("form").id = addBtn.id;
        div.querySelector("#title").focus();
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

function addSubmitButtonListener() {
    const submitBtn = document.querySelector("#submit-btn");

    submitBtn.addEventListener('click', (event) => {
        const projectId = submitBtn.parentElement.id;
        const project = projectList.getProject(projectId);
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
    });
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
        btn.parentElement.querySelector("span").classList.toggle("none");
        btn.parentElement.querySelector("span").classList.toggle("flex");
        btn.parentElement.parentElement.classList.toggle("collapsed");
        btn.parentElement.parentElement.querySelector(".project-list").classList.toggle("flex");
        btn.parentElement.parentElement.querySelector(".project-list").classList.toggle("column");
        btn.parentElement.parentElement.querySelector(".project-list").classList.toggle("none");
        btn.firstChild.src = btn.parentElement.classList.length > 1 ? menu : menuOpen;
    })
}

function addProjectNameListener() {
    const projectNameList = document.querySelectorAll(".project-name");
    projectNameList.forEach(projectName => {
        projectName.addEventListener('click', (event) => {
            if (event.target.closest("button")) return; 
            const projectId = projectName.id;
            const project = projectList.getProject(projectId);
            reload(projectList, project);
        })
    })
}

function addCloseProjectEventListener() {
    const closeBtnList = document.querySelectorAll(".close-btn");
    closeBtnList.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.parentElement.id;
            projectList.removeProject(projectId);
            reload(projectList);
            displayTodos(projectList.list[0]);
        })
    })
}

function addAddProjectListener() {
    const addProject = document.querySelector(".add-project-name");
    addProject.addEventListener('click', () => {
        addProject.style.display = "none";
        const form = document.querySelector(".sidebar form");
        form.toggleAttribute("style");
        form.querySelector("#project-name").focus();
    });
}

function addAddProjectFormListener() {
    const form = document.querySelector(".sidebar form");
    const submitBtn = form.querySelector("button");
    submitBtn.addEventListener('click', () => {
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const projectName = form.querySelector("#project-name").value;
        if (projectName) {
            const project = projectList.addProject(projectName);
            reload(projectList, project);
        }
        form.reset();
        form.style.display = "none";
        document.querySelector(".add-project-name").toggleAttribute("style");
    })
}

function addSortOnPrioritiesListener() {
    const datesBtn = document.querySelector(".sort-priorities");

    datesBtn.addEventListener('click', () => {
        console.log("test");
        const pId = document.querySelector(".add-btn").id;
        const project = projectList.getProject(pId);
        project.sortOnPriorities();
        displayTodos(project);
        addAllTodoListeners(project);
    })

}

function addSortOnDatesListener() {
    const datesBtn = document.querySelector(".sort-dates");

    datesBtn.addEventListener('click', () => {
        console.log("test");
        const pId = document.querySelector(".add-btn").id;
        const project = projectList.getProject(pId);
        project.sortOnDates();
        displayTodos(project);
        addAllTodoListeners(project);
    })

}

function addClearBtnEventListeners() {
    const clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('click', () => {
        const pId = document.querySelector(".add-btn").id;
        const project = projectList.getProject(pId);
        project.removeCompleted();
        displayTodos(project);
        addAllTodoListeners(project);
    })
}

function addAllRightButtonListeners() {
    addSortOnDatesListener();
    addSortOnPrioritiesListener();
    addClearBtnEventListeners();
}

function addAllListeners(project) {
    addAllTodoListeners(project);
    addModalListeners(project);
    addFormEventListeners(project);
    addProjectNameListener();
    addCloseProjectEventListener();
    addAddProjectListener();
    addAddProjectFormListener();

    addAllRightButtonListeners();
}

function addAllDynamicListeners(project) {
    addAllTodoListeners(project);
    addProjectNameListener();
    addAddProjectListener();
    addCloseProjectEventListener();
}

export default addAllListeners;
export { addSidebarCollapseEventListener, addAllDynamicListeners };