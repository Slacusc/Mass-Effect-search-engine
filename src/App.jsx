import * as React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Buscador from "./Components/Buscador";
import Home from "./Home";
import "./Components/design.css";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buscador" element={<Buscador/>} />
      </Routes>
    </div>
  );
}
export default App