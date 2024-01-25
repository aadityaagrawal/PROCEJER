import "./Components/nav_bar.js";
import "./App.css";
import FrontPage from "./frontPage.js";
import "./App.css";

function App() {
  const fullScreenDivStyle = {
    width: "100vw",
    height: "100vh",
    // backgroundColor: 'lightgray',
  };

  return (
    <div className="App">
      <div style={fullScreenDivStyle} className="frontPage">
        <FrontPage />
      </div>

      
    </div>
  );
}

export default App;
