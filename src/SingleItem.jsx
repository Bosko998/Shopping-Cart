import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
function SingleItem({ item }) {
  const { counter, setCounter, totalPrice, setTotalPrice, removeItem } =
    useGlobalContext();
  const { id, title, price, amount, img } = item;
  const [changeAmount, setchangeAmount] = useState(amount);
  const generateItem = (e, idParam) => {
    if (e.currentTarget.className === "arrow-up") {
      setchangeAmount(changeAmount + 1);
      setCounter(counter + 1);
      setTotalPrice(Number(price) + totalPrice);
    } else {
      setTotalPrice(
        changeAmount === 0 ? totalPrice : totalPrice - Number(price)
      );
      setchangeAmount(changeAmount === 0 ? 0 : changeAmount - 1);
      setCounter(changeAmount === 0 ? counter : counter - 1);
    }
  };
  return (
    <div className="single-item">
      <img src={img} alt={title} />
      <div className="content-item">
        <h4>{title}</h4>
        <p>${price}</p>
        <button
          className="btn"
          onClick={() => removeItem(id, price, changeAmount)}
        >
          remove
        </button>
      </div>
      <div className="arrows">
        <button className="arrow-up" onClick={(e) => generateItem(e)}>
          <FaChevronUp />
        </button>
        <p>{changeAmount}</p>
        <button className="arrow-down" onClick={(e) => generateItem(e, id)}>
          <FaChevronDown />
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
