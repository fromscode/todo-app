import deleteIcon from './assets/icons/delete.svg';
import editIcon from './assets/icons/edit.svg';
import seeIcon from './assets/icons/see.svg';
import unseeIcon from './assets/icons/unsee.svg';
import { intlFormatDistance } from 'date-fns';

const ul = document.querySelector(".todo-list");
const h1 = document.querySelector("h1");

function displayTodos(project) {
    if (!project) return;
    const todoList = project.getTodoList();
    clearTodos();
    for (const todo of todoList) {

        const li = document.createElement("li");
        li.id = todo.getId();
        li.classList.add("todo-card")

        const checkboxHolder = document.createElement("div");
        checkboxHolder.classList.add("checkbox-holder");

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");

        checkboxHolder.append(checkbox);


        const todoInfo = document.createElement("div");
        todoInfo.classList.add("todo-info");


        const title = document.createElement("div");
        title.textContent = todo.getTitle();
        title.classList.add("todo-title");

        const subtitle = document.createElement("div");
        subtitle.classList.add("todo-subtitle");

        if (todo.getDueDate() !== null && todo.getDueDate() !== "") {
            const dueDate = document.createElement("div");
            const interval = intlFormatDistance(todo.getDueDate(), Date.now())
            if (interval.endsWith("ago") || interval.endsWith("now")) {
                dueDate.textContent = "Today";
                dueDate.classList.add("Extreme");
            }
            else if (interval.startsWith("to")) {
                dueDate.classList.add("High");
                dueDate.textContent = "Tommorow";
            }
            else if (interval.endsWith("days")) {
                dueDate.classList.add("Medium");
                dueDate.textContent = interval[0].toUpperCase() + interval.slice(1);
            }
            else {
                dueDate.classList.add("Low");
                dueDate.textContent = interval[0].toUpperCase() + interval.slice(1);
            }
            dueDate.classList.add("dueDate");

            subtitle.append(dueDate);
        }

        const priority = document.createElement("div");
        priority.textContent = todo.getPriority();
        priority.classList.add("priority");
        if (priority.textContent == "None") {
            priority.textContent = "";
        }
        else {
            priority.classList.add(todo.getPriority());
        }

        subtitle.append(priority);

        if (todo.getCompleted()) {
            checkbox.classList.add("selected");
            checkbox.classList.add(todo.getPriority());
            todoInfo.classList.add("completed");

        }


        todoInfo.append(title, subtitle);

        const seeBtn = document.createElement("button");
        seeBtn.type = "button";
        const seeIconImg = document.createElement("img");
        seeBtn.classList.add("see-btn");

        const notes = document.createElement("div");
        notes.textContent = todo.getNotes();
        notes.classList.add("todo-notes");
        todoInfo.appendChild(notes);

        if (todo.getFolded()) {
            seeIconImg.src = seeIcon;
            notes.classList.add("none");
        }
        else {
            seeIconImg.src = unseeIcon;
            seeBtn.classList.add("open")
        }
        seeBtn.append(seeIconImg);

        const editBtn = document.createElement("button");
        editBtn.type = "button";
        const editIconImg = document.createElement("img");
        editIconImg.src = editIcon;
        editBtn.append(editIconImg);
        editBtn.classList.add("edit-btn");

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        const icon = document.createElement("img");
        icon.src = deleteIcon;
        removeBtn.append(icon);
        removeBtn.classList.add("remove-btn");

        li.append(checkboxHolder, todoInfo, seeBtn, editBtn, removeBtn);

        ul.append(li);
    }
}

function clearTodos() {
    ul.textContent = "";
}

function displayProjectName(project) {
    if (!project) return;
    h1.textContent = project.getName();
}

function displayAddButton(project) {
    if (!project) return;
    const addBtn = document.querySelector(".add-btn");
    addBtn.id = project.getId();
}

function displayProject(project) {
    displayProjectName(project);
    displayTodos(project);
    displayAddButton(project);
}

function displayEditForm(projectId, todoId, title, dueDate, priority, notes) {
    const editForm = document.querySelector("#edit-form");
    editForm.querySelector("#title").value = title;
    editForm.querySelector("#dueDate").value = dueDate;
    if (priority) editForm.querySelector("#priority").value = priority;
    editForm.querySelector("#notes").value = notes;

    document.querySelector("#edit-modal").classList.remove("none");
    const hidden = editForm.querySelector("#hidden");
    hidden.value = todoId;
    editForm.querySelector(".done-edit").id = projectId;
}

export default displayProject;
export { displayTodos, displayEditForm };