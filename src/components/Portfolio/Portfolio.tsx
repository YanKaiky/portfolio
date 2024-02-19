import { IItemProps, Single } from './Single/Single';
import Shopyk from '/ecommerce-app.png';
import BlogDailYK from '/blog-app.png';
import Smartiky from '/financy-app.png';
import ChefDelivery from '/order-app.png';
import NavegaTour from '/travel-app.png';
import './portfolio.scss';

const items: IItemProps[] = [
  {
    id: 1,
    title: "Shopyk",
    img: Shopyk,
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
  {
    id: 5,
    title: "NavegaTour",
    img: NavegaTour,
    description: "Explore destinations, book hotels and incredible experiences all in one place. With intuitive features, we give you the freedom to create the trip of your dreams. Awaken the explorer in you and embark on personalized adventures.  ",
  },
]

export const Portfolio = () => {
  return (
    <div className='portfolio'>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  )
}
