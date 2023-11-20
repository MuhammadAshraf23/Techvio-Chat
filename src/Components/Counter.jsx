import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTigger from "react-scroll-trigger";
const Counter = () => {
  const [counterUp, setCounterUp] = useState(false);
  const spanStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "bold",
    fontSize: "48px",
    display: "block",
    color: "#555186",
  };
  return (
    <ScrollTigger
      onEnter={() => setCounterUp(true)}
      onExit={() => setCounterUp(false)}
    >
      <div className="container pb-5">
        <div className="row counters" style={{ paddingTop: "40px" }}>
          <div className="col-lg-3 col-6 text-center">
            {counterUp && (
              <CountUp
                start={0}
                end={124}
                duration={2}
                separator=","
                style={spanStyle}
              />
            )}
            <p>Clients</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            {counterUp && (
              <CountUp
                start={0}
                end={56}
                duration={5}
                separator=","
                style={spanStyle}
              />
            )}
            <p>Projects</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            {counterUp && (
              <CountUp
                start={0}
                end={10}
                duration={5}
                separator=","
                style={spanStyle}
              />
            )}
            <p>Own SaaS product</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            {counterUp && (
              <CountUp
                start={0}
                end={11}
                duration={5}
                separator=","
                style={spanStyle}
              />
            )}
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </ScrollTigger>
  );
};

export default Counter;
