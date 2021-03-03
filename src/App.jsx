import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import UploadForm from "./components/Admin/UploadForm";
import Qpaper from "./components/Home/Qpaper";
import MyCarousel from "./components/MyCorousel/MyCarousel";
import WhoWeAre from "./components/AboutUs/WhoWeAre";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import GoalsMission from "./components/AboutUs/GoalsMission";
import Team from "./components/AboutUs/Team";


function App() {
  return (
    <div className="App">
      <Navbar />
      <MyCarousel />
      <Qpaper />
      
      <GoalsMission/>
      <WhoWeAre />
      <Team/>
      
      <Footer />
    </div>
  );
}

export default App;
