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
        animateScrollTo(650)
        break;
      case "skills":
        animateScrollTo(1300)
        break;
      case "work":
        animateScrollTo(1950)
        break;
      case "contact":
        animateScrollTo(2600)
        break;
      default:
        break;
    }
  }

  return (
    <div className="mt-md-0" id="navbar">
      <nav className="d-none d-md-flex position-absolute nav">
        <ul className="d-flex flex-column justify-content-end justify-content-md-end text-left text-md-right">
          <animated.li style={trails[0]}>
            <a id="profile" onClick={handleOnClick} href>ABOUT ME</a>
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
