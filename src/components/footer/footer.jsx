import React from 'react'
import "./footer_style.scss"

import instagram from './instagram.png'
import linkedin from './linkedin.png'
import github from './github.png'

const Footer = () => {
    return (
        <div className = 'Footer'> 
            <p> Dove puoi trovarmi: </p>
            <ul>
                <li> <a href='https://www.instagram.com/leonardo_gonfiantini/'> <img src={instagram} alt="instagram-icon" /> </a> </li>
                <li> <a href="https://github.com/leonardogonfiantini"> <img src={github} alt="github-icon" /> </a> </li>
                <li> <a href="https://it.linkedin.com/in/leonardo-gonfiantini-b12871235/"> <img src={linkedin} alt="linkedin-icon" /> </a> </li>
            </ul>
        </div>
    )
}

export default Footer