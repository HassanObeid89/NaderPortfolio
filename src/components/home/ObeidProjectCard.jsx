import React from 'react'
import { Link } from 'react-router-dom'
import ObeidCard from '../../assets/obeidProject/Lebanese_Kitchen_Style_1.jpeg';

import '../../css/projectCard.scss';
function ObeidProjectCard() {
    return (
        <>

            <div className='cardContainer'>

                <img className='project_image' src={ObeidCard} alt="" />
                <div className='description'>
                    <ul>
                        <li>
                            Obeid Project
                    </li>
                        <li>
                            AutoCad, 3DMAX
                    </li>
                    </ul>

                    <Link to='/Obeid'>
                        <button className='view_button'>View</button>
                    </ Link>

                </div>
            </div>



        </>
    )
}

export default ObeidProjectCard
