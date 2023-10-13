import React,{ Component } from "react";
import { NavBar } from "./NavBar";
import { MainContent } from "./MainContent";
import { TaskQuantity } from "./TaskQuantity";
export class App extends Component{
    render(){
        return(
        <React.Fragment>
        <NavBar/>
        <TaskQuantity/>
        <MainContent/> 
        </React.Fragment>
        );
    }
}