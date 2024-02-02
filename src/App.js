import "./Components/nav_bar.js";
import "./App.css";
import FrontPage from "./frontPage.js";
import "./App.css";
import Footer from "./Components/footer.js";
import InformationScreen from "./Components/Information_Screen.js";
import Hiring from "./Components/hiring.js";
import Features from "./Components/features.js";

function App() {
  
  const fullScreenDivStyle = {
    minHeight : "100vh",
    height: "auto",
  };


  return (
    <div className="App">
      <div style={fullScreenDivStyle} className="frontPage">
        <FrontPage />
      </div>
      <Features />
      <div className="secondPage">
        <InformationScreen />
      </div>

      <Hiring />
      <Footer />
    </div>
  );
}

export default App;
