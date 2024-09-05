import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Techs from "./components/Techs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Techs />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
