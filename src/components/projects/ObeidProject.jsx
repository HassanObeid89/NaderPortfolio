import React from 'react'

// AwesomeSlider
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

// Images
import Kitchen1 from '../../assets/obeidProject/Lebanese_Kitchen_Style_1.jpeg'
import Kitchen2 from '../../assets/obeidProject/Lebanese_Kitchen_Style_2.jpeg'
import Salon1 from '../../assets/obeidProject/Lebanese_Salon_1.jpeg'
import Salon2 from '../../assets/obeidProject/Lebanese_Salon_2.jpeg'
import Salon from '../../assets/obeidProject/Lebanese_Salon.jpg'
import SectionAA from '../../assets/obeidProject/SectionA-A.jpg'
import SectionBB from '../../assets/obeidProject/SectionB-B.jpg'

// CSS
import '../../css/projectCard.scss'

function ObeidProject() {
    const obeidSlider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
        >
            <div data-src={Kitchen1} />
            <div data-src={Kitchen2} />
            <div data-src={Salon1} />
            <div data-src={Salon2} />
            <div data-src={Salon} />
            <div data-src={SectionAA} />
            <div data-src={SectionBB} />
        </AwesomeSlider>

    );
    return (
        <div >
            <h2>Obeid Project</h2>
            <div className='detail_container'>
                {obeidSlider}

                <div className='details'>
                    <p>
                        <h3>URBAN MODERN</h3>
                        For the ultimate in cosmopolitan living, 
                        Urban Modern design is perfect for elevated city 
                        life as it marries the best of deluxe contemporary, 
                        modern, and industrial influences for an inspiring and 
                        timeless approach to decor. Think the Big Apple with a 
                        mesmerizing mix of chic highlights from different era's 
                        brought together to bring a home to life with 
                        statement-making appeal.

                    </p>
                </div>

            </div>
        </div>
    )
}

export default ObeidProject
