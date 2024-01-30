import React from "react";
import AllExclusive from "../Assets/Images/all-inclusive.svg";
import TimeManagement from "../Assets/Images/time-management.svg";
import Shield from "../Assets/Images/shield.svg";
import Click from "../Assets/Images/click.svg";
import Centre from "../Assets/Images/center.svg";
import Clock from "../Assets/Images/clock.svg";
import Subscribe from "./subscribe";

function Features() {
  const data = [
    {
      image: AllExclusive,
      heading: "Access Forever",
      content: "Access all the inventory, sales & purchase features.",
    },
    {
      image: TimeManagement,
      heading: "Real-time Reports",
      content: "Gather and share business insights in realtime.",
    },
    {
      image: Shield,
      heading: "Privacy and Security",
      content: "Your data is secure with a world-class encryption standard.",
    },
    {
      image: Click,
      heading: "Easy to Use",
      content: "Create any document with a few clicks.",
    },
    {
      image: Centre,
      heading: "24/7 Support",
      content: "We will provide chat support to all queries.",
    },
    {
      image: Clock,
      heading: "Instant Access",
      content:
        "Web-based Procejer from any location around the globe at any time.",
    },
  ];

  return (
<>
<Subscribe />
<div className="container px-5">

       
        
      <div className="fs-4 mb-5 fw-bold text-center">
        What we are goining to offer !
      </div>
      <div className="row pb-4">
        {data.map((element, index) => (
          <div key={index} className="col-lg-4 col-md-4 pb-5">
            <div className="service-box d-flex align-items-end">
              <img src={element.image} alt={element.heading} />
              <div className="content">
                <p className="fs-6 mb-0 fw-bold">{element.heading}</p>
                <p className="text-muted m-0">{element.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
    
  );
}

export default Features;
