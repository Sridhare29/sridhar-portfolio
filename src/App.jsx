import Home from "./components/pages/Content Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/Content Pages/About";
import Dashboard from "./components/pages/Dashboard";
import Work from "./components/pages/Content Pages/Work";
import Projects from "./components/pages/Content Pages/Projects";
import Community from "./components/pages/Content Pages/Community";
import Contact from "./components/pages/Content Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="projects" element={<Projects />} />
          <Route path="community" element={<Community />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
