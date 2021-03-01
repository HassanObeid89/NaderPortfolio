import React from 'react'

// AwesomeSlider
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

// Images
import tanzania1 from '../../assets/tanzania/Tanzania_3D_MAX_1.JPG'
import tanzania2 from '../../assets/tanzania/Tanzania_3D_MAX.JPG'
import tanzania3 from '../../assets/tanzania/Tanzania_3D_MAX_3.JPG'
import tanzania4 from '../../assets/tanzania/Tanzania_3D_MAX_4.JPG'

// CSS
import '../../css/projectCard.scss'

function Tanzania() {
    const slider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
            >
            <div  data-src={tanzania1} />
            <div data-src={tanzania2} />
            <div data-src={tanzania3} />
            <div data-src={tanzania4} />
        </AwesomeSlider>

    );
    return (
        <div >
            <h2>Tanzania Project</h2>
            <div className='detail_container'>
                {slider}

            <div className='details'>
                
                <p>
                        Though people often tend to confuse modern
                        interior design styles with contemporary
                        interior design, there is a difference
                        between the two that makes them unique
                        in and of themselves. 
                        Contemporary style is completely of the moment
                        while modern interior design styles can almost
                        mean anything forward-thinking from the so's to
                        the early aughts. Contemporary interior design
                        styles trends also have more freedom as modern is
                        usually fixed around squared, graphic lines and a
                        particular take on modernity. 
                </p>
            </div>
                
            </div>
        </div>
    )
}

export default Tanzania
