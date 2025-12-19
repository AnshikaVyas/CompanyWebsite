// =======================
// src/App.tsx
// =======================
import React from "react";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactUs />
    </div>
  );
};

export default App;
