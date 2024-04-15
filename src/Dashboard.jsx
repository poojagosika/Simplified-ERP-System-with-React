import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./context/contextAPI";

const Dashboard = () => {
  const { products, orderData } = useContext(Context);

  let productsBrand = {};
  products.forEach((product) => {
    let brand = product.brand;
    if (productsBrand[brand]) {
      productsBrand[brand]++;
    } else {
      productsBrand[brand] = 1;
    }
  });
  // Convert the dictionary to the desired array format
  let productsBrandArray = Object.keys(productsBrand).map((key) => ({
    brand: key,
    Count: productsBrand[key],
  }));
  const Brand = productsBrandArray.length;

  let productsCategory = {};
  products.forEach((product) => {
    let category = product.category;
    if (productsCategory[category]) {
      productsCategory[category]++;
    } else {
      productsCategory[category] = 1;
    }
  });
  // Convert the dictionary to the desired array format
  let productsCategoryArray = Object.keys(productsCategory).map((key) => ({
    brand: key,
    Count: productsCategory[key],
  }));
  const Category = productsCategoryArray.length;

  let Rating = 0;
  products.forEach((product) => {
    Rating += product.rating;
  });

  Rating = (Rating / products.length).toFixed(1);

  let orderDataCounts = {};
  orderData.forEach((order) => {
    let status = order.status;
    if (orderDataCounts[status]) {
      orderDataCounts[status]++;
    } else {
      orderDataCounts[status] = 1;
    }
  });

  // Convert the dictionary to the desired array format
  let orderDataArray = Object.keys(orderDataCounts).map((key) => ({
    status: key,
    Count: orderDataCounts[key],
  }));

  const statusClass = (status) => {
    if (status === "Shipped") return "bg-primary text-white";
    else if (status === "Processing") {
      return "bg-warning text-dark";
    } else if (status === "Cancelled") {
      return "bg-danger text-white";
    } else if (status === "Delivered") {
      return "bg-success text-white";
    } else return "";
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <h5 className="card-header">Products</h5>

            <div className="card-body">
              <p className="card-text bg-primary text-white p-2 rounded">
                Total Brand : {Brand}
              </p>

              <p className="card-text bg-success text-white p-2 rounded">
                Total Category : {Category}
              </p>
              <p className="card-text bg-warning text-dark p-2 rounded">
                Over All Rating : {Rating}
              </p>
              <h5 className="card-title">Total Products: {products.length}</h5>

              <Link to={"/products"} className="btn btn-dark mt-2">
                Sell All Products
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <h5 className="card-header">Orders</h5>
            <div className="card-body">
              {orderDataArray.map((order, index) => {
                return (
                  <p
                    key={index}
                    className={statusClass(order.status) + " p-2 rounded"}
                  >
                    {order.status} : {order.Count}
                  </p>
                );
              })}
              <h5 className="card-title">Total Orders: {orderData.length}</h5>
              <p className="card-text"></p>
              <Link to={"/orders"} className="btn btn-dark">
                See All Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
