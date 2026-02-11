import { Routes, Route } from "react-router-dom";
import AnimatedBackground from "./components/AnimatedBackground";
import ParticlesLayer from "./components/ParticlesLayer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Instansi from "./pages/Instansi";
import { ScrollProgressBar, ScrollToTopButton } from "./components/ui";
import Rules from "./pages/Rules";
import About from "./pages/About";
import Staff from "./pages/Staff";



export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <AnimatedBackground />
      <ParticlesLayer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instansi" element={<Instansi />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />

      </Routes>

      <ScrollToTopButton />
    </div>
  );
}
