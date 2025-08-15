function createProject() {
    let id = crypto.randomUUID();
    const todoList = [];

    const getId = () => id;
    const getTodoList = () => todoList;

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


    return { getId, getTodoList, toggleTodo, 
        addTodo, removeTodo };
}

export default createProject;