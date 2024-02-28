import { motion } from 'framer-motion'
import { useRef } from 'react';
import './about.scss';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

export const About = () => {
    const ref = useRef<any>(null);

    return (
        <motion.div
            className='about'
            variants={variants}
            initial='initial'
            ref={ref}
            animate='animate'
        >
           <p>About</p>
        </motion.div>
    )
}
