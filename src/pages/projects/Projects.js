import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DisplayProjects from "../../components/displayprojects/DisplayProjects";
import { myProjects } from "../../data/data";



function Projects() {
  return (
    <>
      <Navbar />
      <DisplayProjects title={'My React Projects'} projects={myProjects} type={'react'}/>
      <DisplayProjects title={'My VanilaJS Projects'} projects={myProjects} type={'vanila'}/>
      <Footer />
    </>
  );
}

export default Projects;
