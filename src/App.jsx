import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Home/Home";
import About from "./Components/Sections/About/About";
import Work from "./Components/Sections/Work/Work";
import Contact from "./Components/Sections/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />

        <About />

        <Work />

        <Contact />
      </main>
    </div>
  );
}

export default App;
