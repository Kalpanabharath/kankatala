import React from "react";
import "./App.css";
import AnnouncementBar from "./Component/AnnouncementBar/AnnouncementBar";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/HeroSection/Hero";
import About from "./Component/About/About";
import Categories from "./Component/Categories/Categories";
import Arivals from "./Component/Arivals/Arivals";
import Puresari from "./Component/Puresari/Puresari";
import Sariabovekaha from "./Component/sariabovekaha/sariabovekaha";

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Arivals />
      <Puresari />
      <Sariabovekaha />
    </div>
  );
};

export default App;
