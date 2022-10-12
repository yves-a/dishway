import React from "react";

import Margins from './Margins.jsx';
import '../styles/header.scss';

import fox from '../assets/images/fox_icon.png';

function Header () {
    return (
      <div className="header">
        <Margins>
          <div className="nav-bar">
            <img
              src={fox}
              alt="fox"
              loading="lazy"
              className="nav-logo"
            />
            <h1>
              DishWay
            </h1>
          </div>
        </Margins>
      </div>
    )
}

export default Header;