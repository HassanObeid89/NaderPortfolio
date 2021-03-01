import React from 'react'
import { Link } from 'react-router-dom'
import CopyCard from '../../assets/copyCenter/CopyCenter_Plan_1st_Floor.jpg';

import '../../css/projectCard.scss';
function CopyCenterCard() {
    return (
        <>

            <div className='cardContainer'>

                <img className='project_image' src={CopyCard} alt="" />
                <div className='description'>
                    <ul>
                        <li>
                            Copy Center Project
                    </li>
                        <li>
                            AutoCad
                    </li>
                    </ul>

                    <Link to='/CopyCenter'>
                        <button className='view_button'>View</button>
                    </ Link>

                </div>
            </div>



        </>
    )
}

export default CopyCenterCard
