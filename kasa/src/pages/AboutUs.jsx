import React from "react";
import AboutUsbanner from "../components/AboutUsBanner.jsx";
import'../scss/components/_aboutUsBanner.scss'
import { getAboutUs } from "../api";
import Collapse from "../components/Collapse.jsx"

const AboutUs = () => {
	const Data = getAboutUs ();
	return (
		<div>
			<AboutUsbanner />
			<Collapse />
			<div className="aboutUs__collapse">
				{ Data.map((item) => 
					<Collapse key={item.id} title={item.title} content={item.content} />
				)}

			</div>
			
		</div> 
	);
};

export default AboutUs;