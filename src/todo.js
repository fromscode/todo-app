import './styles.css';

function createTodo(title, description, dueDate, priority, notes) {

    let completed = false;

    const getTitle = () => title;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const getNotes = () => notes;
    const getCompleted = () => completed;

    const complete = () => {completed = true;}

    return { getTitle, getDescription, getDueDate, getPriority, getNotes, getCompleted, complete };

}

export default createTodo;