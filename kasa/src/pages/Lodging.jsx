// import {useEffect, useState} from "react";
// //import { useParams } from "react-router-dom";
// import Carousel from "../components/Carousel";
// import "../scss/components/_carousel.scss";
// import { getLodgingById } from "../api"; 


// const dataLodging = getLodgingById();

// const Lodging = () => {
	

// 	//const { id } = useParams();
// 	const [{ getLodgingById }, setGetLodgingById  ] = useState([]);

	
// 		useEffect (() => {  
// 			setGetLodgingById({ getLodgingById });

// 	}, [ getLodgingById ] );
	
// 	return (
// 		<div>
			
// 			<Carousel />
// 			<section className="lodging__data">

// 			<div className="lodging__detail">
// 				{ dataLodging.map((lod) =>
// 				key={lod.id}
// 				title={lod.title}
// 				location={lod.location}
				
				
// 				)}
				
// 			</div>
		
// 			</section>
// 		</div>
// 	);

// 	};
// export default Lodging;

// useEffect (() => {
// 	const fetchLodging = () => {
// 	fetch("../Datas.json", {
// 		headers: {
// 			"Content-Type": "application/json",
// 			Accept: "application/json",
// 		},
	
// 	})
// .then((response) => response.json()
// .then(({ setLodging }) => console.log(setLodging))
// .catch((error) => console.log(error)))


// fetchLodging() 
// 	};