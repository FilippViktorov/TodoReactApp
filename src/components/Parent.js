import React, { Component } from "react";
import Child from './Child';
import Demo1 from './Demo1';


export default class Parent extends Component {
    
    render() {
        return (
            <div>
            <center><h1>I am parent component</h1></center>
            <center><Child Title="I am Text from Parent component"></Child></center>
            <center><Demo1 Title="I am Text from function component"></Demo1></center>
            </div>
        );
    }
}