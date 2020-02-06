import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
      <nav className="d-none d-md-block">
        <ul className="d-flex flex-row justify-content-end">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Skills">Skills</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;
