function createTodo(title, description, dueDate, priority, notes) {

    let id = crypto.randomUUID();
    let isCompleted = false;
    let projectId;

    const setProjectId = (pId) => { projectId = pId };
    const getProjectId = () => projectId;

    const getId = () => id;
    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getCompleted = () => isCompleted;

    const toggleComplete = () => { isCompleted = !isCompleted; }
    const displayTodo = () => {
        console.log("Id: " + id);
        console.log("Title: " + title);
        console.log("Description: " + description);
        console.log("Due Date: " + dueDate);
        console.log("Priority: " + priority);
        console.log("Notes: " + notes);
        console.log("Project Id: " + projectId);
        console.log("Completed?:" + isCompleted);
    }

    return {
        setProjectId, getProjectId, getId, getTitle, getDescription,
        getDueDate, getPriority, getNotes, getCompleted, toggleComplete,
        displayTodo
    };

}

export default createTodo;