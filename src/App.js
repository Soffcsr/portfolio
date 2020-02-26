import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Skills from "./Views/Skills";
import Work from "./Views/Work"

function App() {
  return (
    <div className="App m-md-4">
      <Navbar />
      <Home />
      <Profile />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
