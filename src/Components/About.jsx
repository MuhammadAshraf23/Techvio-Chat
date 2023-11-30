import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className ="row">
        <div className="col-lg-5 col-md-6">
          <div className="about-img" style={{ width: "100%"}}>
            <img
              src="/img/about-img.jpg"
              alt="Hammad's Photo"
              style={{ width: "100%",padding:'10px' }}
            />
          </div>
        </div>

        <div className="col-lg-7 col-md-6" style={{paddingTop:'40px'}}>
          <div className="about-content">
            <h2 style={{fontWeight:'bold'}}>About Us</h2>
            <h4 style={{fontStyle:'italic',color:'gray',marginBottom:'20px' }}>
              We can build a much brighter future where humans are relieved of
              menial work using AI capabilities.
            </h4>
            <p>
              In a world where customer expectations are rapidly evolving,
              embracing AI automation isn't just an option it's a necessity.
              Join us at [Your Company Name] and witness firsthand how AI-driven
              transformation can supercharge your sales and leads. Together,
              let's redefine success in the age of AI.
            </p>
            <ul>
              <li>
                <i className="ion-android-checkmark-circle"></i>
                <b> Multilingual Support:</b> With its multilingual
                capabilities, Our AI enables businesses to connect with a global
                audience by providing support in various languages, further
                expanding their market reach.
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>{" "}
                <b> Personalization:</b>We help Businesses can use generative AI
                to tailor content to individual customers' preferences and
                behaviors, creating a more personalized experience that
                resonates with their target audience.
              </li>
              <li>
                <i className="ion-android-checkmark-circle"></i>{" "}
                <b> 24/7 Availability:</b> Chatbots powered by Dialogflow can
                provide round-the-clock customer support, answering queries and
                providing assistance even outside of business hours, thus
                enhancing customer service accessibility.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
