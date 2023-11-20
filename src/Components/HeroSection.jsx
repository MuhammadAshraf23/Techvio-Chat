import React from "react";

const HeroSection = () => {

 const bgImage={
    backgroundImage:'url("https://techviochats.com/img/intro-bg.jpg")',
    marginTop:'90px'
 }

  return (
    <div>
      <div className="container d-flex h-100"style={bgImage} >
      <div className="row justify-content-center align-self-center">
        <div className="col-md-6  order-md-first order-last">
          <h1 style={{fontSize:'3.2rem',fontWeight:'bold'}}>AI Automation <br/>and <span style={{color:'#4da6e7'}}>Generative AI Chatbots solutions!</span></h1>
          <p style={{marginBottom: "30px"}}>We helps businesses to supercharge thier sales and leads via AI automation's and
            Chatbot solutions. </p>
          <div>
            <img height="60" src="https://techviochats.com/img/incubation.jpg" alt=""/>
             <img height="60" src="https://techviochats.com/img/nep.png" alt=""/>
             <img style={{marginLeft:"10px"}} height="60" src="https://techviochats.com/img/nic.png" alt=""/> 
             <br/><br/>
            <a href="#about"><button type="button" className="btn btn-primary w-50">Get Started</button></a>
          </div>
        </div>
        <div className="col-md-6 main-img order-md-last order-first">
          <img src="https://techviochats.com/img/slide.png" alt="" className="img-fluid"/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
