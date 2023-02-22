import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/LandingPage.css";
import Trending from "./components/Trending";
import Superhero from "./components/Superhero";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}
      {/* Trending section */}
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <Superhero />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
