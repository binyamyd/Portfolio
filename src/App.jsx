import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Sections/Home/Home";
import About from "./Components/Sections/About/About";
import Services from "./Components/Sections/Services/Services";
import Work from "./Components/Sections/Work/Work";
import Contact from "./Components/Sections/Contact/Contact";
import { ThemeProvider } from "./Components/ThemeContext/Theme_context";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Home />

          <About />

          <Services />

          <Work />

          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
