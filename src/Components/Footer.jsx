import React from 'react'

const Footer = () => {
  return (
    <div className="Footer container">
    <div className="row">
      <div className="col-lg-6">
        <div className="row">
          <div className="col-sm-6">
            <div className="footer-info">
              <img
                height={65}
                width={140}
                src="https://techviochats.com/img/logo.png"
                alt=""
                srcSet=""
              />{" "}
              <br />
              <br />
              <img height={50} src="https://techviochats.com/img/incubation.jpg" alt="" /> <br />
              <img height={50} src="https://techviochats.com/img/PITB.png" alt="" />
              <img height={50} src="https://techviochats.com/img/nep.png" alt="" />
              <img height={50} src="https://techviochats.com/img/nic.png" alt="" />
              <br />
              <p className='text-muted'>
                Techvio chats is an interactive and captivating software
                development &amp; digitization agency for all the fields all over
                the globe.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="footer-links mb-5">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contact Us</h4>
              <p className='text-muted'>
                Main I.I Chadnigarh
                <br />
                Road SMI University
                <br />
                Karachi, Pakistan <br />
                <strong>Phone:</strong> +92 345 3191638
                <br />
                <strong>Email:</strong> techviochats@gmail.com
                <br />
              </p>
            </div>
            <div className="social-links">
              <a href="https://twitter.com/TechvioChats" className="twitter">
                <i className="fa fa-twitter" />
              </a>
              <a
                href="https://www.facebook.com/techviochats"
                className="facebook"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                href="https://www.instagram.com/techviochats/"
                className="instagram"
              >
                <i className="fa fa-instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/techvio-chats/?viewAsMember=true"
                className="linkedin"
              >
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="form">
          <h4>Send us a message</h4>
          <p className='mb-4 text-muted'>Join Our Mailing List To Receive The News &amp; Latest Trends.</p>
          <div
            className="g-recaptcha"
            data-sitekey="6LdA5okoAAAAALk9EtFTOeYJsnhpRDGzukkpbp01"
          />
          <form
            target="_blank"
            action="https://formsubmit.co/hammadn788@gmail.com"
            method="post"
            role="form"
            className="contactForm"
          >
            <div className="form-group mb-3">
              <input
                type="hidden"
                name="_next"
                defaultValue="https://techviochats.com/"
              />
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
                required=""
              />
              <div className="validation" />
            </div> 
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validation" />
            </div> 
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="Please enter at least 8 chars of subject"
              />
              <div className="validation" />
            </div> 
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
                defaultValue={""}
              />
              <div className="validation" />
            </div>
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage" />
            <div className="text-center">
              <button
                name="_next"
                value="https://techviochats.com/"
                type="submit"
                title="Send Message"
              >
                <a style={{ textDecoration: "none", color: "white" }}>
                  Send Message
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Footer