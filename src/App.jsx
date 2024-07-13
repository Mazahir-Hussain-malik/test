import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Faqs from "./Components/Faqs";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <Header />
      <Roadmap />
      <Faqs />
      <Footer />
    </div>
  );
};

export default App;
