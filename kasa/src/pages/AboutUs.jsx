import React, { useState, useEffect } from "react";
import AboutUsbanner from "../components/AboutUsBanner.jsx";
import Collapse from "../components/Collapse.jsx"

const AboutUs = () => {
	const [data, setData] = useState ([]);

	useEffect(() => {
		fetch("http://localhost:3000/about.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
		.then(function(response) {
			console.log(response)
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			setData(data);
		})
		.catch(function () {
			console.log("error");
		});
	}, []);

	return (
		<div>
			<AboutUsbanner />
				<div className="aboutUs__collapse">
					{ data && data.length>0 && data.map((item, index) => (
						<Collapse 
							key={index}
							title={item.title}
							content={item.content}
							open={false} 
						/>
					))}
				</div> 
		</div> 
	);
};

export default AboutUs;