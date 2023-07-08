import React, { useEffect } from "react";
import SingleItem from "./SingleItem";
import { useGlobalContext } from "./context";
function Items() {
  const { list, setList, setCounter, totalPrice, setTotalPrice, data, price } =
    useGlobalContext();
  const clearCart = () => {
    setCounter(list.length);
    setList([]);
  };
  const retrieveData = () => {
    setList(data);
    setCounter(data.length);
    setTotalPrice(price);
  };
  useEffect(() => {
    if (list.length === 0) {
      setCounter(list.length);
    }
  }, [list]);

  if (list.length === 0) {
    return (
      <div className="main-wrapper">
        <div className="heading">
          <h2>your bag</h2>
        </div>
        <p className="empty">is currently empty</p>
        <div style={{ marginTop: "1.5rem" }}>
          <button className="retrieveButton" onClick={retrieveData}>
            retrive cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-wrapper">
      <div className="heading">
        <h2>your bag</h2>
      </div>
      <div className="items">
        {list.map((item) => {
          return <SingleItem key={item.id} item={item} />;
        })}
      </div>
      <hr />
      <div className="footer">
        <p>total</p>
        <p className="total">${totalPrice.toFixed(2)}</p>
      </div>
      <button className="clear" onClick={clearCart}>
        clear cart
      </button>
    </div>
  );
}

export default Items;
