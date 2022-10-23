import React from "react";
import { Link } from "react-router-dom";

import Margins from './Margins.jsx';
import '../styles/header.scss';

import fox from '../assets/images/fox_icon.png';

function Header () {
    return (
      <div className="header">
        <Margins>
          <Link to="/" className="nav-bar" style={{ textDecoration: "none" }}>
            <img
              src={fox}
              alt="fox"
              loading="lazy"
              className="nav-logo"
            />
            <h1>
              DishWay
            </h1>
          </Link>
        </Margins>
      </div>
    )
}

export default Header;