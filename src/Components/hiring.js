import React from "react";
import hiring from "../Assets/Images/hiring.svg";

function Hiring() {
  return (
    <div className="row p-3 container my-5">
      <div className="col d-flex align-items-center justify-content-center pb-4">
        <img src={hiring} alt="Hiring" />
      </div>
      <div className="col justify-content-center">
        <p className="fs-4 fw-bold">Hiring Notice: UX/UI Designers</p>
        <p className="fw-lighter my-4" style={{ textAlign: "justify" }}>
          Join our team for the development of our upcoming ERP solution! We are
          seeking talented individuals with a graduation degree from a reputed
          design institute. While experience is an advantage, freshers are
          encouraged to apply. Please submit your application along with your
          portfolio. Exciting opportunities await!
        </p>
        <a href="mailto:apply@procejer.com" className="text-danger fw-bold text-decoration-none">Apply at - apply@procejer.com</a>
      </div>
    </div>
  );
}

export default Hiring;

/* 


 */
