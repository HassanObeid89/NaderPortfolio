import React from 'react'

// AwesomeSlider
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

// Images
import ceiling1 from '../../assets/copyCenter/Ceiling_Plan_1.jpg'
import ceiling2 from '../../assets/copyCenter/Ceiling_Plan_2.jpg'
import plan1 from '../../assets/copyCenter/CopyCenter_Plan_1st_Floor.jpg'
import plan2 from '../../assets/copyCenter/CopyCenter_Plan.jpg'
import sectionA from '../../assets/copyCenter/CopyCenter_Section_A-A.jpg'
import sectionB from '../../assets/copyCenter/CopyCenter_Section_B-B.jpg'


// CSS
import '../../css/projectCard.scss'

function CopyCenter() {
    const copyCenterSlider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
        >
            <div data-src={ceiling1} />
            <div data-src={ceiling2} />
            <div data-src={plan1} />
            <div data-src={plan2} />
            <div data-src={sectionA} />
            <div data-src={sectionB} />
            
        </AwesomeSlider>

    );
    return (
        <div >

            <div className='detail_container'>
                {copyCenterSlider}

                <div className='details'>
                    <p>
                        <h3>CopyCenter Project</h3>
                        Industrial design became popular in the 1990's as 
                        many North American city centers started enjoying a 
                        refurbishment by converting old manufacturing facilities 
                        and warehouses into condos and multi-unit residential 
                        buildings. Instead of covering up or removing all the 
                        remnants of the space such as brick walls, exposed pipes 
                        and electrical wires and putting in interior walls, 
                        developers created large, open units preserving the old 
                        floors, walls and keeping much of the pipes and wiring and 
                        beams exposed resulting in what is known as industrial home 
                        decor. 

                    </p>
                </div>

            </div>
        </div>
    )
}

export default CopyCenter
