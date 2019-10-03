import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "Strawberry", category: "Fruit" },
        { title: "Carrot", category: "Vegetable" },
        { title: "Broccoli", category: "Vegetable" },
        { title: "Apple", category: "Fruit" }
      ]
    };

    // this.YOURFUNCTIONHERE = this.YOURFUNCTIONHERE.bind(this); // THIS IS ONLY NECESSARY IF YOU DONT USE ARROW FUNCTIONS****
  }

  handleFilter = filter => {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  };

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("Vegetable")}>
          Vegetable
        </button>
        <button onClick={() => this.handleFilter("Fruit")}>Fruit</button>

        {this.portfolioItems()}
      </div>
    );
  }
}
