const tBody = document.querySelector("tbody");
const h1 = document.querySelector("h1");

function displayTodos(todoList) {
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
        const btn = document.createElement("button");
        btn.textContent = "Done / Undone";
        btn.type = "button";
        btn.className = "toggleButton"
        toggleButton.append(btn);

        tr.append(title, desc, dueDate, priority, notes, completed, toggleButton);

        tBody.append(tr);
    }
}

function clearTable() {
    tBody.textContent = "";
}

function displayProjectName(projectName) {
    h1.textContent += projectName;
}

export {displayProjectName, displayTodos};