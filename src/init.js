import displayProject from './dom.js';
import addAllListeners from './addEventListeners.js';
import menu from './assets/icons/menu_open.svg';
import add from './assets/icons/add.svg';

function initialize(project) {
    displayProject(project);
    displayIcons();

    addAllListeners(project);
}

function displayIcons() {
    displayMenuIcon();
    displayAddIcon();
}

function displayMenuIcon() {
    const collapseBtn = document.querySelector(".collapse-btn");
    const icon = document.createElement("img");
    icon.src = menu;
    icon.classList.add("menu-icon");
    collapseBtn.append(icon);
}

function displayAddIcon() {
    const addBtn = document.querySelector(".add-btn");
    const icon = document.createElement("img");
    icon.src = add;
    addBtn.prepend(icon);
}

export default initialize;