import React, { useContext, useState } from "react";
import { Context } from "./context/contextAPI";
import OrderList from "./components/OrderList";
import Pagination from "./components/Pagination";

const Orders = () => {
  const [skip, setSkip] = useState(0);
  const { orderData, setOrderData } = useContext(Context);

  const orderList = orderData.slice(skip, skip + 10);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Order Date</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {orderList.map((details, index) => {
            return (
              <OrderList
                key={details.orderId}
                details={details}
                index={index}
                skip={skip}
              />
            );
          })}
        </tbody>
      </table>
      <Pagination skip={skip} setSkip={setSkip} pageCount={orderData.length} />
    </div>
  );
};

export default Orders;
