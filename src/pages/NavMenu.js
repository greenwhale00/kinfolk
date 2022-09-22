import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const NAVLINK = [
    { content: "Magazine", link: "/sub01" },
    { content: "Store", link: "/sub02" },
    { content: "Space", link: "/sub03" },
]


const NavMenu = () => {
    return (
        <>
            <ul>
                {
                    NAVLINK.map((it, idx) => {
                        return (
                            <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NavMenu