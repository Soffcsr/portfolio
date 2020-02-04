import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = props => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link exact to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Skills">Skills</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar