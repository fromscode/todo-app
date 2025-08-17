import './styles.css';
import createTodo from './todo.js';
import createProject from './project.js';

const defaultProject = createProject();

const todo1 = createTodo("lmao", "just laugh brother", "whenever",
    "p9", "hell yea!"
);

defaultProject.addTodo(todo1);

// for (const todo of defaultProject.getTodoList()) {
//     todo.displayTodo();
// }

// console.log("Project id: " + defaultProject.getId());

defaultProject.displayProject();