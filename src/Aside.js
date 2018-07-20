
import React, { Component } from 'react';
import './Aside.css';
import Story from './Story'

class Aside extends Component {
  render()
  {
    return (
      <aside className="aside menu">
        <br /><p className="menu-label has-text-centered">
          Find Music For
        </p>
        <ul className="menu-list has-text-indented">
          <li><a className="is-active" href="/music/all"><i className="fa fa-circle-o" aria-hidden="true"></i>&nbsp; anything</a></li>
          <li><a href="/music/videos"><i className="fa fa-film" aria-hidden="true"></i>&nbsp; videos</a></li>
          <li><a href="/music/games"><i className="fa fa-gamepad" aria-hidden="true"></i>&nbsp; games</a></li>
          <li><a href="/music/meditation"><i className="fa fa-bell-o" aria-hidden="true"></i>&nbsp; meditation</a></li>
          <li><a href="/music/winter"><i className="fa fa-tree" aria-hidden="true"></i>&nbsp; winter</a></li>
          <li><a href="/music/spring"><i className="fa fa-leaf" aria-hidden="true"></i>&nbsp; spring</a></li>
          <li><a href="/music/summer"><i className="fa fa-sun-o" aria-hidden="true"></i>&nbsp; summer</a></li>
          <li><a href="/music/autumn"><i className="fa fa-moon-o" aria-hidden="true"></i>&nbsp; autumn</a></li>
        </ul>
        <br /><p className="menu-label has-text-centered">
          Now Listening To
        </p>
        <Story 
          audioId="1bsxKYH_o9QhFqB01QRbKoalD6ILjqTWT"
          imageId="1snjkU3Xc2tbVfzkiiWswyx6k3xJP3LNU"
          title="Sakura Retro"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
          />
      </aside>
    );
  }
}

export default Aside;