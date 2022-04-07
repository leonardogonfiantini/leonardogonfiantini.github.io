import React from 'react'
import "./home_style.scss"

import Navbar from "../../components/navbar/navbar"
import Bio from '../../components/bio/bio'

const Home = () => {
    return (
        <div className='works'> 
                <Navbar />
                <Bio /> 
        </div>
    )
}

export default Home