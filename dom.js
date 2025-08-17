const tBody = document.querySelector("tbody");

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

        tr.append(title, desc, dueDate, priority, notes, completed);

        tBody.append(tr);
    }
}

function clearTable() {
    tBody.textContent = "";
}

export default displayTodos;