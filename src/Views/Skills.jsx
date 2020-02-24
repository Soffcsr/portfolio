import React from 'react'
import { animated, useTrail } from 'react-spring'

const Skills = props =>{

    const trailsh1 = useTrail(1, {
        to: {transform: 'translate(50px, 0)'},
        from: {transform: 'translate(-100px, 0)'}
    })

    const trailh2 = useTrail(1, {
        to: {transform: 'translate(20px, 20px)'},
        from: {transform: 'translate(20px, -100px)'}
    })

    return(
        <section id="skillsSection">
            <animated.h1 style={trailh2[0]}>My Skills</animated.h1>
        </section>
    )
}

export default Skills