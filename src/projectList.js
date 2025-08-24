import createTodo from "./todo.js";
import createProject from "./project.js";

class projectList {
    list = [];

    getProject(projectId) {
        return this.list.find(project => project.getId() === projectId);
    }

    addProject(project) {
        if (typeof project === "string") {
            const newProject = createProject(project);
            this.addProject(newProject);
            return newProject;
        }

        this.list.push(project);
    }

    toJSON() {
        return {
            list: this.list.map(p => p.toJSON())
        };
    }

}

const defaultProject = createProject("Default");
const project2 = createProject("another project");
const project3 = createProject("project 3");

const todo1 = createTodo("lmao2", Date.now(),
    "Extreme", "hell yea!"
);

const todo2 = createTodo("lmao", Date.now(),
    "High", "hell yea!"
);

const todo3 = createTodo("lmao2", Date.now(),
    "Medium", "hell yea!"
);

const todo4 = createTodo("lmao2", Date.now(),
    "Low", "hell yea!"
);

const todo5 = createTodo("lmao2", Date.now(),
    "None", "hell yea!"
);


defaultProject.addTodo(todo1);
project2.addTodo(todo2);
project3.addTodo(todo3);
defaultProject.addTodo(todo4);
project2.addTodo(todo5);

const list = new projectList();
list.addProject(defaultProject);
list.addProject(project2);
list.addProject(project3);

const emptyList = new projectList

// export default list;
export default projectList;