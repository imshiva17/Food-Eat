import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TopList from "./components/TopList";
import BgImage from "../src/assets/2.png";
import Banner from "./components/Banner";
import OurServices from "./components/OurServices";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const App = () => {
  return (
    <div style={bgStyle} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl px-20">
        <Navbar />
        <Hero />
        <TopList />
        <Banner />
        <OurServices />
      </div>
    </div>
  );
};

export default App;
