import { IItemProps, Single } from './Single/Single';
import { motion, useScroll, useSpring } from 'framer-motion';
import ShopYK from '/ecommerce-app.png';
import BlogDailYK from '/blog-app.png';
import Smartiky from '/financy-app.png';
import ChefDelivery from '/order-app.png';
import { useRef } from 'react';
import './portfolio.scss';

export const Portfolio = () => {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }} />
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  )
}

const items: IItemProps[] = [
  {
    id: 1,
    title: "ShopYK",
    img: ShopYK,
    description: "Offers a variety of clothing and accessories for women, men and children. The selection includes casual wear, formal wear, footwear, handbags, jewelry and other fashion accessories carefully selected to meet customers' needs and preferences.",
  },
  {
    id: 2,
    title: "Blog DailYK",
    img: BlogDailYK,
    description: "From travel to technology, the blog offers inspiring and informative content for all tastes. Discover captivating narratives and useful tips in one place.",
  },
  {
    id: 3,
    title: "Smartiky",
    img: Smartiky,
    description: "It seeks to simplify financial control, offering intuitive tools for budgeting, tracking expenses and financial goals. Manage your money with ease and reach your financial goals with confidence.",
  },
  {
    id: 4,
    title: "ChefDelivery",
    img: ChefDelivery,
    description: "Explore a variety of local restaurants, order online and have delicious meals delivered to your door. From traditional flavors to international cuisines, we offer a convenient and delicious culinary experience. Satisfy your gastronomic desires with just a few clicks. Enjoy the best of food, delivered directly to you.",
  },
];
