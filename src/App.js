import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { IDO } from "./pages/IDO";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Create } from "./pages/Create";
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
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Create" element={<Create />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
