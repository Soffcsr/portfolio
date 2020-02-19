import React from "react";
import { Link } from "react-router-dom";
import { animated, useTrail } from 'react-spring'

const Navbar = props => {

  const trails = useTrail(4, {
    to: {opacity: 1, transform: 'translate3d(-20px, 0, 0)'},
    from: {opacity: 0, transform: 'translate3d(0px, 0, 0)'}
  })

  return (
    <div>
      <nav className="d-none d-md-block">
        <ul className="d-flex flex-row flex-md-column justify-content-center justify-content-md-end">
          <animated.li style={trails[0]}>
            <Link to="/">HOME</Link>
          </animated.li>
          <animated.li style={trails[1]}>
            <Link to="/Profile">PROFILE</Link>
          </animated.li>
          <animated.li style={trails[2]}>
            <Link to="/Skills">MY SKILLS</Link>
          </animated.li>
          <animated.li style={trails[3]}>
            <Link to="/Contact">CONTACT</Link>
          </animated.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
