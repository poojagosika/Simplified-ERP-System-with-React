import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "./context/contextAPI";

const ProductData = () => {
  const { id } = useParams();
  const { findByidProduct } = useContext(Context);

  const product = findByidProduct(id);

  return (
    <div>
      <>
        {/* content */}
        <section className="py-5">
          <div className="container">
            <div className="row gx-5">
              <aside className="col-lg-6">
                <div className="border rounded-4 mb-3 d-flex justify-content-center p-4">
                  <a
                    data-fslightbox="mygalley"
                    className="rounded-4"
                    target="_blank"
                    data-type="image"
                    href="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp"
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100vh",
                        margin: "auto",
                      }}
                      className="rounded-4 fit p-3 m-1"
                      src={product.thumbnail}
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-center mb-3">
                  {product.images.map((value, index) => {
                    return (
                      <div key={index}>
                        <a
                          data-fslightbox="mygalley"
                          className="border mx-1 rounded-2"
                          target="_blank"
                          data-type="image"
                          href={value}
                        >
                          <img
                            width={60}
                            height={60}
                            className="rounded-2"
                            src={value}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </aside>
              <main className="col-lg-6">
                <div className="ps-lg-3">
                  <h4 className="title text-dark">{product.title}</h4>
                  <div className="d-flex flex-row my-3 d-flex align-items-center">
                    <div className="text-warning">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <span className="ms-1">{product.rating}</span>
                    </div>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1" />
                      {product.stock} orders
                    </span>
                    <span className="bg-success rounded text-white ms-2 p-1">
                      In stock
                    </span>
                  </div>
                  <div className="mb-3">
                    <span className="h5">₹{product.price}</span>
                  </div>
                  <p>{product.description}</p>
                  <a href="#" className="btn btn-warning shadow-0 m-1">
                    Buy now
                  </a>
                  <a href="#" className="btn btn-primary shadow-0m-1">
                    <i className="me-1 fa fa-shopping-basket" /> Add to cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-light border border-secondary py-2 icon-hover px-3 m-1"
                  >
                    <i className="me-1 fa fa-heart fa-lg" /> Save
                  </a>
                </div>
              </main>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default ProductData;
