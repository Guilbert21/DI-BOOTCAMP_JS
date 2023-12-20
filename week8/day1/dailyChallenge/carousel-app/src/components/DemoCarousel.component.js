import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import carImage from '../assets/car.jpg';
import ferrariImage from '../assets/ferrari.jpg';
import mercedesImage from '../assets/mercedes.jpg';

export function DemoCarousel() {
    const imageStyle = {
        objectFit: 'cover',
        width: '1500px',
        height: '850px', 
    };

    return (
        <Carousel>
            <div>
                <img src={carImage} alt="Car" style={imageStyle} />
                <p className="legend">F1</p>
            </div>
            <div>
                <img src={ferrariImage} alt="Ferrari" style={imageStyle} />
                <p className="legend">Ferrari</p>
            </div>
            <div>
                <img src={mercedesImage} alt="Mercedes" style={imageStyle} />
                <p className="legend">Mercedes</p>
            </div>
        </Carousel>
    );
}
