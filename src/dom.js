const ul = document.querySelector(".todo-list");
const h1 = document.querySelector("h1");

function displayTodos(project) {
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
            dueDate.textContent = todo.getDueDate();
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


        li.append(checkboxHolder, todoInfo);

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
export { displayTodos };