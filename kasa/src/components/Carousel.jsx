import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"


const Carousel = (props) => {
        const slides = props.pictures;
        const [SliderPosition, setSliderPosition] = useState(0);

			const previousSlide = () => {
				const firstSlide = SliderPosition === 0;
				const newPosition = firstSlide ? slides.length -1 : SliderPosition -1;
				setSliderPosition(newPosition);
			};
			
			const nextSlide = () => {
				const lastSlide = SliderPosition === slides.length -1;
				const newPosition = lastSlide ? 0  : SliderPosition +1;
				setSliderPosition(newPosition);
			};

    if (slides.length === 1) {
		return (
            <section className="carousel__container">
                <img src={slides[SliderPosition]} alt="Photos divers de chaque appartement" />
            </section>
        );
    } else {
		return (
			<div className="carousel__slide">
				<img className="carouselArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousSlide}/>
				<ul>
					{props.pictures.map((picture, index) =>
						<li key={index}>
							<img className="carousel__pictures" 
							src={slides[SliderPosition]} 
							alt="photos de l'appartement"
							/>
						</li>
					)}
				</ul>
				<img className="carouselArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextSlide} />
                <span className="carousel__indicators">
					{SliderPosition + 1}/{slides.length}
                        </span>
                </div>
			);
		}
};

export default Carousel;


