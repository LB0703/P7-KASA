import React from "react";
import bannerAboutUs from '../images/bannerAboutUs.png';
//import '../scss/AboutUsbanner.scss'

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<img className='AboutUs__img' src={bannerAboutUs}alt="Paysage de montagne" />
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default AboutUs;