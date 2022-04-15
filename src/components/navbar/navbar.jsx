import React from 'react'
import "./navbar_style.scss"

import mushroom from "./mushroom.png"
import menu from "./menu.png"

const Navbar = () => {

    function openMenu() {
        var large_menu = document.querySelector('.large-menu');
        if (large_menu.style.display == 'none')
            large_menu.style.display = 'block';
        else 
            large_menu.style.display = 'none';
    }

    return (
        <div className='navbar'>
            <a href="/"><div className='name'>
                <img src={mushroom} alt="mush" />
                <p>Gonfia.</p>
            </div></a>

            <div className='dash'>
                <ul>
                    <li> 
                        <button 
                            className='menu int-button' 
                            onClick={openMenu}
                        > 
                            <img src={menu} alt="dash" /> 
                        </button>
                    </li>

                    <div className='large-menu'>
                        <li> <a href='/works'> <button> Works </button> </a> </li>
                        <li> <a href='/posts'> <button> Posts </button> </a> </li>
                        <li> <a href='https://github.com/leonardogonfiantini'> <button> Source </button> </a> </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar