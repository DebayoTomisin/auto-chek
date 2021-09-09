import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>
{
    return(
        <nav className="navbar">
            <div className="nav-header">
                <Link to="/"> <h3>AUTOCHECK-HOUSING</h3> </Link>
            </div>
        </nav>
    )
}

export default Header
