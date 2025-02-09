import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Yan Kaiky</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack & Mobile Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} className="firstButton">
              <a href="/CV.pdf" download="Yan Kaiky Augusto dos Santos.pdf">
                Download CV
              </a>
            </motion.button>
            <a href="#contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <motion.div
        className="sliddingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Turn Ideas Into Code.
      </motion.div>

      {/* <div className="imageContainer">
        <img src="/hero.png" alt="Character Yan Kaiky" />
      </div> */}
    </div>
  );
};
