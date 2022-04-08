import React from 'react'
import "./bio_style.scss"

import profile from './profile.jpg'

const Bio = () => {

    return (
        <div className='Bio'>
            <div className='profile'> 
                <p> Leonardo Gonfiantini </p>
                <img src={profile} alt="profile image" />        
            </div>

            <div className='whoami'>
                <h2> Whoami: </h2>
                <hr/>
                <p> Mi chiamo Leonardo, ho 21 anni, studio computer science a Genova, tra tutte le cose che ho studiato
                    mi sono appassionato dello sviluppo di applicazioni web, in particolare di tutto lo sviluppo, dal 
                    front-end fino al back-end. <br/>
                    Attualmente sto studiando nuove librerie javascript, e portando avanti alcuni progetti, per lo piu
                    riguardanti il web development. <br/>
                    Durante il mio tempo libero provo a completare qualche challenge di codeforces e porto avanti
                    i miei progetti personali su github.
                </p>
            </div>


            <div className='tree-life'>
                <h2> Path: </h2>
                <hr/>
                <ul>
                    <li> 
                        <h3> 2000 </h3> 
                        <p> Nato a Genova, Italia </p>
                    </li>
                    <li> 
                        <h3> 202* </h3>
                        <p> Laureato in Computer Science,
                            all'universita degli studi di Genova  
                        </p>
                    </li>
                </ul>
            </div>

            <div className='loves'>
                <h2> I love: </h2>
                <hr/>
                <p> Nature, Cooking, Music, Web, Chess, Board games, Magic </p>
            </div>

        </div>
    )
}

export default Bio