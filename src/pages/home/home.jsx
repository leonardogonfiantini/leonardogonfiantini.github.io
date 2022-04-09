import React from 'react'
import "./home_style.scss"

import Navbar from "../../components/navbar/navbar"
import Bio from '../../components/bio/bio'
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <div className='works'> 
                <Navbar />
                <Bio /> 
                <Footer />
        </div>
    )
}

export default Home