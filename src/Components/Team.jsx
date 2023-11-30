import React from 'react';
import { FaTwitter,FaFacebookF,FaGooglePlusG,FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: 'Hammad Sheikh',
      role: 'Founder & CEO',
      image: 'img/team-1.jpg',
    },
    {
      name: 'Rayyan Zain',
      role: 'CMO',
      image: 'img/team-2.jpg',
    },
    {
      name: 'Obaid Muneer',
      role: 'AI Automation Manager',
      image: 'img/team-3.jpg',
    },
    {
      name: 'Anus Nadeem',
      role: 'Creative Designer',
      image: 'img/team-4.jpg',
    },
    {
      name: 'Jawad Ali',
      role: 'Mern Stack Developer',
      image: 'img/team-5.jpg',
    },
    {
      name: 'Areeba Khan',
      role: 'React Developer',
      image: 'img/team-6.jpg',
    },
    {
      name: 'Sindhya Devi',
      role: 'Marketing Assistant',
      image: 'img/team-7.jpg',
    },
    {
      name: 'Rasib Ahmed',
      role: 'UI UX Designer',
      image: 'img/team-8.jpg',
    },
  ];

  return (
    <div className="Team container">
      <div className="section-header text-center">
        <h1 className='mb-3 fw-bold'>Our Team</h1>
        <p className='lg-w-50' style={{margin:'auto',paddingBottom:'60px'}}>Our aim is to convert the leads into customers, making the business grow and succeed. </p>
      </div>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`col-lg-3 col-md-6 wow fadeInUp`}
            style={{
              visibility: 'visible',
              animationName: 'fadeInUp',
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="member">
              <img height={220} src={member.image} className="img-fluid" alt="" />
              <div className="member-overlay">
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <div className="social">
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaGooglePlusG /></a>
                    <a href=""><FaLinkedinIn /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
