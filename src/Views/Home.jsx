import React from "react";
import { animated, useTrail } from 'react-spring'

const Home = props => {

  const trailsdiv = useTrail(2, {
    to: {transform: 'translate(100px, 0)'},
    from: {transform: 'translate(-50px, 0)'}  
  })
  
  const trailstitle = useTrail(1, {
    to: {marginLeft: '15%', transform: 'translate(0, 50px)'},
    from: {marginLeft: '15%', transform: 'translate(0, -400px)'}
  })
  return (
    <section id="homeSection">
      <animated.div id="form1" style={trailsdiv[0]}>
      </animated.div>
      <animated.div id="form2" style={trailsdiv[1]}>
      </animated.div>
      <animated.h1 style={trailstitle[0]}>Sofía Ruiz.</animated.h1>
    </section>
  );
};

export default Home;
