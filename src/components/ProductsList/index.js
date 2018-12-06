import React, { Component } from "react";

class ProductsList extends Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          name: "xxx",
          count: 2
        },
        {
          name: "yyy",
          count: 3
        }
      ]
    };
  }

  componentDidMount = () => {
    // TODO step 5 - fetch data from Firebase
  };

  render = () => {
    return (
      <div className="card">
        <div className="card-header">Product List</div>
        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">
              Product 1
              <span className="badge badge-pill badge-success">10</span>
            </li>
            <li className="list-group-item">
              Product 2
              <span className="badge badge-pill badge-success">20</span>
            </li>
            {/* TODO step 3 - bring to life this list dynamic (using state) */}
            {this.state.products.map((product, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {product.name}
                  <span className="badge badge-pill badge-success">
                    {" "}
                    {product.count}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };
}

export default ProductsList;
