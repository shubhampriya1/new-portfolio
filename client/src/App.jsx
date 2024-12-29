import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import SkillsPage from "./routes/Skills";
import Chatbot from "./components/Chatbot";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<SkillsPage />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;
