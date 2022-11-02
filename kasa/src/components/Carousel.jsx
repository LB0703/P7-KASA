import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"

//import CarouselBanner from '../images/CarouselBanner.png';

const Carousel = (props) => {
        const pictures = props.pictures;
        const [currentIndex, setCurrentIndex] = useState(0);

			

			const previousSlide = () => {
			      const lastPicture = currentIndex === pictures.length -1;
			      const newIndex = lastPicture ? 0  : currentIndex +1;
			      setCurrentIndex(newIndex);
			};

			const nextSlide = () => {
				const firstPicture = currentIndex === 0;
				const newIndex = firstPicture ? pictures.length -1 : currentIndex -1;
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
						<img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={nextSlide}/>
						<ul>
							{props.pictures.map((picture, index) =>
								<li key={index}>
									<img className="carousel__pictures" src={pictures[currentIndex]} alt="photos de l'appartement" />
								</li>
							)}
						</ul>
						<img className="carouselArrowRight"src={arrowRight} alt="Flèche droite"onClick={previousSlide} />
					
                                    <span className="carousel__indicators">
                                          {currentIndex + 1}/{pictures.length}
                                    </span>
                              
                              </div>
                              


                              
	      );
      }
};

export default Carousel;


// const pictures = props.pictures;
// const [SliderPosition, setSliderPosition] = useState(0);

// 	const nextSlide = () => {
// 		const newPosition = SliderPosition;
// 		if (newPosition > 0) {
// 			pictures.length = newPosition -1;
// 		}
// 		translateFullSlides(newPosition);
// 		setSliderPosition(newPosition);
// 	}
// 	const previousSlide = () => {
// 		const newPosition = SliderPosition;
// 		if (newPosition < pictures.length -1) {
// 			pictures.length = newPosition +1;
// 		}
// 		translateFullSlides(newPosition);
// 		setSliderPosition(newPosition);
// 	}
// 		console.log(previousSlide)
// 	const nextClickSlide = () => {
// 		nextSlide();
// 	   }

// 	   const previousClickSlide = () => {
// 		previousSlide();
// 	   }

// 	   const translateFullSlides = (newPosition) => {
// 		for (let i = 0; i < pictures.length; i++) {
// 			newPosition = pictures.length +1
// 		}
// 	}

// 	const displayItems = 
// 	<ul>
// 		{props.pictures.map((picture, index) =>
// 			<li key={index}>
// 			<img className="carousel__pictures" 
// 			src={picture} 
// 			alt="photos de l'appartement" />
// 			</li>
// 		)}
// 	</ul>

// 	return (
// 			<div className="carousel__slide">
// 				<img className="carouselArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextClickSlide} />
				
// 				<div>{displayItems}</div>
				
// 				<img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousClickSlide}/>
				
// 				<span className="carousel__indicators">
// 					{SliderPosition + 1}/{pictures.length}
// 				</span>		
// 			</div>
// 	)
// }