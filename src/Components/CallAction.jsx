import React from "react";

const CallAction = () => {
  return (
    <div className="CallAction-background">
      <div className="container">
        <div className="row ">
          <div className="col-lg-9 text-white text-lg-left">
            <h2 className="font-weight-bold">Call To Action</h2>
            <p className="cta-text">
              {" "}
              "Ready to Transform Your Business? Elevate Efficiency and
              Engagement with TechioChats AI Automation Solutions. Experience
              the Future Today – Streamline Tasks, Boost Productivity, and
              Enhance Customer Experiences. Get in Touch for a Demo!".
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              href="https://api.whatsapp.com/send/?phone=%2B923453191638&amp;text&amp;app_absent=0"
            >
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallAction;
