import React from 'react'
import { animated, useTrail } from 'react-spring'

const Work = props => {

    const trailsh1 = useTrail(1, {
        to: {transform: 'translate(50px, 0)'},
        from: {transform: 'translate(-100px, 0)'}
    })

    const trailsh2 = useTrail(1, {
        to: {transform: 'translate(20px, 20px)'},
        from: {transform: 'translate(20px, -100px)'}
    })

    return (
        <section id="workSection">
            <animated.h1 style={trailsh1[0]}>W</animated.h1>
            <animated.h2 style={trailsh2[0]}>MY WORK</animated.h2>
        </section>
    )
}

export default Work