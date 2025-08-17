import { displayProjectName, displayTodos } from './dom.js';
import addAllListeners from './addEventListeners.js';


function initialize(project) {
    displayProjectName(project);
    displayTodos(project);

    addAllListeners(project);
}

export default initialize;