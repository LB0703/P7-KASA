import {useEffect, useState} from "react";
//import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";

import { getLodgingById } from "../api"; 

const data = getLodgingById();


const Lodging = () => {
	
      

	const [{ getLodgingById }, setGetLodgingById  ] = useState([]);

	
		useEffect (() => {  
			setGetLodgingById({ getLodgingById });

	}, [ getLodgingById ] );
	
	return (
		<div>
			
			<Carousel />
			<section className="lodging__data">
				{ data.map((lodgingPage, index) =>
				<div className="lodging__detail">
                        key={index}
				title={lodgingPage.title}
				location={lodgingPage.location} </div>
		            )}
			</section>
		</div>
	);

	};
export default Lodging;

