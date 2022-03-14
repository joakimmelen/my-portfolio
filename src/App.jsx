import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './partials/Navbar'

import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import SingleProject from './pages/SingleProject'

import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <div>
      <Navbar />
      <AnimatePresence exitBeforeEnter >
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<SingleProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App
