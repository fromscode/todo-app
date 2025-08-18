import './styles/reset.css';
import './styles/styles.css';
import './styles/fonts.css';
import './styles/layout.css';

import createTodo from './todo.js';
import createProject from './project.js';
import initialize from './init.js';

const defaultProject = createProject("default");

const todo1 = createTodo("lmao", "just laugh brother", "whenever",
    "p9", "hell yea!"
);
const todo2 = createTodo("lmao2", "just laugh brother", "whenever",
    "p9", "hell yea!"
);

defaultProject.addTodo(todo1);
defaultProject.addTodo(todo2);

initialize(defaultProject);