
import React, { Component } from 'react';
import './StoryMenu.css';
import Story from './Story'


class StoryMenu extends Component {

  render()
  {
    return (
      <aside className="menu">
        <p className="menu-label">
          <a class="delete"></a>&nbsp;Currently Listening To
        </p>
        <Story 
          audioId="1bsxKYH_o9QhFqB01QRbKoalD6ILjqTWT"
          imageId="1snjkU3Xc2tbVfzkiiWswyx6k3xJP3LNU"
          title="Sakura Retro"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
          />
        <audio controls="controls">
          <source src="https://drive.google.com/uc?export=download&id=1bsxKYH_o9QhFqB01QRbKoalD6ILjqTWT" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li><a>Team Settings</a></li>
          <li>
            <a className="is-active">Manage Your Team</a>
            <ul>
              <li><a>Members</a></li>
              <li><a>Plugins</a></li>
              <li><a>Add a member</a></li>
            </ul>
          </li>
          <li><a>Invitations</a></li>
          <li><a>Cloud Storage Environment Settings</a></li>
          <li><a>Authentication</a></li>
        </ul>
        <p className="menu-label">
          Transactions
        </p>
        <ul className="menu-list">
          <li><a>Payments</a></li>
          <li><a>Transfers</a></li>
          <li><a>Balance</a></li>
        </ul>
      </aside>
    );
  }
}

export default StoryMenu;