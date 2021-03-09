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
        <div >
            <div className='image_container'>
               <img  src={home_intro} alt=""/> 
            </div>
            
            <div className="homeContainer">
                <TanzaniaProjectCard />
                <SannanProjectCard />
                <ObeidProjectCard />
                <LebaneseVillaCard />
                <CopyCenterCard />
            </div>
            
        </div>
    )
}

export default HomePage
