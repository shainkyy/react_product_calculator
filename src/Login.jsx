import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "abs@gmail.com",
      password: "password",
      message: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                autoComplete="off"
                defaultValue={this.state.email}
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                autoComplete="off"
                defaultValue={this.state.password}
                onChange={(evnet) => {
                  this.setState({ password: evnet.target.value });
                }}
              />
            </div>

            {this.state.message}

            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onLoginClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  onLoginClick = () => {
    let email = this.state.email;
    let password = this.state.password;

    if (email === "abs@gmail.com" && password === "password") {
      this.setState({
        message: (
          <div className="alert alert-success" role="alert">
            Logged In Successfully!
          </div>
        ),
      });
    } else {
      this.setState({
        message: (
          <div className="alert alert-danger" role="alert">
            Please Enter Valid Credentials!
          </div>
        ),
      });
    }
  };
}
