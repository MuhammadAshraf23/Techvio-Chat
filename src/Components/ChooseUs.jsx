import React from 'react'
import { SlDiamond } from 'react-icons/sl'
import {FaRegObjectGroup} from 'react-icons/fa'
import {LiaLanguageSolid} from 'react-icons/lia'
const ChooseUs = () => {
  return (
    <div className="container-fluid overflow-hidden">
    <header className="section-header">
      <h1 className='text-center mb-3 fw-bold'>Why choose us?</h1>
      <p className='lg-w-50 text-center mx-auto pb-5'>
        We believe people should work in an environment that empowers and inspires
        them.
      </p>
    </header>
    <div className="row">
      <div className="col-lg-6">
        <div className="why-us-img">
          <img
            src="https://techviochats.com/img/why-us.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="why-us-content">
          <p>
            We believe in our clients and our strength lies in developing close
            working relationships to help them succeed. This enables us to create,
            and deliver, value at every stage of our clients’ journey.
          </p>
          <p>
            We foster a work environment where people can communicate openly and
            encourage feedback to help us learn and grow. We believe people should
            work in an environment that empowers and inspires them.
          </p>
          <div
            className="features wow bounceInUp clearfix"
            style={{ visibility: "visible", animationName: "bounceInUp" }}
          >
            <SlDiamond style={{ color: "#f058dc",fontSize:'35px',float:'left' }} />
            <h4 style={{marginLeft:'56px'}}>Build once, Deploy on Multiple</h4>
            <p style={{marginLeft:'56px',marginBottom:'30px'}}>
              Build once, Deploy on Multiple' approach. Craft tailored AI
              solutions that seamlessly adapt to various platforms and
              applications. Whether it's chatbots, data analysis, or customer
              engagement, our strategy ensures efficient development and easy
              deployment across multiple touchpoints, maximizing your AI
              investment and accelerating your business growth.
            </p>
          </div>
          <div
            className="features wow bounceInUp clearfix"
            style={{ visibility: "visible", animationName: "bounceInUp" }}
          >
            <FaRegObjectGroup style={{ color: "#ffb774",fontSize:'35px',float:'left' }} />
            <h4 style={{marginLeft:'56px'}}>24/7 Active</h4>
            <p style={{marginLeft:'56px',marginBottom:'30px'}}>
              Our AI-driven systems are tirelessly at work around the clock,
              providing uninterrupted customer support, real-time insights, and
              instant responses. With AI handling tasks day and night, you can
              enhance customer satisfaction, optimize operations, and unlock new
              levels of efficiency that drive your business forward.
            </p>
          </div>
          <div
            className="features wow bounceInUp clearfix"
            style={{ visibility: "visible", animationName: "bounceInUp" }}
          >
            <LiaLanguageSolid style={{ color: "#589af1",fontSize:'45px',float:'left' }} />
            <h4 style={{marginLeft:'56px'}}>Multilingual Support</h4>
            <p style={{marginLeft:'56px',marginBottom:'30px'}}>
              Our advanced AI technology enables seamless communication in
              multiple languages, delivering personalized interactions and
              exceptional customer experiences. Expand your global reach, engage
              diverse audiences, and foster connections with AI-driven
              multilingual capabilities that set your business apart.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default ChooseUs