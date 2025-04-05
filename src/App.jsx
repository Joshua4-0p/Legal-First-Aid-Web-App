import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/LandingPage/Navbar";
import HeroSection from "./components/LandingPage/HeroSection";
import FeatureSection from "./components/LandingPage/FeatureSection";
import FAQSection from "./components/LandingPage/FAQSection";
import Testimonials from "./components/LandingPage/Testimonials";
// import Footer from "./components/LandingPage/Footer";
import Footer2 from "./components/LandingPage/Footer2";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage"
import AboutUs from "./Pages/AboutUs"
import ContactUs from "./Pages/ContactUs"
import LegalRight from "./Pages/LegalRight";

function App() {
  const params=useParams()
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="max-w-full">
                <HeroSection />
              </div>
              <FeatureSection />
              <FAQSection />
              <Testimonials />
            </>
          }
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/legalrights" element={<LegalRight />} />
        <Route path="/post/:id" element={<h2>hello post {params.id}</h2>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer2 />
    </Router>
  );
}

export default App;
