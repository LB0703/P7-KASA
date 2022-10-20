//import {useState} from "react";
//import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel"
import "../scss/components/_carousel.scss"




const Lodging = () => {
	//const { id } = useParams();
	//const [Lodging, setLodging] = useState();

	
		
	
	return (
		<div>
			
			<Carousel />
			<section className="lodging__data">

			<div className="lodging__detail">
				<h1>{Lodging.title}</h1>
				<p>{Lodging.location}</p>
				{/* <Tags tags={Lodging.tags} /> */}
			</div>
		
			</section>
		</div>
	);

	};
export default Lodging;

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