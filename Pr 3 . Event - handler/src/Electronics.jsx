import React from "react";
import "./style.css";

const Electronics = ({ product, menu, filterData }) => {
  return (
    <div>
      <div align="center">
        <h1 className="mt-3">Samsung store</h1>
        <button
          onClick={() => filterData("all")}
          className="filter-btn mx-2 mt-3"
          style={{ backgroundColor: "#007bff", borderRadius: "20px", padding: "10px 20px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}
        >
          All
        </button>
        {menu.map((item) => {
          const { id, name } = item;
          return (
            <button
              onClick={() => filterData(name)}
              className="filter-btn mx-2 mt-3"
              style={{ backgroundColor: "#007bff", borderRadius: "20px", padding: "10px 20px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}
              key={id}
            >
              {name}
            </button>
          );
        })}
        <div className="container row  mt-5">
          {product.map((p) => {
            const { id, img, name, price } = p;
            return (
              <div className="col-3" key={id}>
                <div className="card mb-4">
                  <div className="imgs m-3">
                    <img
                      src={img}
                      height={200}
                      style={{ objectFit: "contain" }}
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text mb-2">Rs : {price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
