import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Mark Jedidaiah",
      role: "Construction Team manager",
      image: "https://techviochats.com/img/testimonial-2.jpg",
      text: "Wonderful experience with this seller. Awesome service and always willing to entertain any questions with a smile. Very flexible and caters to our needs. Definitely recommended and will work again in the future.",
    },
    {
      name: "Naomisu",
      role: "Lead Generation Consultant",
      image: "https://techviochats.com/img/testimonial-3.jpg",
      text: "He works fast and has good skills to know what to do, how to solve problems, respond very quickly. Did a very good job, will definitely work with him again and recommend him!",
    },
    {
      name: "Shaogangchen",
      role: "CRM Software Architecturer",
      image: "https://techviochats.com/img/testimonial-4.jpg",
      text: "Excellent work very punctual and ambitious definitely going to use Thanks again. Great work by their team...! Very satisfied",
    },
    {
      name: "Oma Alexander",
      role: "Ceo &amp; Founder Themisapp",
      image: "https://techviochats.com/img/testimonial-1.jpg",
      text: "Hammad is absolutely amazing at what he does. I could not have asked for more. I got exactly what I needed, which was no easy task and he’s very passionate about what he does to the extent that he educated me on using various programs and services!!. Thank you so much Hammad, I look forward to working with you again in the near future!!",
    },
    {
        name: "Brandon Rodrigez",
        role: "Gamer &amp; Youtuber",
        image: "https://techviochats.com/img/testimonial-5.jpg",
        text: "When i looked for someone to build a messenger bot i was really worried that i wouldnt be able to find someone who could deliver on what i needed. But Hammad delivered wayyyy above what i could expect. I needed to have thousands of chat commands built into my bot on multiple platforms and was willing to build a test before we even submitted payment. He has been extremely responsive and will be using him monthly for the updates that my company requires. Very satisfied.",
      },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
  };

  return (
    <div className="container">
      <header className="section-header">
        <h1 className="text-center fw-bold mb-4">Testimonials</h1>
      </header>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-image">
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt=""
                /></div>
                <div className="testimonialPara">
                <h4 className="fw-bold m-0" >{testimonial.name}</h4>
                <h6 className="text-muted mt-1 mb-2">{testimonial.role}</h6>
                <p>{testimonial.text}</p>
              </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
