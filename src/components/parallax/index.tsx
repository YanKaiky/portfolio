import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useRef } from "react";

interface IParallaxProps {
  type: "services" | "portfolio";
}

export const Parallax: FC<IParallaxProps> = ({ type }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id={type}>
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
            type === "portfolio"
              ? "linear-gradient(180deg, #111132, #454500)"
              : "linear-gradient(180deg, #111132, #0a0a16)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          {type === "portfolio" ? "What did I do" : "What do I do"}
        </motion.h1>

        <motion.div className="mountains"></motion.div>
        <motion.div
          style={{
            y: yBg,
            backgroundImage: `url(${
              type === "portfolio" ? "/sun.png" : "/planets.png"
            })`,
          }}
          className="planets"
        ></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </section>
  );
};
