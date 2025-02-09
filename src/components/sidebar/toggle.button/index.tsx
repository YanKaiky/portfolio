import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../../../utils";

interface IToggleButtonProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ToggleButton: FC<IToggleButtonProps> = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="z-[999] w-[50px] h-[50px] rounded-full fixed top-[25px] left-[25px] bg-transparent border-none cursor-pointer"
    >
      <motion.div
        variants={fadeIn("down", "tween", 1, 1.4)}
        className={`flex flex-col items-center justify-center w-12 h-12 p-2 order-2 cursor-pointer border-6 rounded-full ${
          open ? "gap-0" : "gap-2"
        }`}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? -45 : 0, translateY: open ? 2 : 0 }}
          className="w-full h-1 rounded-full bg-black"
        ></motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 45 : 0 }}
          className="w-full h-1 rounded-full bg-black"
        ></motion.div>
      </motion.div>
    </button>
  );
};
