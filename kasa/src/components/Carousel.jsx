import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"

//import CarouselBanner from '../images/CarouselBanner.png';

const Carousel = (props) => {
      const pictures = props.pictures;
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
					<div className="carousel__slide">
						<img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={onTheLeft}/>
						<ul>
							{props.pictures.map((picture, index) =>
								<li key={index}>
									<img className="carousel__pictures" src={picture} alt="photos de l'appartement" />
								</li>
							)}
						</ul>
						<img className="carouselArrowRight"src={arrowRight} alt="Flèche droite"onClick={onTheRight} />
					
                                    <span className="carousel__indicators">
                                          {currentIndex + 1}/{pictures.length}
                                    </span>
                              
                              </div>
                              


                              
	      );
      }
};

export default Carousel;