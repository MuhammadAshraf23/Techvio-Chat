import React from "react";
import { BsBrowserEdge, BsSpeedometer2 } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { CgCopy } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { LuClock9 } from "react-icons/lu";
import '../App.css'
const serviceData = [
  {
    icon: <BsBrowserEdge style={{ color: "#ff689b", fontSize: "40px" }} />,
    title: "Generative AI Assistant",
    description: "We provide a Generative AI-based Assistant that helps industries in various domains like customer support, Website Assistant with Social Media Integration using OpenAI API.",
  },
  {
    icon: <BiBookContent style={{ color: "#e98e06", fontSize: "40px" }} />,
    title: "AI Content Generator",
    description: "Helps content creators and writers to think about better content. It assists both digital and business content creators in providing and producing valuable content.",
  },
  {
    icon: <CgCopy style={{ color: "#3fcdc7", fontSize: "40px" }} />,
    title: "ERP and Software Solution",
    description: "Accounts & Finance Modules, Advanced Reporting, HR Module ERP. Automate Corporate Functions With Integrated ERP Software. Modules: Finance, Stock, POS. HRM Software. ERP Software.",
  },
  {
    icon: <BsSpeedometer2 style={{ color: "#41cf2e", fontSize: "40px" }} />,
    title: "Whatsapp AI Chatbots",
    description: "Elevate your business with our cutting-edge WhatsApp AI chatbot solutions. Seamlessly engage customers, provide instant support, and automate tasks round the clock. Your success, powered by our innovation.",
  },
  {
    icon: <TfiWorld style={{ color: "#2282ff", fontSize: "40px" }} />,
    title: "Website Development",
    description: "Web development solutions providing a bundle of services to boost your brand or business on the internet that opens a door to limitless possibilities. We craft dynamic, user-centric websites that captivate visitors and drive conversions.",
  },
  {
    icon: <LuClock9 style={{ color: "#8660fe", fontSize: "40px" }} />,
    title: "Outbound Calling Assistant",
    description: "Our AI-powered automation streamlines customer outreach, enhances lead generation, and drives sales growth integrated into your operations, personalize interactions, and business success through advanced technology.",
  },
];

const Services = () => {
  const box = {
    padding: "30px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    margin: "0 10px 40px 10px",
    background: "#fff",
    boxShadow: "0 10px 29px 0 rgba(68, 88, 144, 0.1)",
    textAlign: "center",
  };

  return (
    <div className="container overflow-hidden">
      <header className="section-header">
        <h1 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}>Services</h1>
        <p className="mx-auto pb-5 w-50 text-center">
          We don't just talk about integrity, we demonstrate it. Through our work ethics, our behavior towards our employees and our dealings with clients, we stick to our values.
        </p>
      </header>
      <div className="row">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`col-md-6 col-lg-4 wow bounceInUp hovering`}
            data-wow-duration="1.4s"
            style={{
              visibility: "visible",
              animationDuration: "1.4s",
              animationName: "bounceInUp",
              animationDelay: index % 2 === 0 ? "0.1s" : "0.2s",
            }}
          >
            <div style={box}>
              <div className="icon text-center w-100" style={{paddingBottom: "10px" }}>
                {service.icon}
              </div>
              <h4 className="title">
                <a href="" className="text-black font-weight-bold">
                  {service.title}
                </a>
              </h4>
              <p className="description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
