
import React, { Component } from 'react';
import './Aside.css';
import CategoriesData from './Categories';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    let categories = [];
    CategoriesData.forEach((category, index) => {
      categories.push(category);
    });

    this.setState({
      categories: categories
    });
  }

  render() {
    var categories = 
      this.state.categories.map((category, index) => {
        return (
          <li key={category.key}>
            <a href={"/music/" + category.key}>
              <i className={"fa " + category.icon} aria-hidden="true">
            </i>&nbsp; {category.name}</a>
          </li>
        );
      });

    return (
      <aside className="aside menu has-background-light is-fixed-desktop">
        <br /><p className="menu-label has-text-centered">
          Find Music For
        </p>
        <ul className="menu-list has-text-indented">
          {categories}
        </ul>
      </aside>
    );
  }
}

export default Aside;