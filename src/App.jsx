import "./App.scss";
import Homepage from "./pages/Homepage";
import EquationPage from "./pages/EquationPage";
import FinalPage from "./pages/FinalPage";
import Range from "./pages/Range";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/range" element={<Range />} />
        <Route path="/equation" element={<EquationPage />} />
        <Route path="/score" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
