import React, { Component } from "react";
import { Product } from "./Product";
export class CustomersList extends Component {
  constructor(props) {
    console.log("constructor----Customerlits");
    super(props);
    this.state = {
      product: [
        {
          id: 1,
          productName: "iPhone",
          price: "89000",
          quantity: 0,
          photo: "https://picsum.photos/200/60",
        },
        {
          id: 2,
          productName: "Sony Camera",
          price: "8000",
          quantity: 0,
          photo: "https://picsum.photos/201/60",
        },
        {
          id: 3,
          productName: "Samsung QLED TV",
          price: "9000",
          quantity: 0,
          photo: "https://picsum.photos/202/60",
        },
        {
          id: 4,
          productName: "iPad Pro",
          price: "49000",
          quantity: 0,
          photo: "https://picsum.photos/203/60",
        },
        {
          id: 5,
          productName: "OnePlus 9R",
          price: "85000",
          quantity: 0,
          photo: "https://picsum.photos/204/60",
        },
        {
          id: 6,
          productName: "Pulsur Bike",
          price: "83000",
          quantity: 0,
          photo: "https://picsum.photos/205/60",
        },
        {
          id: 7,
          productName: "Dish TV",
          price: "1000",
          quantity: 0,
          photo: "https://picsum.photos/206/60",
        },
        {
          id: 8,
          productName: "Dell Desktop",
          price: "59000",
          quantity: 0,
          photo: "https://picsum.photos/207/60",
        },
        {
          id: 9,
          productName: "Xbox",
          price: "43000",
          quantity: 0,
          photo: "https://picsum.photos/208/60",
        },
        {
          id: 10,
          productName: "Washing Machine",
          price: "39000",
          quantity: 0,
          photo: "https://picsum.photos/209/60",
        },
        {
          id: 11,
          productName: "Refrigenerator",
          price: "12000",
          quantity: 0,
          photo: "https://picsum.photos/210/60",
        },
        {
          id: 12,
          productName: "Table",
          price: "49000",
          quantity: 0,
          photo: "https://picsum.photos/211/60",
        },
      ],
    };
  }

  render() {
    console.log("render----Customerlits");
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

  componentDidMount = () => {
    console.log("componentDidMount----Customerlits");
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.product);
    console.log(prevProps);
    console.log(this.props);
    console.log("componentDidUpdate----Customerlits", prevState.product);
  };

  componentDidCatch = (error, info) => {
    console.log("componentdidcatch");
    console.log(error, info);
    localStorage.lastErr = `${error}\n${JSON.stringify(info)}`;
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
