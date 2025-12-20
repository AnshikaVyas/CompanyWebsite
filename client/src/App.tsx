// =======================
// src/App.tsx
// =======================
import React from "react";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Average from "./components/Average";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Subscription from "./components/Subscription";
import OurProjects from "./components/OurProjects";
import HappyClients from "./components/HappyClients";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactUs />
      <WhyChooseUs />
      <Average />
      <AboutUs />
      <OurProjects />
      <HappyClients />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;
