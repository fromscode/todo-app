const tBody = document.querySelector("tbody");
const h1 = document.querySelector("h1");

function displayTodos(project) {
    const todoList = project.getTodoList();
    clearTable();
    for (const todo of todoList) {
        const tr = document.createElement("tr");
        tr.id = todo.getId();

        const title = document.createElement("td");
        title.textContent = todo.getTitle();

        const desc = document.createElement("td");
        desc.textContent = todo.getDescription();

        const dueDate = document.createElement("td");
        dueDate.textContent = todo.getDueDate();

        const priority = document.createElement("td");
        priority.textContent = todo.getPriority();

        const notes = document.createElement("td");
        notes.textContent = todo.getNotes();

        const completed = document.createElement("td");
        completed.textContent = todo.getCompleted() ? "Yes" : "No";

        const toggleButton = document.createElement("td");
        const tBtn = document.createElement("button");
        tBtn.textContent = "Done / Undone";
        tBtn.type = "button";
        tBtn.className = "toggleButton"
        toggleButton.append(tBtn);

        const removeButton = document.createElement("td");
        const rBtn = document.createElement("button");
        rBtn.textContent = "Remove";
        rBtn.type = "button";
        rBtn.className = "removeButton"
        removeButton.append(rBtn);

        tr.append(title, desc, dueDate, priority, notes, completed,
            toggleButton, removeButton);

        tBody.append(tr);
    }
}

function clearTable() {
    tBody.textContent = "";
}

function displayProjectName(project) {
    h1.textContent += project.getName();
}

function displayAddButton(project) {
    const addBtn = document.querySelector(".add-btn");
    addBtn.id = project.getId();
}

function displayProject(project) {
    displayProjectName(project);
    displayTodos(project);
    displayAddButton(project);
}

export default displayProject;
export {displayTodos};