import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import WhyUs from "./components/WhyUs";
import ConnectUs from "./components/ConnectUs";
import Idea from "./components/Idea";
import JobOpportunities from "./components/JobOpportunities";
import JobPage from "./components/JobPage";
import ChatWidget from "./components/ChatWidget";
import Vize from "./components/Vize";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vize" element={<Vize />}/>
      
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/JobOpportunities" element={<JobOpportunities />} />
        <Route path="/job/:id" element={<JobPage />} />
        <Route path="/idea" element={<Idea />} />
        <Route path="/connect-us" element={<ConnectUs />} />
      </Routes>
      <ChatWidget />
     
    </Router>
  );
}

export default App;
