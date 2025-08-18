const ul = document.querySelector(".todo-list");
const h1 = document.querySelector("h1");

function displayTodos(project) {
    const todoList = project.getTodoList();
    clearTodos();
    for (const todo of todoList) {

        const li = document.createElement("li");
        li.id = todo.getId();

        const title = document.createElement("div");
        title.textContent = todo.getTitle();

        const secondDiv = document.createElement("div");
        secondDiv.classList.add("todo-info");

        const dueDate = document.createElement("div");
        dueDate.textContent = todo.getDueDate();

        const priority = document.createElement("div");
        priority.textContent = todo.getPriority();

        secondDiv.append(dueDate, priority);

        const completed = document.createElement("td");

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

        li.append(title, secondDiv);

        ul.append(li);
    }
}

function clearTodos() {
    ul.textContent = "";
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