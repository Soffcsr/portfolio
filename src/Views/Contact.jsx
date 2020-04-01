import React from 'react'
import { animated, useTrail } from 'react-spring'

const Contact = props =>{

    const trails1 = useTrail(1, {
        to: {transform: props.flag ? 'translate(10px, 10px)' : 'translate(0px, 0px)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(0px, -50px)' : 'translate(0px, 0px)'}
    })

    const trails2 = useTrail(1, {
        to: {transform: props.flag ? 'translate(20px, 0)' : 'translate(0px, 0)', opacity: props.flag ? 1 : 0},
        from: {transform: props.flag ? 'translate(-20px, 0)' : 'translate(0px, 0)'}
    })

    const trailsdivwhite = useTrail(2, {
        to: {opacity: props.flag ? 1 : 0}
    })

    //console.log("contact is:::", props.flag ? 'visible' : 'hidden')
    return(
        <section className="d-flex flex-column p-0" id="contactSection">
            <div className="h-50">
                <animated.h1 className="bold" style={trails1[0]}>CONTACT</animated.h1>
                <animated.h1 className="no-bold" style={trails2[0]}>CONTACT</animated.h1>
            </div>
            <div className="w-100 h-50">
                <animated.div className="bg-grey-t w-100 h-50" style={trailsdivwhite[0]}>
                    <div className="d-md-block d-none w-50 mt-5">
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-gitlab"></i>
                    </div>
                    <div className="d-block d-md-none w-100 mt-5">
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-gitlab"></i>
                    </div>
                </animated.div>
                <animated.div className="d-none d-md-block bg-grey w-50 h-75" style={trailsdivwhite[1]}>
                    <h2 className="mt-3">Get in touch!</h2>
                    <form className="m-2 mt-5">
                        <div className="form-row">
                            <div className="form-group col-md-6 text-left">
                                <label>Name</label>
                                <input type="text" className="form-control"></input>
                            </div>
                            <div className="form-group col-md-6 text-left">
                                <label>Email</label>
                                <input type="email" className="form-control"></input>
                            </div>
                        </div>
                        <div className="form-row m-1">
                            <div className="form-group w-100 text-left">
                                <label>Message</label>
                                <textarea type="text" rows="3" cols="10" className="form-control"></textarea>
                            </div>
                        </div>
                        <button type="button" className="btn btn-light">SEND</button>
                    </form>
                </animated.div>
            </div>
        </section>
    )
}

export default Contact