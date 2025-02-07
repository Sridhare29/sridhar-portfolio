import Home from "./components/pages/Dashboard/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/Dashboard/About";
import Dashboard from "./components/pages";
import Work from "./components/pages/Dashboard/Work";
import Projects from "./components/pages/Dashboard/Projects";
import Community from "./components/pages/Dashboard/Community";
import Contact from "./components/pages/Dashboard/Contact";
import Resume from "./components/pages/Dashboard/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="cv" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
