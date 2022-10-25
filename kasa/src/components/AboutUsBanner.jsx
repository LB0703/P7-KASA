import React from "react";
import bannerAboutUs from '../images/bannerAboutUs.png';


const AboutUsbanner = () => {
	return (
		<div className='aboutUsbanner__container'>
			<img className='aboutUsbanner__img' src={bannerAboutUs}alt="Paysage de montagne" />
			
		</div>
	);
};

export default AboutUsbanner;