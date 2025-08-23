import displayProject from './dom.js';
import addAllListeners from './addEventListeners.js';
import menu from './assets/icons/menu_open.svg';
import add from './assets/icons/add.svg';
import projectIcon from './assets/icons/project.svg';
import allProjectIcons from './assets/icons/all_projects.svg';

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
    ul.querySelector("#all-project-icon").src = allProjectIcons;
    ul.classList.add("flex", "column");

    for (const project of projectList) {
        const li = document.createElement("li");
        li.classList.add("project-name");
        const icon = document.createElement("img");
        icon.src = projectIcon;
        li.append(icon);

        const projectName = document.createElement("span");
        projectName.textContent = project.getName();
        li.appendChild(projectName);
        li.id = project.getId();
        ul.append(li);
    }
}

export default initialize;