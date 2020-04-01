import React from 'react'
import { animated, useTrail } from 'react-spring'

const Profile = props => {

    const trailsh1 = useTrail(1, {
        to: {transform: 'translate(50px, 0)', opacity: props.flag ? 1 : 0},
        from: {transform: 'translate(-200px, 0)'}
    })

    const trailh2 = useTrail(1, {
        to: {transform: props.flag ? 'translate(20px, 20px)' : 'translate(0px, 0px)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(20px, -250px)' : 'translate(0px, 0px)'}
    })

    const trailcontent = useTrail(1, {
        to: {transform: props.flag ? 'translate(-10px, 20px)' : 'translate(0px, 0px)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(50px, -300px)' : 'translate(0px, 0px)'}
    })

    const trailsection = useTrail(1, {
        to: {visibility: props.flag ? 'visible' : 'hidden'},
    })

    //console.log("profile is:::", props.flag ? 'visible' : 'hidden')
    return(
        <animated.section className="d-flex flex-column flex-md-row align-items-center align-items-md-start" style={trailsection[0]} id="profileSection">
            <div className="w-50">
                <animated.h1 style={trailsh1[0]}>A</animated.h1>
                <animated.h2 style={trailh2[0]}>ABOUT<br/>ME</animated.h2>
            </div>
            <animated.div className="w-50 text-center pt-5 text-white about" style={trailcontent[0]}>
                {props.about}
            </animated.div>
        </animated.section>
    )
}

export default Profile