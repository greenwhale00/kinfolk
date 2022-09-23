import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

function Header() {
    return (
        <header className='Header'>


            <div className="top_header">
                <div className="inner">
                    <h1>
                        <Link to='/'>
                            <img src={process.env.PUBLIC_URL + "/assets/images/small_logo.png"} alt="" />
                        </Link>
                    </h1>
                    <nav>
                        <NavMenu />
                    </nav>
                    <div className='icon'>
                        <a href=""><i className='xi-bars'></i></a>
                    </div>
                </div>
            </div>



            <div className="main_header">
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                </Link>
            </div>
        </header>
    )
}

export default Header