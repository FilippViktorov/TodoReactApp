import React, { Component } from 'react';
export default class Child extends Component {
render() {
    return (
      <div>
          <center><h3>I am Child component</h3></center>
          <h3>{this.props.Title}</h3>
      </div>
    );
 }
}
