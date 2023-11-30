import React from 'react'

const Features = () => {
  return (
    <div className="container">
    <div className="row feature-item">
      <div
        className="col-lg-6 wow fadeInUp"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <img
          src="img/dialogflow-actions.png"
          className="img-fluid"
          alt="From Support Board website"
        />
      </div>
      <div
        className="col-lg-6 wow fadeInUp pt-5 pt-lg-0"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <h4 className='mb-4 fw-bold'>We connect Smart Chatbots Powered by Dialogflow.</h4>
        <p>
          Speed customer resolutions and automate conversations by engaging one of
          the most advanced forms of artificial intelligence in the world. This
          can be done easily in just a few minutes.01
        </p>
        <p>
          The bot is a virtual agent that replies autonomously to visitors'
          messages when it knows the right answer. When it can't access the
          correct response, a human agent will reply and take control of the
          conversation.
        </p>
      </div>
    </div>
    <div className="row feature-item mt-5 pt-5">
      <div
        className="col-lg-6 wow fadeInUp order-1 order-lg-2"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <img
          src="img/whatsapp.png"
          className="img-fluid"
          alt="From Support board website"
        />
      </div>
      <div
        className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1"
        style={{ visibility: "visible", animationName: "fadeInUp" }}
      >
        <h4 className='mb-4 fw-bold'>Sync WhatsApp Business with our AI Assistant.</h4>
        <p>
          Have your WhatsApp Business account and website communication in one
          place. Receive messages sent to WhatsApp and reply to them directly in
          Support Board.
        </p>
        <p>
          Instantly receive and respond to messages sent to your WhatsApp Business
          account in Support Board. The integration supports attachments, photos,
          videos, emojis, and more.
        </p>
        <p>
          Send WhatsApp Business message templates and text message notifications
          outside of the standard 24-hours service window. Never lose a WhatsApp
          Business customer again.
        </p>
      </div>
    </div>
    <br />
    <br />
    <br />
    <div className="row feature-item">
      <div
        className="col-lg-6 wow fadeInUp"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <img
          src="img/Canales_botslovers.png"
          className="img-fluid"
          alt="From Support Board website"
        />
      </div>
      <div
        className="col-lg-6 wow fadeInUp pt-5 pt-lg-0"
        style={{ visibility: "hidden", animationName: "none" }}
      >
        <h4 className='mb-4 fw-bold'>
          Automate sales, marketing, and customer support across all channels with
          a chatbot..
        </h4>
        <p>
          The bot is a virtual agent that replies autonomously to visitors'
          messages when it knows the right answer. When it can't access the
          correct response, a human agent will reply and take control of the
          conversation.
        </p>
        <p>
          Qualify Leads Without Forms No more static forms are needed to access
          the user's details. The bot will do all the heavy-lifting instead. With
          the help of Rich Messages, the bot can ask the user for their email and
          more in a human, conversational way.
        </p>
        <p>
          Sell more with a chatbot. Automate your placing order process, or sales
          funnel with a chatbot.
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Features