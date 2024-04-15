import React, { createContext, useState } from "react";
import data from "../data/products.js";
import OrderMockDataJson from "../data/orderMockData.js";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [orderData, setOrderData] = useState(OrderMockDataJson);

  const findByidProduct = (id) => {
    const product = products.find((item) => item.id === Number(id));
    return product;
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        orderData,
        setOrderData,
        findByidProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
