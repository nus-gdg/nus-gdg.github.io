import "./App.scss";
import Nav from "./components/nav/nav";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import Home from "./sections/home/home";
import Portfolio from "./sections/portfolio/portfolio";
import Events from "./sections/events/events";

const App = (): JSX.Element => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Events />
      <Contact />
    </div>
  );
};

export default App;
