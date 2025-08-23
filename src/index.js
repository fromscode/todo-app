import './styles/reset.css';
import './styles/styles.css';
import './styles/fonts.css';
import './styles/layout.css';
import './styles/variables.css';
import './styles/theme.css';
import './styles/form.css';

import createTodo from './todo.js';
import createProject from './project.js';
import initialize from './init.js';
import { addSidebarCollapseEventListener } from './addEventListeners.js';

addSidebarCollapseEventListener();

const defaultProject = createProject("Default");
const project2 = createProject("another project");
const project3 = createProject("project 3");

const todo1 = createTodo("lmao2", "12-18-2022",
    "Extreme", "hell yea!"
);

const todo2 = createTodo("lmao", "12-18-2022",
    "High", "hell yea!"
);

const todo3 = createTodo("lmao2", "12-18-2022",
    "Medium", "hell yea!"
);

const todo4 = createTodo("lmao2", "12-18-2022",
    "Low", "hell yea!"
);

const todo5 = createTodo("lmao2", "12-18-2022",
    "None", "hell yea!"
);


defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
defaultProject.addTodo(todo4);
defaultProject.addTodo(todo5);

const projectList = [defaultProject, project2, project3];

initialize(projectList, defaultProject);