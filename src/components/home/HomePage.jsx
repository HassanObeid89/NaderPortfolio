import React from 'react'
import '../../css/homePage.css'
import TanzaniaProjectCard from './TanzaniaProjectCard';
import home_intro from '../../assets/home_intro.jpg'
import SannanProjectCard from './SannanProjectCard';
function HomePage() {
    return (
        <div>
            <img className='intro_image' src={home_intro} alt=""/>
            <TanzaniaProjectCard />
            <SannanProjectCard />
        </div>
    )
}

export default HomePage
