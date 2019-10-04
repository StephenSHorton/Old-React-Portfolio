import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: []
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

  getPortfolioItems = () => {
    axios
      .get("https://stephenhorton.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  portfolioItems() {
    return this.state.data.map(item => {
      console.log("item data", item);
      return <PortfolioItem title={item.title} url={item.url} slug={item.id} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("Vegetable")}>
          Vegetable
        </button>
        <button onClick={() => this.handleFilter("Fruit")}>Fruit</button>
        <button onClick={() => this.handleFilter("Candy")}>Candy</button>

        {this.portfolioItems()}
      </div>
    );
  }
}
