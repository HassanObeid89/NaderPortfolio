import React from 'react'

// AwesomeSlider
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

// Images
import Sannan1 from '../../assets/aliSannanProject/Lebanese_Kitchen_1.jpeg'
import Sannan2 from '../../assets/aliSannanProject/Lebanese_Kitchen_2.jpeg'
import Sannan3 from '../../assets/aliSannanProject/Lebanese_Kitchen_3.jpeg'
import Sannan4 from '../../assets/aliSannanProject/Lebanese_Kitchen_4.jpeg'


// CSS
import '../../css/projectCard.scss'

function AliSannan() {
    const sannanSlider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
        >
            <div data-src={Sannan1} />
            <div data-src={Sannan2} />
            <div data-src={Sannan3} />
            <div data-src={Sannan4} />
        </AwesomeSlider>

    );
    return (
        <div >
            <h2>Sannan Project</h2>
            <div className='detail_container'>
                {sannanSlider}

                <div className='details'>
                    <p>
                        When it comes to interior design styles, 
                        almost everything is rooted in 
                        traditional interior design ideas, 
                        and for good reason. That said, you can 
                        make traditional style interior design all your 
                        own by incorporating pieces that speak 
                        to your personality and lifestyle 
                        while making a statement. 
                        Take the room above, sure it features a depth and layering,
                        a traditional beige overstuffed sofa,
                        a Persian rug, and requisite Louis VI 
                        chair, however, what sets it apart 
                        from any other traditional room is the 
                        updated contemporary light fixture and 
                        the conversation starting art piece. 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AliSannan
