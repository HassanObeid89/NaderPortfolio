import React from 'react'

// AwesomeSlider
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';

// Images
import villa1 from '../../assets/lebaneseVilla/Lebanese_villa_1.jpeg'
import villa2 from '../../assets/lebaneseVilla/Lebanese_villa_2.jpeg'
import villa3 from '../../assets/lebaneseVilla/Lebanese_villa_3.jpeg'
import villa4 from '../../assets/lebaneseVilla/Lebanese_villa_4.jpg'
import villa5 from '../../assets/lebaneseVilla/Lebanese_villa_5.jpg'


// CSS
import '../../css/projectCard.scss'

function Villa() {
    const villaSlider = (
        <AwesomeSlider
            animation='cubeAnimation'
            cssModule={[CoreStyles, AnimationStyles]}
        >
            <div data-src={villa1} />
            <div data-src={villa2} />
            <div data-src={villa3} />
            <div data-src={villa4} />
            <div data-src={villa5} />
            
        </AwesomeSlider>

    );
    return (
        <div >
            
            <div className='detail_container'>
                {villaSlider}

                <div className='details'>
                    <p>
                        <h3>Villa Project, Traditional</h3>
                        
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

export default Villa
