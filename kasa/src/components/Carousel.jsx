import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"
import CarouselBanner from '../images/CarouselBanner.png';




const Carousel = (props) => {
      const pictures = props.pictures
      const [currentIndex, setCurrentIndex] = useState(0);

const onTheRight = () => {
      const firstPicture = currentIndex === 0;
      const newIndex = firstPicture ? pictures.length -1 : currentIndex -1;
      setCurrentIndex(newIndex);
};

const onTheLeft = () => {
      const lastPicture = currentIndex === -1;
      const newIndex = lastPicture ? 0  : currentIndex +1;
      setCurrentIndex(newIndex);
};

      if (pictures.length === 1) {
	      return (
                  <section className="carousel__container">
                        <img src={pictures[currentIndex]} alt="Photos divers de chaque appartement" />
                  </section>
            );
      } else {
      
            return ( 
		      <div className="carousel__container">
                        <img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={onTheLeft}/>
                        <img className="CarouselBanner"src={CarouselBanner} alt="Photos du logement" />
                        <img className="carouselArrowRight"src={arrowRight} alt="Flèche droite"onClick={onTheRight} />   
                  </div>
	      );
      }
};

export default Carousel;