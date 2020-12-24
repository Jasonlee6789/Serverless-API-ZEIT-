import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";

import useProject from "./api/project";

const App = () => {
  // Initialize state
  const [projects, setProjects] = useState([]);
  const getProject = useProject();
  // Get projects
  useEffect(() => {
    // fetch("/api/projects")
    getProject()
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []);

  return (
    <div className="App">
      <h1>Hi, my name is Jing Li</h1>
      <h3>I'm a web developer</h3>

      <h4>Here are a few of my projects :</h4>

      {projects.length ? (
        projects.map((project) => (
          <div style={{ padding: 10 }} key={project.name}>
            <Button variant="contained" href={project.html_url}>
              {project.name}
            </Button>
          </div>
        ))
      ) : (
        <div>Loading projects........</div>
      )}
    </div>
  );
};

export default App;
