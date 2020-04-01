import React from "react";
import { animated, useTrail } from 'react-spring'

const Home = props => {

  const trailsdiv = useTrail(2, {
    to: {transform: 'translate(100px, 0)'},
    from: {transform: 'translate(-50px, 0)'}  
  })
  
  const trailstitle = useTrail(1, {
    to: {opacity: 1, transform: 'translate(0, 50px)'},
    from: {opacity: 0, transform: 'translate(0, -400px)'}
  })

  return (
    <section id="homeSection">
      <animated.div className="d-none d-md-flex" id="form1" style={trailsdiv[0]}>
      </animated.div>
      <animated.div className="d-none d-md-flex" id="form2" style={trailsdiv[1]}>
      </animated.div>
      <animated.h1 className="ml-md-5 ml-0" style={trailstitle[0]}>{props.name} {props.lastname}</animated.h1>
    </section>
  );
};

export default Home;
