import React from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"
import CarouselBanner from '../images/CarouselBanner.png';
//import '../styles/components/_carousel.scss'



const Carousel = () => {
	return (
		<div className="carousel__container">
                  <img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" />
                  <img className="CarouselBanner"src={CarouselBanner} alt="Photos du logement" />
                  <img className="carouselArrowRight"src={arrowRight} alt="Flèche droite" />
            
                  
            </div>
	);
};

export default Carousel;