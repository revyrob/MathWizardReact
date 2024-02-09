import "./App.scss";
import Homepage from "./pages/Homepage";
import Range from "./pages/Range";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/range" element={<Range />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
