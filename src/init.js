import displayProject from './dom.js';
import addAllListeners from './addEventListeners.js';


function initialize(project) {
    displayProject(project);

    addAllListeners(project);
}

export default initialize;