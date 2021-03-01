import React from 'react'
import { Link } from 'react-router-dom'
import VillaCard from '../../assets/lebaneseVilla/Lebanese_villa_1.jpeg';

import '../../css/projectCard.scss';
function LebaneseVillaCard() {
    return (
        <>

            <div className='cardContainer'>

                <img className='project_image' src={VillaCard} alt="" />
                <div className='description'>
                    <ul>
                        <li>
                            Villa Project
                    </li>
                        <li>
                            AutoCad, 3DMAX
                    </li>
                    </ul>

                    <Link to='/Villa'>
                        <button className='view_button'>View</button>
                    </ Link>

                </div>
            </div>



        </>
    )
}

export default LebaneseVillaCard
