import { useContext, createContext, useState } from "react";
import data from "./data";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const price = data
    .map((item) => Number(item.price))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const [counter, setCounter] = useState(4);
  const [list, setList] = useState(data);
  const [totalPrice, setTotalPrice] = useState(price);
  const [loading, setLoading] = useState(true);
  const removeItem = (id, removalPrice, changeAmount) => {
    const numberOfProducts = Number(removalPrice) * changeAmount;
    const currentItem = list.filter((item) => item.id !== id);
    setList(currentItem);
    setCounter(counter - changeAmount);
    setTotalPrice(totalPrice - numberOfProducts);
  };
  return (
    <AppContext.Provider
      value={{
        counter,
        setCounter,
        list,
        setList,
        totalPrice,
        setTotalPrice,
        loading,
        setLoading,
        removeItem,
        data,
        price,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
