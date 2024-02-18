import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  },
}

const sectionVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

export const Links = () => {
  const sections = [
    'Home',
    'Services',
    'Portfolio',
    'Contact',
    'About',
  ];

  return (
    <motion.div className="links" variants={variants}>
      {sections.map((section) => (
        <motion.a
          href={`#${section.toLowerCase()}`}
          key={section}
          variants={sectionVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {section}
        </motion.a>
      ))}
    </motion.div>
  );
};
