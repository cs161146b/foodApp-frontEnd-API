import FoodDetails from "./FoodDetails";
import styles from "./foodItem.module.css";
import { useState } from "react";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

export default function FoodItem({ food, setFoodId }) {
  const [IdData, setIdData] = useState([]);
  const [isfavorite, setisfavorite] = useState(false);

  function favorite() {
    setisfavorite(!isfavorite);
    localStorage.setItem(food.id);
  }

  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image}></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={(e) => {
            setFoodId(food.id);
            scrollTo(0, 0);
          }}
        >
          {console.log(food.id)}
          View Recipe
        </button>

        <button
          onClick={(e) => {
            favorite();
          }}
        >
          {isfavorite ? (
            <MdOutlineFavorite style={{ color: "red" }} />
          ) : (
            <MdFavoriteBorder />
          )}
        </button>
      </div>
    </div>
  );
}
