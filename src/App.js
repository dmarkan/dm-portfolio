import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Works from "./components/Works";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Bio />
    <Works />
    </div>
  );
}

export default App;
