import React from "react";

import DisplayProjects from "../../components/displayprojects/DisplayProjects";
import { myProjects } from "../../data/data";

function Projects() {
  return (
    <>
      <DisplayProjects
        title={"My FullStack / React Projects"}
        projects={myProjects}
        type={"react"}
      />
      <DisplayProjects
        title={"My VanilaJS Projects"}
        projects={myProjects}
        type={"vanila"}
      />
    </>
  );
}

export default Projects;
