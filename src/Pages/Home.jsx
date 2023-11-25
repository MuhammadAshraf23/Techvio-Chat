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
import { Element } from "react-scroll";
import Questions from "../Components/Questions";
import Contact from "../Components/Contact";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Element name="home-section">
      <HeroSection />
      </Element>
      <Element name="about-section">
        <div style={{ padding: "80px 0px" }}>
          <About />
        </div>
      </Element>
      <Element name="services-section">
        <div style={{ padding: "60px 0px", backgroundColor: "#f5f8fd" }}>
          <Services />
        </div>
      </Element>
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
      <Element name="team-section">
        <div style={{ padding: "60px 0px", backgroundColor: "#f5f8fd"}}>
          <Team />
        </div>
      </Element>
      <div  style={{ padding: "60px 0px" }}>
        <Clients />
      </div>
      <div  style={{ padding: "60px 0px",backgroundColor: "#f5f8fd"}}>
        <Pricing />
      </div>
      <div  style={{ padding: "60px 0px"}}>
        <Questions />
      </div>
      <Element name="contact-section">
      <div  style={{ padding: "60px 0px",backgroundColor: "#f5f8fd"}}>
        <Contact />
      </div>
      </Element>
    </div>
  );
};

export default Home;
