import React from 'react'
import { animated, useTrail } from 'react-spring'

const Work = props => {

    const trailsh1 = useTrail(1, {
        to: {transform: props.flag ? 'translate(50px, 0)' : 'translate(0px, 0)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(-100px, 0)' : 'translate(0px, 0)'}
    })

    const trailsh2 = useTrail(1, {
        to: {transform: props.flag ? 'translate(20px, 20px)' : 'translate(0px, 0px)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(20px, -100px)' : 'translate(0px, 0px)'}
    })

    const trailsection = useTrail(1, {
        to: {visibility: props.flag ? 'visible' : 'hidden'},
    })

    //console.log("work is:::", props.flag ? 'visible' : 'hidden')
    return (
        <animated.section style={trailsection[0]} id="workSection">
            <animated.h1 style={trailsh1[0]}>W</animated.h1>
            <animated.h2 style={trailsh2[0]}>MY WORK</animated.h2>
        </animated.section>
    )
}

export default Work