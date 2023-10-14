import React, { Component } from "react";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  onLoginClick = async () => {
    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      {
        method: "GET",
      }
    );
    let body = await response.json();
    if (body.length > 0) {
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
