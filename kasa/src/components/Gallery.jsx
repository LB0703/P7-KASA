import React from "react";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"


const Gallery = (props) => {
        const slides = props.pictures;
        const [SliderPosition, setSliderPosition] = useState(0);

     //If the current slide is the first slide, then set the current slide to the last slide, otherwise
     //set the current slide to the previous slide.
     
			const previousSlide = () => {
				setSliderPosition( SliderPosition === 0 ? slides.length -1 : SliderPosition -1)
			};
			
     //If the current slide is the last slide, then go to the first slide, otherwise go to the next slide.
     
			const nextSlide = () => {
				setSliderPosition(SliderPosition === slides.length -1 ? 0: SliderPosition +1);
			}; 

    if (slides.length > 1) {
		return (
			<div className="gallery__container">
				<img className="galleryArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousSlide}/>
				
				<ul>
					{props.pictures.map((index) =>
						<li key={index}>
							<img className="gallery__pictures" 
							src={slides[SliderPosition]} 
							alt="photos de l'appartement"
							/>
						</li>
						
					)}
					<div className="gallery__backgroundGallery"></div>
				</ul>
				
				<img className="galleryArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextSlide} />
                <span className="gallery__order">
					{SliderPosition + 1}/{slides.length}
                        </span>
                </div>
        );
    } else {
		return (
			<div className="gallery__container">
                <img className="gallery__pictures"
				src={slides[SliderPosition]} 
				alt="Photos divers de chaque appartement" 
				/>
            </div>
		);
	}
};

export default Gallery;


