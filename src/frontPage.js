import React from "react";
import FrontPageTexts from "./Components/frontPageTexts.js";
import BootButtton from "./Components/bootButtton.js";
import NavigationBar from "./Components/nav_bar.js";

function FrontPage() {
  const fullScreenDivStyle = {
    width: "100vw",
    height: "100vh",
  };

  return (

    
    <div
      className="homePage m-0 d-flex flex-column justify-content-between p-0"
      style={fullScreenDivStyle}
    >
       
      <NavigationBar />
      <FrontPageTexts />
      <div className="d-flex justify-content-end m-0">
        <BootButtton />
      </div>
    </div>
  );
}

export default FrontPage;
