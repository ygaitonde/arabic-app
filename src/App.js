import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RecordPage from "./RecordPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/record" element={<RecordPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
