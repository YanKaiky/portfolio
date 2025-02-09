import { motion } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section id="about">
      <motion.div
        className="about"
        variants={variants}
        initial="initial"
        ref={ref}
        animate="animate"
      >
        {/* <div className="imgContainer">
          <img src="/me.png" alt="Yan Kaiky" />
        </div> */}

        <div className="about">
          <h2 className="title">About Me</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius
            consectetur inventore. Quaerat nulla eos quidem sint quo, impedit
            veritatis natus similique velit incidunt ducimus delectus pariatur
            odio quis ipsum.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
