import React, { Component } from "react";
import { Product } from "./Product";
export class CustomersList extends Component {
  constructor(props) {
    // console.log("constructor----Customerlits");
    super(props);
    this.state = {
      product: [],
    };
  }

  render() {
    // console.log("render----Customerlits");
    return (
      <div className="container">
        <h3>Shopping Cart</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.state.product.map((produ) => {
            return (
              <Product
                key={produ.id}
                product={produ}
                onIncrement={this.handelIncrement}
                onDecrement={this.handelDecrement}
                OnDelete={this.handelDelete}
              >
                <button type="button" className="btn btn-dark">
                  Buy Now
                </button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //fetching data from promise
  // componentDidMount = () => {
  //   // console.log("componentDidMount----Customerlits");
  //   let promise = fetch("http://localhost:5000/product", { method: "GET" });
  //   promise.then((response) => {
  //     let promise2 = response.json();
  //     promise2.then((products) => {
  //       this.setState({ product: products });
  //     });
  //   });
  // };

  //Fetching Date from async and await
  componentDidMount = async () => {
    let response = await fetch("http://localhost:5000/product", {
      method: "GET",
    });
    let prod = await response.json();
    this.setState({ product: prod });
  };

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(this.state.product);
    // console.log(prevProps);
    // console.log(this.props);
    // console.log("componentDidUpdate----Customerlits", prevState.product);
  };

  componentDidCatch = (error, info) => {
    // console.log("componentdidcatch");
    // console.log(error, info);
    // localStorage.lastErr = `${error}\n${JSON.stringify(info)}`;
  };

  handelIncrement = (currentprod, max) => {
    let ProdArrb = [...this.state.product];
    let index = ProdArrb.indexOf(currentprod);
    if (max > ProdArrb[index].quantity) {
      ProdArrb[index].quantity++;
      this.setState({ product: ProdArrb });
    }
  };
  handelDecrement = (currentprod, min) => {
    let ProdArrb = [...this.state.product];
    let index = ProdArrb.indexOf(currentprod);
    if (min < ProdArrb[index].quantity) {
      ProdArrb[index].quantity--;
      this.setState({ product: ProdArrb });
    }
  };

  handelDelete = (currentprod) => {
    let ProdArrb = [...this.state.product];
    let index = ProdArrb.indexOf(currentprod);
    if (window.confirm("Are You Sure?")) {
      ProdArrb.splice(index, 1);
      this.setState({ product: ProdArrb });
    }
  };
}
