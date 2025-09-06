import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./i18n"; // ⬅️ Importer la config i18n
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Maincontent/>}></Route>
          <Route path="*" element={<div className="text-3xl font-semibold text-center text-gray-900 mt-50">404 not found!</div>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
