import { useEffect  } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Chefs from "./components/Chefs";
import Contact from "./components/Contact";

function App() {

  useEffect(()=>{
    console.log(`
        ╔══════════════════╗
        ║   Welcome to     ║
        ║   UDARX.ME       ║
        ╚══════════════════╝
        >> Dive into the code adventure! <<
    `)
  },[])
  
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
