import React from "react";
import { animated, useTrail } from 'react-spring'
import animateScrollTo from 'animated-scroll-to';

const Navbar = props => {

  const trails = useTrail(4, {
    to: {opacity: 1, transform: 'translate3d(-20px, 0, 0)'},
    from: {opacity: 0, transform: 'translate3d(0px, 0, 0)'}
  })

  const handleOnClick = (e) =>{
    switch(e.target.id){
      case "profile":
        animateScrollTo(600)
        break;
      case "skills":
        animateScrollTo(1200)
        break;
      case "work":
        animateScrollTo(1800)
        break;
      case "contact":
        animateScrollTo(2400)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <nav className="d-none d-md-block">
        <ul className="d-flex flex-row flex-md-column justify-content-center justify-content-md-end">
          <animated.li style={trails[0]}>
            <a id="profile" onClick={handleOnClick} href>PROFILE</a>
          </animated.li>
          <animated.li style={trails[1]}>
            <a id="skills" onClick={handleOnClick} href>MY SKILLS</a>
          </animated.li>
          <animated.li style={trails[2]}>
            <a id="work" onClick={handleOnClick} href>MY WORK</a>
          </animated.li>
          <animated.li style={trails[3]}>
            <a id="contact" onClick={handleOnClick} href>CONTACT</a>
          </animated.li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
