import { Contact, Cursor, Hero, Navbar, Parallax, Portfolio, Services } from './components';
import './app.scss';

const App = () => {
  return (
    <div>
      <Cursor />
      <section id='home'>
        <Navbar />
        <Hero />
      </section>
      <section id='services'><Parallax type='services' /></section>
      <section><Services /></section>
      <section id='portfolio'><Parallax type='portfolio' /></section>
      {/* <Portfolio /> */}
      {/* <section id='contact'><Contact /></section> */}
    </div>
  );
};

export default App;
