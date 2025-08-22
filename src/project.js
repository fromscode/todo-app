function createProject(name) {
    let id = crypto.randomUUID();
    const todoList = [];

    const getId = () => id;
    const getTodoList = () => todoList;
    const getName = () => name;

    const addTodo = (todo) => {
        todo.setProjectId(id);
        todoList.push(todo);
    }

    const removeTodo = (todoId) => {
        const indexToRemove = todoList.findIndex(
            todo => todo.getId() === todoId);

        if (indexToRemove !== -1) {
            todoList.splice(indexToRemove, 1);
        }
    }

    const toggleTodo = (todoId) => {
        for (const todo of todoList) {
            if (todo.getId() === todoId) {
                todo.toggleComplete();
                break;
            }
        }
    }

    const displayProject = () => {
        console.log("Project Id: " + id);
        for (const todo of todoList) {
            todo.displayTodo();
        }
    }

    const editTodo = (todoId, title, dueDate, priority, notes) => {
        const todo = todoList.find(temp => temp.getId() === todoId);
        todo.setTitle(title);
        todo.setDueDate(dueDate);
        todo.setPriority(priority);
        todo.setNotes(notes);
    }


    return { getId, getTodoList, toggleTodo, 
        addTodo, removeTodo, displayProject, getName, editTodo };
}

export default createProject;