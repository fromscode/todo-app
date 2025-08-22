function createTodo(title, dueDate, priority, notes) {

    let id = crypto.randomUUID();
    let isCompleted = false;
    let projectId;

    const setProjectId = (pId) => { projectId = pId };
    const getProjectId = () => projectId;

    const getId = () => id;
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getCompleted = () => isCompleted;

    const toggleComplete = () => { isCompleted = !isCompleted; }
    const displayTodo = () => {
        console.log("Id: " + id);
        console.log("Title: " + title);
        console.log("Due Date: " + dueDate);
        console.log("Priority: " + priority);
        console.log("Notes: " + notes);
        console.log("Project Id: " + projectId);
        console.log("Completed?:" + isCompleted);
    }

    const setTitle = (newTitle) => {title = newTitle};
    const setDueDate = (newDate) => { dueDate = newDate };
    const setPriority = (newPriority) => { priority = newPriority };
    const setNotes = (newNotes) => { notes = newNotes };

    return {
       // getters
        getId, getTitle, getDueDate, getPriority, getNotes, getCompleted, getProjectId,
        // setters
        setTitle, setDueDate, setPriority, setNotes, setProjectId,
        // actions
        toggleComplete, displayTodo
    };

}

export default createTodo;