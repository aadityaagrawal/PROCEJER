import React from "react";
import InfoComponent from "./details";
import chatIcon from "../Assets/Images/chat_icon.svg";

function InformationScreen() {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ backgroundColor: "#E5E2E2" }}
    >
      <div className="fs-4 p-4 fw-bold">Explore the Procejer's Suite</div>
      <div
        className="pb-5 px-5"
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          maxWidth: "650px",
        }}
      >
        Procejer is packed with functionalities designed to assist you in
        inventory management, document creation and tracking, as well as
        streamlining production processes.
      </div>
      <InfoComponent />

      <div className="fs-4 fw-bold pb-2 px-5">
        <div className="d-flex">
          <img src={chatIcon} height={"48px"} alt="Chat icon"></img>
          &nbsp; Can do more with Procejer.com
        </div>
      </div>
      <div
        className="pb-5 px-5"
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          maxWidth: "470px",
        }}
      >
        Easily communicate with your customers via WhatsApp or Email. We also
        have integrations to streamline your accounting and to track shipments.
      </div>
    </div>
  );
}

export default InformationScreen;
