import React, { Component } from "react";

export default class PortfolioContainer extends Component {
  constructor() {
    super();
    console.log("Portfolio container has rendered");
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here... Updated</h2>
      </div>
    );
  }
}
