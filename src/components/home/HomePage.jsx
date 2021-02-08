import React from 'react'
import '../../css/homePage.css'
import ProjectCard from './ProjectCard';
import home_intro from '../../assets/home_intro.jpg'
function HomePage() {
    return (
        <div>
            <img className='intro_image' src={home_intro} alt=""/>
            <ProjectCard />
        </div>
    )
}

export default HomePage
