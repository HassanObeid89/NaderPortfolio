import React from 'react'
import { Link } from 'react-router-dom'
import SannanCard from '../../assets/aliSannanProject/Lebanese_Kitchen_1.jpeg';
import AliSannan from '../projects/AliSannan';
import '../../css/projectCard.scss';
function SannanProjectCard() {
    return (
        <>

            <div className='cardContainer'>

                <img className='project_image' src={SannanCard} alt="" />
                <div className='description'>
                    <ul>
                        <li>
                            Sannan Project
                    </li>
                        <li>
                            AutoCad, 3DMAX
                    </li>
                    </ul>

                    <Link to='/Sannan'>
                        <button className='view_button'>View</button>
                    </ Link>

                </div>
            </div>

            
       
        </>
    )
}

export default SannanProjectCard
