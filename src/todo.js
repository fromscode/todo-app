import { format } from "date-fns";

function createTodo(title, dueDate, priority, notes) {

    let id = crypto.randomUUID();
    let isCompleted = false;
    let projectId;
    let folded = true;         // an attribute to tell dom.js whether to show the notes of this todo or not

    const setProjectId = (pId) => { projectId = pId };
    const getProjectId = () => projectId;

    const getId = () => id;
    const getTitle = () => title;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getCompleted = () => isCompleted;
    const getFolded = () => folded;

    const toggleComplete = () => { isCompleted = !isCompleted; }
    const toggleFolded = () => { folded = !folded; }
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


    const toJSON = () => ({
        id, title, dueDate , priority, notes, isCompleted, projectId, folded
    });

    const setId = (newId) => {id = newId;}

    return {
       // getters
        getId, getTitle, getDueDate, getPriority, getNotes, getCompleted, getProjectId, getFolded,
        // setters
        setTitle, setDueDate, setPriority, setNotes, setProjectId,
        // actions
        toggleComplete, displayTodo, toggleFolded,

        // for local storage
        toJSON, setId
    };

}

export default createTodo;