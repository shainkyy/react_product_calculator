import React,{ Component } from "react";
import { NavBar } from "./NavBar";
import { MainContent } from "./MainContent";
import { TaskQuantity } from "./TaskQuantity";
import { CustomersList } from "./CustomersList";
export class App extends Component{
    render(){
        return(
        <React.Fragment>
        <NavBar/>
        <CustomersList/>
        <TaskQuantity/>
        <MainContent/> 
        </React.Fragment>
        );
    }
}