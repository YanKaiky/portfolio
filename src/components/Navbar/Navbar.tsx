import { MdGTranslate } from "react-icons/md";
import { Sidebar, Socials, Icon } from '..';
import { motion } from 'framer-motion';
import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <div className="textTranslate">
          <Icon icon={<MdGTranslate />} />

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Yan Kaiky
          </motion.span>
        </div>

        <div className="social">
          <Socials />
        </div>
      </div>
    </div>
  )
}
