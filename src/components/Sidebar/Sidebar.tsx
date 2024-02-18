import { ToggleButton } from './ToggleButton/ToggleButton';
import { motion } from 'framer-motion';
import { Links } from './Links/Links';
import { useState } from 'react';
import './sidebar.scss';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    }
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    }
  }
}

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      <ToggleButton onClick={() => setOpen(!open)} />
    </motion.div>
  );
};
