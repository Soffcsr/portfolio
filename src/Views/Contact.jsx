import React from 'react'
import { animated, useTrail } from 'react-spring'

const Contact = props =>{

    const trails1 = useTrail(1, {
        to: {transform: 'translate(10px, 10px)'},
        from: {transform: 'translate(0px, -50px)'}
    })

    const trails2 = useTrail(1, {
        to: {transform: 'translate(20px, 0)'},
        from: {transform: 'translate(-20px, 0)'}
    })

    return(
        <section id="contactSection">
            <animated.h1 className="bold" style={trails1[0]}>CONTACT</animated.h1>
            <animated.h1 className="no-bold" style={trails2[0]}>CONTACT</animated.h1>
        </section>
    )
}

export default Contact