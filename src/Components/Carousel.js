import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
 
class CarouselDemo extends Component {
    render() {
        return (
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false} interval={4500} transitionTime={600}>
                <Link to='/shop/clothing-hats'>
                    <div>
                        <img src="https://ugmonk.com/wp-content/uploads/2018/12/beanie-large2.jpg" />
                    </div>
                </Link>
                <Link to='/shop/sketchbooks'>
                    <div>
                        <img src="https://ugmonk.com/wp-content/uploads/2018/11/pw-sb-large.jpg" />
                    </div>
                </Link>                
                <Link to='/shop/accessories'>                
                    <div>
                        <img src="https://ugmonk.com/wp-content/uploads/2018/05/gather-new-lrg.jpg" />
                    </div>
                </Link>
                <Link to='/shop/accessories'>                
                    <div>
                        <img src="https://ugmonk.com/wp-content/uploads/2018/11/coaster-banner-lrg1.jpg" />
                    </div>
                </Link>
            </Carousel>
        );
    }
};

export default CarouselDemo;