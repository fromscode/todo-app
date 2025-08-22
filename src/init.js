import displayProject from './dom.js';
import addAllListeners from './addEventListeners.js';
import menu from './assets/icons/menu_open.svg';


function initialize(project) {
    displayProject(project);
    displayIcons();

    addAllListeners(project);
}

function displayIcons() {
    const collapseBtn = document.querySelector(".collapse-btn");
    const icon = document.createElement("img");
    icon.src = menu;
    icon.classList.add("menu-icon");
    collapseBtn.append(icon);
}

export default initialize;