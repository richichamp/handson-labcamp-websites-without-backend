import React, { Component } from "react";
import "bootstrap";

import "./index.css";

// TODO - step 1: Import components
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import NewProduct from "./components/NewProduct";

// TODO - step 4: Import Firebase and initialize it

class App extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-5">
              Building simple Websites without backend
            </h1>
            <p className="lead">
              This will be your playground for the hands on part of this
              labcamp.
            </p>
          </div>
        </div>
        {/* TODO - step 2: render ProductsList component */}
        <div>
          <ProductsList />
        </div>

        {/* TODO - step 6: render NewProduct component */}
        <NewProduct />

        {/* TODO - step 10: render AddProduct component */}
        <AddProduct />
      </div>
    );
  };
}

export default App;
