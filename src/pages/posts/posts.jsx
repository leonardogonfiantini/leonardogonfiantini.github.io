import React from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import "./posts_style.scss"

const Posts = () => {
    return (
        <div className='post'> 
            <Navbar />
                <div className='list-posts'>
                    <ul>
                        <li>  Link1  </li>
                        <li>  Link2  </li>
                        <li>  Link3  </li>
                        <li>  Link4  </li>
                        <li>  Link5  </li>
                        <li>  Link6  </li>
                        <li>  Link7  </li>
                        <li>  Link8  </li>
                        <li>  Link9  </li>
                        <li>  Link0  </li>
                    </ul>
                </div>
            <Footer />
        </div>
    )
}

export default Posts