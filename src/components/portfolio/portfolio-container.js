import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Strawberry", category: "Fruit", slug: "strawberry" },
        { title: "Carrot", category: "Vegetable", slug: "carrot" },
        { title: "Skittles", category: "Candy", slug: "skittles" },
        { title: "Apple", category: "Fruit", slug: "apple" }
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

  getPortfolioItems = () => {
    axios
      .get("https://stephenhorton.devcamp.space/portfolio/portfolio_items")
      .then(function(response) {
        console.log("response data", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
    this.getPortfolioItems();
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
