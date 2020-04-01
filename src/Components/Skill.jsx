import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import react from './../img/react.png'
import vue from './../img/vue.png'
import node from './../img/node2.png'
import css from './../img/css.png'
import laravel from './../img/laravel.png'
import java from './../img/java.png'

const Skill = props => {
    const [turn, setTurn] = useState(false)

    const frontFace = useSpring({
        transform: turn ? 'scale(0.5, 0.5)' : 'scale(1, 1)'
        // transform: turn ? 'rotateY(180deg)' : 'rotateY(0deg)',
        // display: turn ? 'none' : 'block'
    })

    const backFace = useSpring({
        // transform: turn ? 'rotateY(360deg)' : 'rotateY(0deg)',
        display: turn ? 'block' : 'none'
    })

    let onMouseEnterHandler = (e) => {
        e.preventDefault()
        setTurn(!turn)
        loadSkillLevel()
    }

    let onMouseLeaveHandler = (e) => {
        e.preventDefault()
        setTurn(!turn)
    }

    let loadSkillLevel = () => {
        let meters = document.getElementsByClassName('meter')
        
        let circle = meters[0]
        let lenght = 2 * Math.PI * 65
        let value = parseInt(circle.parentNode.getAttribute('data-value'))

        let to = lenght * ((100-value) / 100)
        console.log('to:::::', to)
        circle.getBoundingClientRect()
        circle.style.strokeDashoffset = Math.max(0, to)

    }

    return(
        <div key={props.index} className="icon" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
            <animated.img style={frontFace} className="w-75 h-auto" alt={props.skill.skillName} src={props.skill.icon === "react" ? react : props.skill.icon === "vue" ? vue : props.skill.icon === "node" ? node : props.skill.icon === "laravel" ? laravel : props.skill.icon === "css" ? css : java}></animated.img>
            <div style={backFace}>
                <svg height="130px" width="130px" viewBox="0 0 130 130" data-value="100" style={{display: turn ? 'block' : 'none', margin: '1.5vh auto'}}>
                    <circle style={{display: 'inline-block'}} className="bg" cx="65" cy="65" r="55" stroke="#ccc" fill="none"></circle>
                    <circle style={{display: 'inline-block'}} className="meter" cx="65" cy="65" r="55" stroke="#09c" fill="transparent">     
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export default Skill
