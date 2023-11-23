import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects">
        <Route path="" element={<Projects />} />
        <Route path=":id" element={<ProjectDetails />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
