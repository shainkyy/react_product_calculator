import React, { Component } from "react";
import { NavBar } from "./NavBar";
import { MainContent } from "./MainContent";
import { TaskQuantity } from "./TaskQuantity";
import { CustomersList } from "./CustomersList";
import { Login } from "./Login";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <CustomersList />
        <Login />
        <TaskQuantity />
        <MainContent />
      </React.Fragment>
    );
  }
}
