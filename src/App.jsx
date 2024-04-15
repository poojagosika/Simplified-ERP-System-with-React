import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./components/Header";
import Products from "./Products";
import Orders from "./Orders";
import Provider from "./context/contextAPI";
import ProductData from "./ProductData";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductData />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
