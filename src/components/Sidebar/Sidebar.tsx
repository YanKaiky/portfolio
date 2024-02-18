import { ToggleButton } from './ToggleButton/ToggleButton';
import { motion } from 'framer-motion';
import { Links } from './Links/Links';
import { useEffect, useRef, useState } from 'react';
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

  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <motion.div className='sidebar' ref={sidebarRef} animate={open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>

      <ToggleButton onClick={() => setOpen(!open)} />
    </motion.div>
  );
};
