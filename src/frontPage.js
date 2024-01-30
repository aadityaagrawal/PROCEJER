import React from "react";
import FrontPageTexts from "./Components/frontPageTexts.js";
import NavigationBar from "./Components/nav_bar.js";

function FrontPage() {
  

  return (
    <div className="container-fluid">
      <NavigationBar />
      <FrontPageTexts />
      
    </div>
  );
}

export default FrontPage;
