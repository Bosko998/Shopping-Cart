import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";
function Navbar() {
  const { counter } = useGlobalContext();
  return (
    <nav>
      <div className="nav-bar">
        <h4>Shopping cart</h4>
        <div className="amount-container">
          <button className="cart">
            <FaCartPlus />
          </button>
          <p className="total-amount">{counter}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
