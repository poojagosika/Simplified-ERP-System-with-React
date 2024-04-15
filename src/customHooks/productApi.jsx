import { useContext, useState } from "react";
import { Context } from "../context/contextAPI";

const productApi = () => {
  const { products, setProducts } = useContext(Context);
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
  });



  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = product;
    newProduct.id = Math.random().toString();
    setProducts((prevProducts) => {
      return [product, ...prevProducts];
    });

    //setProduct([product, ...prevProducts])

    setProduct({
      title: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const onDelete = (id) => {
    setProducts(
      products.filter((p) => {
        return p.id !== id;
      })
    );
  };

  return {
    products,
    setProducts,
    onDelete,
    product,
    setProduct,
    addProduct,
  };
};

export default productApi;
