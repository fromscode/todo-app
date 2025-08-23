import createTodo from "./todo";
import createProject from "./project";

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

}

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
project2.addTodo(todo2);
project3.addTodo(todo3);
defaultProject.addTodo(todo4);
project2.addTodo(todo5);

const list = new projectList();
list.addProject(defaultProject);
list.addProject(project2);
list.addProject(project3);

const emptyList = new projectList

export default list;
// export default emptyList;