import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import HeaderContest from "./components/contest/headerContest";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Header />} />
        <Route path='/contest' element={<HeaderContest />} />
      </Routes>
    </Router>
  );
}

export default App;
