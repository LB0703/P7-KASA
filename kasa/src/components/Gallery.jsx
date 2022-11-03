import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"


const Gallery = (props) => {
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
            <section>
                <img src={slides[SliderPosition]} alt="Photos divers de chaque appartement" />
            </section>
        );
    } else {
		return (
			<div className="gallery__container">
				<img className="galleryArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousSlide}/>
				<ul>
					{props.pictures.map((picture, index) =>
						<li key={index}>
							<img className="gallery__pictures" 
							src={slides[SliderPosition]} 
							alt="photos de l'appartement"
							/>
						</li>
					)}
				</ul>
				<img className="galleryArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextSlide} />
                <span className="gallery__order">
					{SliderPosition + 1}/{slides.length}
                        </span>
                </div>
			);
		}
};

export default Gallery;


