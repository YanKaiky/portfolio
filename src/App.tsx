import {
  About,
  Contact,
  Cursor,
  Home,
  Parallax,
  Portfolio,
  Services,
} from "./components";

const App = () => {
  return (
    <div>
      <Cursor />
      <Home />
      <About />
      <Parallax type="services" />
      <Services />
      <Parallax type="portfolio" />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
