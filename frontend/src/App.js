import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Mantra from "./components/Mantra";
import Footer from "./components/Footer";
import "./App.css";
import ArticlePage from "./components/ArticlePage";
import CheatsheetPage from "./components/CheatsheetPage";
import Scheme from "./components/scheme";
import AboutUs from "./components/AboutUs";
import Crop from './components/Crop'; // Make sure the path is correct
import PlantDiseaseDetection from './components/PlantDiseaseDetection';


const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <Routes>
        {/* Route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Mantra />
              <Crop />
              <PlantDiseaseDetection />
              <Scheme />
              <Footer />
            </>
          }
        />
        
        {/* Route for the login page */}
        
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/cheatsheet" element={<CheatsheetPage />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;
