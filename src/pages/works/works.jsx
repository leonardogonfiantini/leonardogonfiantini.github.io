import React from 'react'
import "./works_style.scss"

import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Work from '../../components/work/work'

import Ankuoo from '../../components/work/ankuoo.png'

const Works = () => {
    return (
        <div className='works'> 
            <Navbar />

                <Work title="Ankuoo web app" img={Ankuoo} description="Ho ricreato l'app di ankuoo, per i dispositivi iot, si possono inserire timer, time schedule con orari e giorni ma anche accendere direttamente il dispositivo, l'applicazione utilizza mongodb atlas per tenere traccia delle operazioni"/>

            <Footer />
        </div>
    )
}

export default Works