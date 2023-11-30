import React from 'react';
import Slider from 'react-slick';

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const clientImages = Array.from({ length: 8 }, (_, index) => {
    const clientNumber = index + 1;
    return `/img/client-${clientNumber}.png`;
  });

  return (
    <div className="container">
      <header className="section-header text-center">
        <h1 className='fw-bold'>Our Clients</h1>
      </header>
      <Slider {...settings}>
        {clientImages.map((image, index) => (
          <div key={index}>
            <img style={{ height: 50 }} src={image} alt={`Client ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
