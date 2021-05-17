import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact " exact component={Contact} />

        <Footer />
      </HashRouter>
    </div>
  );
}
export default App;
