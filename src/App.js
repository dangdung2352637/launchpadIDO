import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { IDO } from "./pages/IDO";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
// import { Page1 } from "./pages/Page1";
import * as React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Routes>
          {/* <Route path="/" element={<Page1 />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/IDO" element={<IDO />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
