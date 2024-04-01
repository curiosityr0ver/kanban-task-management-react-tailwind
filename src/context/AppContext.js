/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(null);
    const [projects, setProjects] = useState([]);
    const [activeProject, setActiveProject] = useState();
    const [tasks, seTtasks] = useState([]);

    const addProject = (project) => {
        setProjects([...projects, project]);
    };
    const removeProject = (project) => {
        setProjects(projects.filter(p => p.id !== project.id));
    };

    const editProject = (project) => {
        const index = projects.findIndex(p => p.id === project.id);
        projects[index] = project;
        setProjects([...projects]);
    };

    const setProjectActive = (project) => {
        setActiveProject(project);
    };

    const addTask = (task) => {
        seTtasks([...tasks, task]);
    };

    const removeTask = (task) => {
        seTtasks(tasks.filter(t => t.id !== task.id));
    };

    const editTask = (task) => {
        const index = tasks.findIndex(t => t.id === task.id);
        tasks[index] = task;
        seTtasks([...tasks]);
    };

    return (
        <AppContext.Provider
            value={{
                loggedIn,
                setLoggedIn
                // setBoards,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};
