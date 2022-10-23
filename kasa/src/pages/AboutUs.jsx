import React from "react";
import AboutUsbanner from "../components/AboutUsBanner.jsx";
//import'../styles/components/_aboutUsBanner.scss'
//import'../styles/components/_collapse.scss'
import { getAboutUs } from "../api";
import Collapse from "../components/Collapse.jsx"
//import "../styles/utils/_variables.scss";


const AboutUs = () => {
	const data = getAboutUs ();
	return (
		<div>
			<AboutUsbanner />
			<div className="aboutUs__collapse">
				{ data.map((item, index) => (
					<Collapse 
					key={index} 
					title={item.title} 
					content={item.content} />
					))}

			</div> 
			
		</div> 
	);
};

export default AboutUs;