import './styles.css';
import createTodo from './todo.js';
import createProject from './project.js';
import displayTodos from '../dom.js';

const defaultProject = createProject();

const todo1 = createTodo("lmao", "just laugh brother", "whenever",
    "p9", "hell yea!"
);

defaultProject.addTodo(todo1);

displayTodos(defaultProject.getTodoList());