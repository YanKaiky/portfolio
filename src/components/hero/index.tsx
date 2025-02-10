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
    <div
      className="overflow-hidden relative text-white"
      style={{
        height: "calc(100vh - 100px)",
        background: "linear-gradient(180deg, #000000, #1c1b1b)",
      }}
    >
      <div className="max-w-[1336px] h-full m-auto">
        <motion.div
          className="w-[60%] h-full flex flex-col justify-center gap-[40px] md:h-[50%] md:w-full md:gap-[20px] md:items-center md:text-center"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-[30px] text-cyan-500 font-bold tracking-[10px] uppercase"
            variants={textVariants}
          >
            Yan Kaiky
          </motion.h2>
          <motion.h1
            className="text-[88px] md:text-[36px] font-bold"
            variants={textVariants}
          >
            Full Stack & Mobile Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              className="px-[20px] py-[20px] bg-white text-black font-bold rounded-[50px] border border-white mr-[20px] cursor-pointer z-[2]"
            >
              <a href="/CV.pdf" download="Yan Kaiky Augusto dos Santos.pdf">
                Download CV
              </a>
            </motion.button>
            <a href="#contact">
              <motion.button
                className="px-[20px] py-[20px] bg-transparent text-white font-light rounded-[50px] border border-white mr-[20px] cursor-pointer z-[2]"
                variants={textVariants}
              >
                Contact Me
              </motion.button>
            </a>
          </motion.div>

          <motion.img
            className="w-[50px]"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute text-[40vh] bottom-[-120px] whitespace-nowrap text-[#2a2828] w-[50%] select-none font-bold pointer-events-none"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Turn Ideas Into Code.
      </motion.div>

      {/* <div className="h-full mr-[150px] absolute top-0 right-0 md:h-[50%] md:w-[60%] md:mr-[100px] md:top-auto md:bottom-0">
        <img
          className="w-full h-full object-cover"
          src="/hero.png"
          alt="Character Yan Kaiky"
        />
      </div> */}
    </div>
  );
};
