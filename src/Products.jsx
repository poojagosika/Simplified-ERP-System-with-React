import React, { useState } from "react";
import TableList from "./components/TableList";
import AddProducts from "./components/AddProducts";
import productApi from "./customHooks/productApi";
import Pagination from "./components/Pagination";

const Products = () => {
  const [skip, setSkip] = useState(0);
  const { products, product, setProduct, addProduct } = productApi();
  const productList = products.slice(skip, skip + 10);
  return (
    <div className="container mt-5">
      <AddProducts
        product={product}
        setProduct={setProduct}
        addProduct={addProduct}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock Quantity</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {productList.map((product, index) => {
            return (
              <TableList
                product={product}
                key={product.id}
                index={index}
                skip={skip}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination skip={skip} setSkip={setSkip} pageCount={products.length} />
    </div>
  );
};

export default Products;
