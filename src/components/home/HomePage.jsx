import React from 'react'
import '../../css/homePage.css'
import TanzaniaProjectCard from './TanzaniaProjectCard';
import home_intro from '../../assets/home_intro.jpg'
import SannanProjectCard from './SannanProjectCard';
import ObeidProjectCard from './ObeidProjectCard';
import LebaneseVillaCard from './LebaneseVillaCard';
import CopyCenterCard from './CopyCenterCard';

function HomePage() {
    return (
        <div>
            <img className='intro_image' src={home_intro} alt=""/>
            <TanzaniaProjectCard />
            <SannanProjectCard />
            <ObeidProjectCard />
            <LebaneseVillaCard />
            <CopyCenterCard />
        </div>
    )
}

export default HomePage
