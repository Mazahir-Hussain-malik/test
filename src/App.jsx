import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Faqs from "./Components/Faqs";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
import HowToBuy from "./Components/HowToBuy";
import Tokenomics from "./Components/Tokenomics";
import About from "./Components/About";
const App = () => {
  return (
    <div className=" ">
      <Navbar />
      <div id="Home">
        <Header />
      </div>
      <About />
      <div id="Tokenomics">
        <Tokenomics />
      </div>
      <div id="Roadmap">
        <Roadmap />
      </div>
      <div id="HowtoBuy">
        <HowToBuy />
      </div>
      <div id="Faqs">
        <Faqs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
