import { IItemProps, Single } from "./Single/Single";
import { motion, useScroll, useSpring } from "framer-motion";
import ShopYK from "/ecommerce-app.png";
import IPF from "/ipf.png";
import BCafé from "/bistro-café.png";
import ChefDelivery from "/order-app.png";
import { useRef } from "react";
import "./portfolio.scss";

export const Portfolio = () => {
  const ref = useRef<any>(null);

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

const items: IItemProps[] = [
  {
    id: 1,
    title: "Bistro Café",
    img: BCafé,
    description: "A portfolio landing page for a Bistro Café.",
    url: "https://menuplacerestaurant.netlify.app/",
  },
  {
    id: 2,
    title: "Instituto Pequena Fênix - IPF",
    img: IPF,
    description:
      "Project related to a children's hospital institution, created for a college project.",
    url: "https://instituto-pequena-fenix.netlify.app/",
  },
  {
    id: 3,
    title: "ShopYK",
    img: ShopYK,
    description:
      "Offers a variety of clothing and accessories for women, men and children. The selection includes casual wear, formal wear, footwear, handbags, jewelry and other fashion accessories carefully selected to meet customers' needs and preferences.",
    url: "https://www.github.com/YanKaiky",
  },
  {
    id: 4,
    title: "ChefDelivery",
    img: ChefDelivery,
    description:
      "Explore a variety of local restaurants, order online and have delicious meals delivered to your door. From traditional flavors to international cuisines, we offer a convenient and delicious culinary experience. Satisfy your gastronomic desires with just a few clicks. Enjoy the best of food, delivered directly to you.",
    url: "https://www.github.com/YanKaiky",
  },
];
