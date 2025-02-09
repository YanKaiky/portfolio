import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { IItemProps, Single } from "./single";

const items: IItemProps[] = [
  {
    id: 1,
    title: "GramHub",
    img: "/gramhub.png",
    description: "A SaaS that automates your responses on Instagram using AI.",
    url: "https://www.gramhub.com",
  },
  {
    id: 2,
    title: "Instituto Pequena Fênix - IPF",
    img: "/ipf.png",
    description:
      "Project related to a children's hospital institution, created for a college project.",
    url: "https://instituto-pequena-fenix.netlify.app/",
  },
  {
    id: 3,
    title: "Bistro Café",
    img: "/bistro-café.png",
    description: "A portfolio landing page for a Bistro Café.",
    url: "https://menuplacerestaurant.netlify.app/",
  },
  {
    id: 4,
    title: "Smartiky",
    img: "/smartiky.png",
    description: "A SaaS that helps you keep your finances on track using AI.",
    url: "https://www.smaritky.com",
  },
];

export const Portfolio = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};
