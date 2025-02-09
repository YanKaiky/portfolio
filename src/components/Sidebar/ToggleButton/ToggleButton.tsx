import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../helpers/utils";

interface IToggleButtonProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const ToggleButton: FC<IToggleButtonProps> = ({ open, setOpen }) => {
  return (
    <button>
      <motion.div
        variants={fadeIn("down", "tween", 1, 1.4)}
        style={{
          rowGap: open ? "0px" : "0.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "3rem",
          height: "3rem",
          padding: "8px",
          order: 2,
          cursor: "pointer",
          borderWidth: "6px",
          borderRadius: "9999px",
        }}
        onClick={() => setOpen(!open)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? -45 : 0, translateY: open ? 2 : 0 }}
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "black",
          }}
        ></motion.div>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? 45 : 0 }}
          style={{
            width: "100%",
            height: "3px",
            backgroundColor: "black",
          }}
        ></motion.div>
      </motion.div>
    </button>
  );
};
