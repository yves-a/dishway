import React from "react";

import Margins from './Margins.jsx';
import '../styles/header.scss';

import fox from '../assets/images/fox.png';

function Header () {
    return (
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
    )
}

export default Header;