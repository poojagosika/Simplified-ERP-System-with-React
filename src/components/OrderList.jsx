import React, { useContext, useState } from "react";
import { Context } from "../context/contextAPI";
import OrderTracking from "./OrderTracking";

const OrderList = ({ details, index, skip }) => {
  const { orderData, setOrderData } = useContext(Context);
  const [status, setStatus] = useState(details.status);

  const statusBar = (status) => {
    if (status === "Shipped") return "bg-primary text-white";
    else if (status === "Processing") {
      return "bg-warning text-dark";
    } else if (status === "Cancelled") {
      return "bg-danger text-white";
    } else if (status === "Delivered") {
      return "bg-success text-white";
    } else return "";
  };

  const onDelete = (id) => {
    setOrderData((pre) => {
      return pre.filter((o) => {
        return o.orderId !== id;
      });
    });
  };

  const updateStatus = (newStatus, id) => {
    setOrderData((prev) => {
      return prev.map((value) => {
        if (value.orderId === id) {
          return { ...value, status: newStatus };
        }
        return value;
      });
    });
    setStatus(newStatus);
  };

  return (
    <tr key={index}>
      <th scope="row">{index + 1 + skip}</th>
      <td>{details.orderId}</td>
      <td>{<OrderTracking details={details} />}</td>
      <td>{details.orderDate}</td>
      <td>
        <select
          className={statusBar(details.status) + " rounded-pill form-select"}
          aria-label="Default select example"
          value={status}
          onChange={(e) => updateStatus(e.target.value, details.orderId)}
        >
          <option value={"Shipped"}>Shipped</option>
          <option value={"Processing"}>Processing</option>
          <option value={"Delivered"}>Delivered</option>
          <option value={"Cancelled"}>Cancelled</option>
        </select>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(details.orderId)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderList;
