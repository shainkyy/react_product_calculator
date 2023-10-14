import React, { Component } from "react";

export class Product extends Component {
  constructor(props) {
    console.log("child-constructor");
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    console.log("child-render");
    return (
      <div className="col">
        <div className="card h-100 Card-Shadow">
          <img
            src={this.state.product.photo}
            className="card-img-top"
            alt={this.state.product.id}
          />
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center ">
                <h4 className="card-title ">
                  {this.state.product.productName}
                </h4>
                <h4>
                  <span className="badge bg-dark ">
                    {this.state.product.price}
                  </span>
                  <span
                    className="p-2 pointer-cursour text-danger"
                    onClick={() => {
                      this.props.OnDelete(this.state.product);
                    }}
                  >
                    <i className="fa fa-times"></i>
                  </span>
                </h4>
              </li>
            </ul>

            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="card-footer text-right">
            <div className="float-start">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                <button type="button" className="btn btn-dark">
                  {this.state.product.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount = () => {
    console.log("child-compponentdidmount");
  };
}
