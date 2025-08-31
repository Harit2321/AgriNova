// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


import CropRecommend from "./pages/CropRecommend";
import Dashboard from "./pages/Dashboard";
import MarketPrices from "./pages/MarketPrices";
import PlantDisease from "./pages/PlantDisease";
import WeatherForecast from "./pages/WeatherForecast";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="/crop-recommend" element={<CropRecommend />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/plant-disease" element={<PlantDisease />} />

          <Route path="/weather-forecast" element={<WeatherForecast />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
