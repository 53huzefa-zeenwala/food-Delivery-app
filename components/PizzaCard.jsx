import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.image} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[2]}</span>
      <p className={styles.description}>{pizza.description}</p>
    </div>
  );
};

export default PizzaCard;
