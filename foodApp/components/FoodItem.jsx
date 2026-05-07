import FoodDetails from "./FoodDetails";
import styles from "./foodItem.module.css";
import { useState } from "react";
export default function FoodItem({ food, setFoodId }) {
  function favourite() {}
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
          View Recipe
        </button>
        <button></button>
      </div>
    </div>
  );
}
