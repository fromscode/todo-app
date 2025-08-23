import displayProject from './dom.js';
import addAllListeners, { addAllDynamicListeners } from './addEventListeners.js';
import menu from './assets/icons/menu_open.svg';
import add from './assets/icons/add.svg';
import addProject from './assets/icons/add_project.svg';
import projectIconRed from './assets/icons/project_red.svg';
import projectIconYellow from './assets/icons/project_yellow.svg';
import projectIconBlack from './assets/icons/project_black.svg';
import projectIconGreen from './assets/icons/project_green.svg';
import allProjectIcons from './assets/icons/all_projects.svg';

function initialize(projectList, project) {
    displayProject(project);
    displayIcons();
    displayAllProjectNames(projectList, project);
    addAllListeners(project);
}

function reload(projectList, project) {
    displayProject(project);
    displayIcons();
    displayAllProjectNames(projectList, project);
    addAllDynamicListeners(project);
}

function displayIcons() {
    displayMenuIcon();
    displayAddIcon();
}

function displayMenuIcon() {
    const collapseBtn = document.querySelector(".collapse-btn");
    const existingIcon = collapseBtn.querySelector("img");
    if (existingIcon) existingIcon.remove();
    const icon = document.createElement("img");
    icon.src = menu;
    icon.classList.add("menu-icon");
    collapseBtn.append(icon);
}

function displayAddIcon() {
    const addBtn = document.querySelector(".add-btn");
    const existingIcon = addBtn.querySelector("img");
    if (existingIcon) existingIcon.remove();
    const icon = document.createElement("img");
    icon.src = add;
    addBtn.prepend(icon);
}

function displayAllProjectNames(projectList, defaultProject) {
    const ul = document.querySelector(".project-list");
    ul.querySelector("#all-project-icon").src = allProjectIcons;
    const existingNamesList = ul.querySelectorAll("li");
    existingNamesList.forEach(name => name.remove());
    ul.classList.add("flex", "column");
    const projectIcons = [projectIconYellow, projectIconRed, projectIconGreen, projectIconBlack];
    let index = 0;

    for (const project of projectList.list) {
        const li = document.createElement("li");
        li.classList.add("project-name");
        const icon = document.createElement("img");
        icon.src = projectIcons[index];
        index = (index + 1) % 4;
        li.append(icon);

        const projectName = document.createElement("span");
        projectName.textContent = project.getName();
        li.appendChild(projectName);
        li.id = project.getId();
        ul.append(li);
        if(project.getId() === defaultProject.getId()) {
            li.classList.add("current");
        }
    }

    const li = document.createElement("li");
    li.classList.add("add-project-name");
    const icon = document.createElement("img");
    icon.src = addProject;
    li.append(icon);

    const addProjectSpan = document.createElement("span");
    addProjectSpan.textContent = "Add project";
    li.appendChild(addProjectSpan);
    ul.append(li);
}

export default initialize;
export {reload};