//import { useState, useEffect } from "react";
import React from "react";
//import { useParams } from "react-router-dom";
import { getLodgingById } from "../api";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Collapse from "../components/Collapse";
//import Host from "../images/host.png"



const Lodging = () => {
	const infoLodging = getLodgingById();
      

	//const [{ getLodgingById }, setGetLodgingById  ] = useState([]);

	
		//useEffect (() => {  
		//	setGetLodgingById({ getLodgingById });

	//}, [ getLodgingById ] );
	if (infoLodging !== undefined) {
		const {  pictures, equipments, description} = infoLodging
	return (
		<div>
			
			
			<div>
				<Carousel pictures={pictures} />
				
			</div>
			{/* <section className="lodging__data">
				{ data.map((lodgingPage, index) =>
				<div className="lodging__detail">
                        key={index}
				title={lodgingPage.title}
				location={lodgingPage.location} </div>
		            )}
			</section> */}
			<Tags />
			<Host />
			<Collapse equipments={equipments} description={description} />
		</div>
	);
} else {
	window.location.href ="/error404"
}
	};
export default Lodging;

