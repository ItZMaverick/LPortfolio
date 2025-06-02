import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import MyNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Your custom CSS

function App() {
  return (
    <div className="app-container">
      <MyNavbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* You could add a footer here */}
    </div>
  );
}

export default App;