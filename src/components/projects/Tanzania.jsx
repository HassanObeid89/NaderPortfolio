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
import '../../css/projectCard.css'

function Tanzania() {
    const slider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
            // fillParent='true'
            // style={{ width: '40%', margin: '10px'}}
            >
            <div  data-src={tanzania1} />
            <div data-src={tanzania2} />
            <div data-src={tanzania3} />
            <div data-src={tanzania4} />
            
            
        </AwesomeSlider>
    );
    return (
        <div>
            {slider} 
        </div>
    )
}

export default Tanzania
