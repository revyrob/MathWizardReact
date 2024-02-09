import "./App.scss";
import Homepage from "./pages/Homepage";
import Range from "./pages/Range";
import EquationLow from "./pages/Equation-low";
import EquationHigh from "./pages/Equation-high";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/range" element={<Range />} />
        <Route path="/equation-low" element={<EquationLow />} />
        <Route path="/equation-high" element={<EquationHigh />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
