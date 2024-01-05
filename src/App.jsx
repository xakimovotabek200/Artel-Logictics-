import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404/NotFound";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Calculator from "./pages/Calculator/Calculator";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Servisec from "./pages/Services/Servisec";
import Vacansy from "./pages/Vacansy/Vacansy";



  function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
          <Route path="/blog/" element={<Blogs />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/vacansy/" element={<Vacansy />} />
          <Route path="/services/" element={<Servisec />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    );
  }

export default App;
