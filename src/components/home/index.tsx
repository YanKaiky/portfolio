import { FC } from "react";
import { Hero } from "../hero";
import { Navbar } from "../navbar";

export const Home: FC = () => {
  return (
    <section id="home">
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
