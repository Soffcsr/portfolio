import React, {Component} from 'react'
import { animated, useTrail } from 'react-spring'

const Profile = props => {

    const trailsh1 = useTrail(1, {
        to: {transform: 'translate(50px, 0)'},
        from: {transform: 'translate(-100px, 0)'}
    })

    const trailh2 = useTrail(1, {
        to: {transform: 'translate(20px, 20px)'},
        from: {transform: 'translate(20px, -100px)'}
    })

    return(
        <section id="profileSection">
            <animated.h1 style={trailsh1[0]}>A</animated.h1>
            <animated.h2 style={trailh2[0]}>ABOUT ME</animated.h2>
        </section>
    )
}

export default Profile