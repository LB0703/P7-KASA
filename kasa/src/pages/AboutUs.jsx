import React from "react";
import AboutUsbanner from "../components/AboutUsBanner.jsx";
import { getAboutUs } from "../api";
import Collapse from "../components/Collapse.jsx"

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
						content={item.content} 
						open={false} //open={(index === 0) ? true : false}
						/>
					))}
					
				</div> 
		</div> 
	);
};

export default AboutUs;