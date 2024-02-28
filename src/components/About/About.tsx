// Back-end
import { FaNodeJs, FaDocker } from "react-icons/fa";
import { SiExpress, SiAdonisjs, SiNestjs, SiAxios } from "react-icons/si";
import { TbBrandLaravel } from "react-icons/tb";

// Front-end
import { RiReactjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReactquery } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { TiHtml5 } from "react-icons/ti";
import { SiCsswizardry } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

// Mobile
import { SiFlutter } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Databases
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { SiPrisma, SiMongoose, SiSequelize } from "react-icons/si";

// Cloud
import { FaAws, FaDigitalOcean } from "react-icons/fa";
import { SiTraefikproxy, SiNginx, SiApache, SiMicrosoftazure } from "react-icons/si";

// OS
import { FaLinux } from "react-icons/fa";
import { SiMacos } from "react-icons/si";

import { motion } from 'framer-motion'
import { useRef } from 'react';
import { Icon } from "..";
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
            <div className="imgContainer">
                <img src="/me.png" alt="Yan Kaiky" />
            </div>

            <div className="textContainer">
                <div className="about">
                    <h2 className="title">About Me</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius consectetur inventore. Quaerat nulla eos quidem sint quo, impedit veritatis natus similique velit incidunt ducimus delectus pariatur odio quis ipsum.</p>
                </div>

                <div className="technologies">
                    <h2 className="title">Technologies</h2>

                    <div className="skills">
                        <div className="stacks">
                            <h3 className="subtitle">Back-end</h3>

                            <div className="icons">
                                <Icon title='NodeJS' icon={<FaNodeJs />} />
                                <Icon title='Express' icon={<SiExpress />} />
                                <Icon title='AdonisJS' icon={<SiAdonisjs />} />
                                <Icon title='NestJS' icon={<SiNestjs />} />
                                <Icon title='Laravel' icon={<TbBrandLaravel />} />
                                <Icon title='Axios' icon={<SiAxios />} />
                                <Icon title='Docker' icon={<FaDocker />} />
                            </div>
                        </div>

                        <div className="stacks">
                            <h3 className="subtitle">Front-end</h3>

                            <div className="icons">
                                <Icon title='ReactJS' icon={<RiReactjsFill />} />
                                <Icon title='Vite' icon={<SiVite />} />
                                <Icon title='NextJS' icon={<TbBrandNextjs />} />
                                <Icon title='React Icons' icon={<SiReactquery />} />
                                <Icon title='Material-UI' icon={<SiMui />} />
                                <Icon title='Tailmwind CSS' icon={<SiTailwindcss />} />
                                <Icon title='Motion' icon={<TbBrandFramerMotion />} />
                                <Icon title='SCSS' icon={<BsFiletypeScss />} />
                                <Icon title='HTML' icon={<TiHtml5 />} />
                                <Icon title='CSS' icon={<SiCsswizardry />} />
                                <Icon title='JavaScript' icon={<IoLogoJavascript />} />
                                <Icon title='TypeScript' icon={<SiTypescript />} />
                            </div>
                        </div>

                        <div className="stacks">
                            <h3 className="subtitle">Mobile</h3>

                            <div className="icons">
                                <Icon title="Flutter" icon={<SiFlutter />} />
                                <Icon title="React Native" icon={<TbBrandReactNative />} />
                            </div>
                        </div>

                        <div className="stacks">
                            <h3 className="subtitle">Databases</h3>

                            <div className="icons">
                                <Icon title="MongoDB" icon={<SiMongodb />} />
                                <Icon title="PostgreSQL" icon={<BiLogoPostgresql />} />
                                <Icon title="MySQL" icon={<SiMysql />} />
                                <Icon title="PrismaORM" icon={<SiPrisma />} />
                                <Icon title="Mongoose" icon={<SiMongoose />} />
                                <Icon title="Sequelize" icon={<SiSequelize />} />
                                <Icon title="Redis" icon={<DiRedis />} />
                            </div>
                        </div>

                        <div className="stacks">
                            <h3 className="subtitle">Cloud</h3>

                            <div className="icons">
                                <Icon title="AWS" icon={<FaAws />} />
                                <Icon title="DigitalOcean" icon={<FaDigitalOcean />} />
                                <Icon title="Azure" icon={<SiMicrosoftazure />} />
                                <Icon title="Nginx" icon={<SiNginx />} />
                                <Icon title="Apache" icon={<SiApache />} />
                                <Icon title="Docker Traefik" icon={<SiTraefikproxy />} />
                            </div>
                        </div>

                        <div className="stacks">
                            <h3 className="subtitle">OS</h3>

                            <div className="icons">
                                <Icon title="Linux" icon={<FaLinux />} />
                                <Icon title="macOS" icon={<SiMacos />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
