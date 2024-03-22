import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

import { shortenText } from "../helper/helper";

import styles from "../components/BasketCard.module.css";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

export default function BasketCard({ data }) {
  const { title, quantity, image } = data;

  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}
