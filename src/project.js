import { compareAsc } from "date-fns";

function createProject(name) {
    let id = crypto.randomUUID();
    let todoList = [];

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

    const toggleTodoFolded = (todoId) => {
        for (const todo of todoList) {
            if (todo.getId() === todoId) {
                todo.toggleFolded();
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

    const toJSON = () => ({
        id, name, 
        todoList : todoList.map(todo => todo.toJSON())
    });

    const setId = (newId) => {id = newId;}

    const sortOnDates = () => {
        todoList.sort((a, b) => compareAsc(a.getDueDate(), b.getDueDate()));
    }

    const priorityEnum = {"" : -1, null : -1, undefined : -1, 
        "None" : 0, "Low" : 1, "Medium" : 2, "High" : 3, "Extreme" : 4};

    const sortOnPriorities = () => {
        todoList.sort((a, b) => {
            return priorityEnum[b.getPriority()] - priorityEnum[a.getPriority()];
        })
    }

    const removeCompleted = () => {
        todoList = todoList.filter(todo => !todo.getCompleted());
    }


    return { getId, getTodoList, toggleTodo, toggleTodoFolded,
        addTodo, removeTodo, displayProject, getName, editTodo,
        toJSON, setId, sortOnDates, sortOnPriorities, removeCompleted
     };
}

export default createProject;