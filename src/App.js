import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/banner";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import Sstory from "./Components/sstory";
import Card from "./Components/Card";
import Blog from "./Components/blog";
import Footer from "./Components/footer";
import SignupForm from "./Components/SignupForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/stories" element={<Sstory />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
