import './styles/reset.css';
import './styles/styles.css';
import './styles/fonts.css';
import './styles/layout.css';
import './styles/display.css';
import './styles/variables.css';

import createTodo from './todo.js';
import createProject from './project.js';
import initialize from './init.js';
import { addSidebarCollapseEventListener } from './addEventListeners.js';

addSidebarCollapseEventListener();

const defaultProject = createProject("default");

const todo1 = createTodo("lmao2", "just laugh brother", "whenever",
    "Extreme", "hell yea!"
);

const todo2 = createTodo("lmao", "just laugh brother", "whenever",
    "High", "hell yea!"
);

const todo3 = createTodo("lmao2", "just laugh brother", "whenever",
    "Medium", "hell yea!"
);

const todo4 = createTodo("lmao2", "just laugh brother", "whenever",
    "Low", "hell yea!"
);

const todo5 = createTodo("lmao2", "just laugh brother", "whenever",
    "None", "hell yea!"
);


defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);
defaultProject.addTodo(todo3);
defaultProject.addTodo(todo4);
defaultProject.addTodo(todo5);

initialize(defaultProject);