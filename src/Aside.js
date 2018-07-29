
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
          <li key={category.key} role="menuitem">
            <a href={"/music/" + category.key} tabIndex="0">
              <i className={"fa " + category.icon}>
            </i>&nbsp; {category.name}</a>
          </li>
        );
      });

    return (
      <aside className="aside menu is-fullheight is-fixed-desktop">
        <br /><p className="menu-label has-text-centered has-text-grey-darker">
          <strong>Find Music For</strong>
        </p>
        <nav>
          <ul className="menu-list has-text-indented" role="menu" aria-hidden="false">
            {categories}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;