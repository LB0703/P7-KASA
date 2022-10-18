import React from "react";
import bannerAboutUs from '../images/bannerAboutUs.png';

const AboutUs = () => {
	return (
		<div className='AboutUs__container'>
			<img className='AboutUs__img' src={bannerAboutUs}alt="Paysage de montagne" />
		</div>
	);
};

export default AboutUs;