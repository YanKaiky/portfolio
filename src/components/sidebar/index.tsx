import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Links } from "./links";
import { ToggleButton } from "./toggle.button";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black"
      ref={sidebarRef}
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed z-[999] top-0 left-0 bottom-0 w-[600px] bg-white md:w-[300px]"
        variants={variants}
      >
        <Links />
      </motion.div>

      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};
