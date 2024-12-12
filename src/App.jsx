import React from "react";
import "./App.css";
import AnnouncementBar from "./Component/AnnouncementBar/AnnouncementBar";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/HeroSection/Hero";
import About from "./Component/About/About";
import Categories from "./Component/Categories/Categories";
import Arivals from "./Component/Arivals/Arivals";
import Puresari from "./Component/Puresari/Puresari";

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
    </div>
  );
};

export default App;
