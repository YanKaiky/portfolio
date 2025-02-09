import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface IItemProps {
  id: number;
  title: string;
  img: string;
  description: string;
  url: string;
}

interface ISingleProps {
  item: IItemProps;
}

export const Single: FC<ISingleProps> = ({ item }) => {
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <a href={item.url} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
