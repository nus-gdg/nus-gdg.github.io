import "./App.scss";
import Nav from "./components/nav/nav";
import About from "./sections/about/about";
import Contact from "./sections/contact/contact";
import DiscordSection from "./sections/discord/discord";
import Home from "./sections/home/home";
import Portfolio from "./sections/portfolio/portfolio";

const App = (): JSX.Element => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <DiscordSection />
    </div>
  );
};

export default App;
