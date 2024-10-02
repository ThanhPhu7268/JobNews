import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import HeaderContest from "./components/contest/headerContest";
import MBTIDetail from "./components/mbti/mbtidetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Header />} />
        <Route path='/mbti/contest' element={<HeaderContest />} />
        <Route path='/mbti/:id' element={<MBTIDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
