import { motion } from 'framer-motion'
import './services.scss';
import { useRef } from 'react';

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

export const Services = () => {
    const ref = useRef<any>(null);

    // const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className='services'
            variants={variants}
            initial='initial'
            ref={ref}
            animate='animate'
        >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow<br /> up and move forward</p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/working.png" alt="Working" />
                    <h1><motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas</h1>
                </div>

                <div className="title">
                    <h1><motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.</h1>
                    <button>What Do I Do?</button>
                </div>
            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "white", color: '#0a0a16' }}>
                    <h2>Planning</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero eaque repudiandae debitis sint
                        porro ex corrupti vero excepturi dicta recusandae
                        distinctio exercitationem dolores, omnis officiis itaque. Ducimus, ad a!
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "white", color: 'black' }}>
                    <h2>Validation</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero eaque repudiandae debitis sint
                        porro ex corrupti vero excepturi dicta recusandae
                        distinctio exercitationem dolores, omnis officiis itaque. Ducimus, ad a!
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "white", color: 'black' }}>
                    <h2>Execution</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero eaque repudiandae debitis sint
                        porro ex corrupti vero excepturi dicta recusandae
                        distinctio exercitationem dolores, omnis officiis itaque. Ducimus, ad a!
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "white", color: 'black' }}>
                    <h2>Tests</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla libero eaque repudiandae debitis sint
                        porro ex corrupti vero excepturi dicta recusandae
                        distinctio exercitationem dolores, omnis officiis itaque. Ducimus, ad a!
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
