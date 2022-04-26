import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Works from "./components/Works";
import Stacks from "./components/Stacks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Arrow from "./components/Arrow";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Bio />
    <Works />
    <Stacks />
    <Contact />
    <Footer />
    <Arrow />
    </div>
  );
}

export default App;
