import React from "react";
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
            <a href>HOME</a>
          </animated.li>
          <animated.li style={trails[1]}>
            <a href>PROFILE</a>
          </animated.li>
          <animated.li style={trails[2]}>
            <a href>MY SKILLS</a>
          </animated.li>
          <animated.li style={trails[3]}>
            <a href>CONTACT</a>
          </animated.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
