import React from "react";

const OrderTracking = ({ details }) => {
  return (
    <div>
      <>
        {/* Button trigger modal */}
        <p
          className="text-primary"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + details.orderId}
          style={{ cursor: "pointer" }}
        >
          {details.customerName}
        </p>
        {/* Modal */}
        <div
          className="modal fade"
          id={"exampleModal" + details.orderId}
          tabIndex={-1}
          aria-labelledby={"exampleModalLabel" + details.orderId}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5"
                  id={"exampleModalLabel" + details.orderId}
                >
                  Tracking Order
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <h4>Customer Name: {details.customerName}</h4>
                <p>Order ID: {details.orderId}</p>
                <p>Order Date: {details.orderDate}</p>
                <h2>Status</h2>

                <div className="progress-stacked">
                  {details.status === "Shipped" ? (
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment one"
                      aria-valuenow={15}
                      aria-valuemin={50}
                      aria-valuemax={100}
                      style={{ width: "33.3%" }}
                    >
                      <div className="progress-bar bg-primary">Shipped</div>
                    </div>
                  ) : (
                    <></>
                  )}

                  {details.status === "Processing" ? (
                    <>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment one"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33.3%" }}
                      >
                        <div className="progress-bar bg-primary">Shipped</div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment two"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33.3%" }}
                      >
                        <div className="progress-bar bg-warning text-dark">
                          Processing
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {details.status === "Delivered" ? (
                    <>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment one"
                        aria-valuenow={15}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33.3%" }}
                      >
                        <div className="progress-bar bg-primary">Shipped</div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment two"
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33.3%" }}
                      >
                        <div className="progress-bar bg-warning text-dark">
                          Processing
                        </div>
                      </div>
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Segment three"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "33.3%" }}
                      >
                        <div className="progress-bar bg-success">Delivered</div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {details.status === "Cancelled" ? (
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Segment three"
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "100%" }}
                    >
                      <div className="progress-bar bg-danger">Cancelled</div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default OrderTracking;
