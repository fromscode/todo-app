import { displayProjectName, displayTodos } from './dom.js';
import addAllListeners from './addEventListeners.js';


function initialize(defaultProject) {
    displayProjectName(defaultProject.getProjectName());
    displayTodos(defaultProject.getTodoList());

    addAllListeners(defaultProject);
}

export default initialize;