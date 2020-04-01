import React, {useState} from 'react'
import animateScrollTo from 'animated-scroll-to';
import { animated, useTrail } from 'react-spring'

const NavbarMov = props => {
    const [isClicked, setIsClicked] = useState(false);

    const active = isClicked ? 'button_container active' : 'button_container' 

    const open = isClicked ? 'overlay open' : 'overlay'

    const trails = useTrail(5, {
        to: {opacity: 1, transform: 'translate3d(-20px, 0, 0)'},
        from: {opacity: 0, transform: 'translate3d(0px, 0, 0)'}
      })

    let handlerOnClick = () =>{
        setIsClicked(!isClicked)
    }

    const handleOnClickLink = (e) =>{
        switch(e.target.id){
          case "home":
            animateScrollTo(0)
            setIsClicked(!isClicked)
            break;
          case "profile":
            animateScrollTo(600)
            setIsClicked(!isClicked)
            break;
          case "skills":
            animateScrollTo(1250)
            setIsClicked(!isClicked)
            break;
          case "work":
            animateScrollTo(1900)
            setIsClicked(!isClicked)
            break;
          case "contact":
            animateScrollTo(2550)
            setIsClicked(!isClicked)
            break;
          default:
            break;
        }
      }

    return(
        <div className="container d-md-none" id="navbarmov">
            <div className={active} id="toggle" onClick={handlerOnClick}>
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
            </div>
            <div className={open} id="overlay">
                <nav className="overlay-menu">
                    <ul>
                        <animated.li style={trails[0]}><a id="home" onClick={handleOnClickLink} href>HOME</a></animated.li>
                        <animated.li style={trails[1]}><a id="profile" onClick={handleOnClickLink} href>ABOUT ME</a></animated.li>
                        <animated.li style={trails[2]}><a id="skills" onClick={handleOnClickLink} href>MY SKILLS</a></animated.li>
                        <animated.li style={trails[3]}><a id="work" onClick={handleOnClickLink} href>MY WORK</a></animated.li>
                        <animated.li style={trails[4]}><a id="contact" onClick={handleOnClickLink} href>CONTACT</a></animated.li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavbarMov