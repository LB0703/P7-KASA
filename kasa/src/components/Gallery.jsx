
import React from "react";
import { useState, useEffect } from "react";
import arrowLeft from "../images/arrowLeft.png";
import arrowRight from "../images/arrowRight.png"


const Gallery = (props) => {
	const slides = props.pictures;
	const [sliderPosition, setSliderPosition] = useState(0);

	
	useEffect(() => {
		const galleryPictures = document.querySelectorAll('.gallery__pictures'); 
		galleryPictures.forEach(function(item) {
			item.style.opacity = 0; 
		});
		galleryPictures[sliderPosition].style.opacity = 1; 
	}, [sliderPosition]);

	const previousSlide = () => {
		setSliderPosition( sliderPosition === 0 ? slides.length -1 : sliderPosition -1) 
	};

	const nextSlide = () => {
		setSliderPosition(sliderPosition === slides.length -1 ? 0 : sliderPosition +1) 
	};


	if (slides.length > 1) {
		return (
			<div className="gallery__container">
				<img className="galleryArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousSlide}/>
				
				<ul>
					{props.pictures.map((picture, index) =>
						<li key={index}>
							
							<img className={`gallery__pictures gallery__pictures-${index}`}
								src={slides[index]}
								alt="photos de l'appartement"
							/>


						</li>
						
					)}
					<div className="gallery__backgroundGallery"></div>
				</ul>
				
				<img className="galleryArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextSlide} />

				<span className="gallery__order"> 
					{sliderPosition + 1}/{slides.length} 
				</span>
			</div>
		);
	} else {
		
		return (
			<div className="gallery__container">
			<img className="gallery__pictures"
					src={slides[0]}
					alt="Photos divers de chaque appartement"
				/>
			</div>
		);
	}
};

export default Gallery;


// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import arrowLeft from "../images/arrowLeft.png";
// import arrowRight from "../images/arrowRight.png"


// const Gallery = (props) => {
// 	const slides = props.pictures;
// 	const [sliderPosition, setSliderPosition] = useState(0);
// 	const picturesRef = useRef([]);
	
// 	useEffect(() => {
// 		//const galleryPictures = document.querySelectorAll('.gallery__pictures');
// 		const galleryPictures = picturesRef.current;
// 		galleryPictures.forEach(function(item) {
// 			item.style.opacity = 0;
// 		});
// 		galleryPictures[sliderPosition].style.opacity = 1;
// 	}, [slides, sliderPosition]);

// 	const previousSlide = () => {
// 		setSliderPosition( sliderPosition === 0 ? slides.length -1 : sliderPosition -1) 
// 	};

// 	const nextSlide = () => {
// 		setSliderPosition(sliderPosition === slides.length -1 ? 0 : sliderPosition +1) 
// 	};


// 	if (slides.length > 1) {
// 		return (
// 			<div className="gallery__container">
// 				<img className="galleryArrowLeft"src={arrowLeft} alt="Flèche gauche" onClick={previousSlide}/>
				
// 				<ul>
// 					{props.pictures.map((picture, index) =>
// 						<li key={index}>
							
// 							<img className={`gallery__pictures gallery__pictures-${index}`}
// 								src={slides[index]}
// 								alt="photos de l'appartement"
// 								ref={el => picturesRef.current[index] = el}
// 							/>

// 						</li>
						
// 					)}
// 					<div className="gallery__backgroundGallery"></div>
// 				</ul>
				
// 				<img className="galleryArrowRight"src={arrowRight} alt="Flèche droite"onClick={nextSlide} />

// 				<span className="gallery__order"> 
// 					{sliderPosition + 1}/{slides.length} 
// 				</span>
// 			</div>
// 		);
// 	} else {
		
// 		return (
// 			<div className="gallery__container">
// 			<img className="gallery__pictures"
// 					src={slides[0]}
// 					alt="Photos divers de chaque appartement"
// 					ref={el => picturesRef.current[0] = el}
// 				/>
// 			</div>
// 		);
// 	}
// };

// export default Gallery;




