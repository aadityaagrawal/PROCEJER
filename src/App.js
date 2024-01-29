import "./Components/nav_bar.js";
import "./App.css";
import FrontPage from "./frontPage.js";
import "./App.css";
import NavigationBar from "./Components/nav_bar.js";
import Footer from "./Components/footer.js";
import Information_Screen from "./Components/Information_Screen.js";
import Hiring from "./Components/hiring.js";

function App() {
  const fullScreenDivStyle = {
    width: "100vw",
    height: "100vh",
    // backgroundColor: 'lightgray',
  };

  return (
    <div className="App">
      {/* <div style={fullScreenDivStyle} className="frontPage">
        <FrontPage />
      </div> */}
      <NavigationBar />
      <div className="secondPage">
      <Information_Screen />
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}

export default App;
