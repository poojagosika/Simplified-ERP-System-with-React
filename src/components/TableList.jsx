import React from "react";
import EditProduct from "./EditProduct";
import productApi from "../customHooks/productApi";
import { Link } from "react-router-dom";

const TableList = ({ product, index, skip }) => {
  const { editProduct, setEditProduct, updateProduct, onDelete } = productApi();
  return (
    <tr>
      <th scope="row">{index + 1 + skip}</th>
      <td>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          {product.title}
        </Link>
      </td>
      <td>{product.category}</td>
      <td>₹{product.price}</td>
      <td>{product.stock}</td>
      <td>
        <EditProduct productData={product} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableList;
