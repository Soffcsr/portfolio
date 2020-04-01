import React from 'react'
import { animated, useTrail } from 'react-spring'
import Skill from '../Components/Skill'

const Skills = props =>{

    const trailh2 = useTrail(1, {
        to: {transform: props.flag ? 'translate(20px, 20px)' : 'translate(0px, 0px)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(-200px, -100px)' : 'translate(0px, 0px)'}
    })

    const trailsection = useTrail(1, {
        to: {visibility: props.flag ? 'visible' : 'hidden'},
    })

    return(
        <animated.section className="d-flex flex-column" style={trailsection[0]} id="skillsSection">
            <div className="h-25">
                <animated.h1 style={trailh2[0]}>My Skills</animated.h1>
            </div>
            <div className="d-flex flex-row justify-content-center flex-wrap flex-md-nowrap skills">
                {
                    props.skills.map((skill, index) => {
                        return(
                            <Skill
                                skill = {skill}
                                key = {index}
                                index = {index}
                            />
                        )
                    })
                }
            </div>
        </animated.section>
    )
}

export default Skills