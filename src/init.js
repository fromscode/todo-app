import displayProject from './dom.js';
import addAllListeners from './addEventListeners.js';
import menu from './assets/icons/menu_open.svg';
import add from './assets/icons/add.svg';

function initialize(projectList, project) {
    displayProject(project);
    displayIcons();

    addAllListeners(project);
    displayAllProjectNames(projectList);
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

function displayAllProjectNames(projectList) {
    const ul = document.querySelector(".project-list");

    for (const project of projectList) {
        const li = document.createElement("li");
        li.classList.add("project-name");
        li.textContent = project.getName();
        ul.append(li);
    }
}

export default initialize;