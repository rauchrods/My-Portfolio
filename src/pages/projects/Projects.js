import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DisplayProjects from "../../components/displayprojects/DisplayProjects";
import { myProjects } from "../../data/data";



function Projects() {
  return (
    <>
      <Navbar />
      <DisplayProjects title={'My React Project'} projects={myProjects}/>
      <DisplayProjects title={'My VanilaJS Project'} projects={myProjects}/>
      <Footer />
    </>
  );
}

export default Projects;
