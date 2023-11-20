import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Services from "../Components/Services";
import ChooseUs from "../Components/ChooseUs";
import Counter from "../Components/Counter";
import CallAction from "../Components/CallAction";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Team from "../Components/Team";
import Clients from "../Components/Clients";
import Pricing from "../Components/Pricing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div style={{ padding: "80px 0px" }}>
        <About />
      </div>
      <div style={{ padding: "60px 0px", backgroundColor: "#f5f8fd" }}>
        <Services />
      </div>
      <div style={{ paddingTop: "60px" }}>
        <ChooseUs />
      </div>
      <div style={{ paddingTop: "60px" }}>
        <Counter />
         <CallAction />
      </div>
      <div style={{ padding: "80px 0px" }} >
        <Features />
      </div>
      <div style={{ padding: "60px 0px" }} >
      <Testimonials />
      </div>
      <div  style={{ padding: "60px 0px",backgroundColor:'#f5f8fd'}}>
        <Team />
      </div>
      <div  style={{ padding: "60px 0px" }}>
        <Clients />
      </div>
      <div  style={{ padding: "60px 0px" }}>
        <Pricing />
      </div>
    </div>
  );
};

export default Home;
