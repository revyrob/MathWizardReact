import "./App.scss";
import Homepage from "./pages/Homepage";
import EquationPage from "./pages/EquationPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/equation" element={<EquationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
