import { Sidebar, Socials } from '..';
import { motion } from 'framer-motion';
import './navbar.scss';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yan Kaiky
        </motion.span>

        <div className="social">
          <Socials />
        </div>
      </div>
    </div>
  )
}
