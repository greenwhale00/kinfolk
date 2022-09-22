import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';


const SNSLINK = [
    { id: 1, name: "Facebook", link: "https://www.facebook.com/kinfolkkorea/" },
    { id: 2, name: "Twitter", link: "https://twitter.com/kinfolkmag" },
    { id: 3, name: "Instagram", link: "https://www.instagram.com/kinfolkdosan/" },
]


const Footer = () => {

    const thisyear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <footer className='Footer'>
            <div className="inner">
                <div className='right'>
                    <p>&copy; Kinfolk <span>{thisyear()}</span></p>
                </div>
                <ul className='sns'>
                    {
                        SNSLINK.map((it, idx) => {
                            return (
                                <li key={idx}><NavLink to={it.link}>{it.name}</NavLink></li>
                            )
                        })
                    }
                </ul>
                <ul className='left'>
                    <li><a href="#!">약관</a></li>
                    <li><a href="#!">구독하기</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;