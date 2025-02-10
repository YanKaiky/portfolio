import { motion } from "framer-motion";
import { MdGTranslate } from "react-icons/md";
import { Icon } from "../icon";
import { Sidebar } from "../sidebar";
import { Socials } from "../socials";

export const Navbar = () => {
  return (
    <div className="h-28 bg-black text-white">
      <Sidebar />

      <div className="max-w-[1366px] mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-[30px]">
          <Icon icon={<MdGTranslate />} />

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold hidden md:block"
          >
            Yan Kaiky
          </motion.span>
        </div>

        <Socials />
      </div>
    </div>
  );
};
