import React from 'react'
import { Link } from 'react-router-dom'
import Tanzania_3D_MAX_4 from '../../assets/tanzania/Tanzania_3D_MAX_4.JPG';

import '../../css/projectCard.css';
function ProjectCard() {
    return (
        <>
           
        <div className='cardContainer'>
                
            <img className='project_image' src={Tanzania_3D_MAX_4} alt="" />
            <div className='description'>
                <ul>
                    <li>
                        Tanzania Project
                    </li>
                    <li>
                        AutoCad, 3DMAX
                    </li>
                </ul>

                <Link to='/tanzania'> 
               <button className='view_button'>View</button>
               </ Link>

            </div>     
        </div>
                
            {/* <div className='cardContainer'>

                <img className='project_image' src={Tanzania_3D_MAX_4} alt="" />
                <div className='description'>
                    <ul>
                        <li>
                            Tanzania Project
                    </li>
                        <li>
                            AutoCad, 3DMAX
                    </li>
                    </ul>

                    <Link to='/tanzania'>
                        <button className='view_button'>View</button>
                    </ Link>

                </div>
            </div> */}
        </>
    )
}

export default ProjectCard
