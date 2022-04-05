import React from 'react'
import "./navbar_style.scss"

import mushroom from "./mushroom.png"
import menu from "./menu.png"
import sun from "./moon.png"
import moon from "./sun.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='name'>
                <img src={mushroom} alt="mush" />
                <p>Leo.</p>
            </div>

            <div className='dash'>
                <ul>
                    <li> <button className='mode'> <img src={moon} alt="mode" /> </button> </li>
                    <li> <button className='menu'> <img src={menu} alt="dash" /> </button> </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar