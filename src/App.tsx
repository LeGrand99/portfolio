import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Maincontent from "./components/Maincontent";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Maincontent/>}></Route>
          <Route path="*" element={<div className="notFound">404 not found</div>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
