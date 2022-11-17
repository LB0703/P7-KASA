import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLodgingById } from "../api";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";


const Lodging = () => {

	const params = useParams();
	const navigate = useNavigate();
	const [infoLodging, setInfoLodging] = useState({
		"id": "",
		"title": "",
		"cover": "",
		"pictures": [],
		"description": "",
		"host": {
			"name": "",
			"picture": ""
		},
		"rating": "5",
		"location": "",
		"equipments": [],
		"tags": []
	});

	useEffect(() => {
		let data = getLodgingById(params.id);
		
		if(data === false) {
			navigate("/404");
		}
		else {
			setInfoLodging(data);
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Gallery
				pictures={infoLodging.pictures}
			/>
			<div className="lodging">
				<div className="lodging__infosLeft">
					<h1>{infoLodging.title}</h1>
					<p>{infoLodging.location}</p>
					<Tags
						tags={infoLodging.tags}
					/>
				</div>
				<div className="lodging__infosRight">
					<Host
						name={infoLodging.host.name}
						picture={infoLodging.host.picture}
					/>
					<Rate
						rating={infoLodging.rating}
					/>
				</div>
			</div>
			<div className="collapse__lodging">
				<div className="collapse__lodgingBox">
				<Collapse
					title="Description"
					content={infoLodging.description}
					open={false}
				/>
				</div>
				<div className="collapse__lodgingBox">
				<Collapse
					title="Équipements"
					content={infoLodging.equipments.map((equipement, index) => {
						return <li key={index}>{equipement}</li>;
					})}
					open={false}
				/>
				</div>
			</div>
		</div>
	);
};

export default Lodging;


































// //import { useState, useEffect } from "react";
// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getLodgingById } from "../api";
// import Gallery from "../components/Gallery";
// import Tags from "../components/Tags";
// import Host from "../components/Host";
// import Rate from "../components/Rate";
// import Collapse from "../components/Collapse";
// //import Error404 from "./Error404.jsx"

// const Lodging = () => {
// 	const params = useParams();
// 	const infoLodging = getLodgingById(params.id);
// 	const navigate = useNavigate();

// 	if(infoLodging === false) {
// 		// @todo : faire un navigate() vers 404
// 		//return <Error404 />;
// 		navigate ("/Error404", { state : { message: "page introuvable"}} )
// 	} else {
// 		return (
// 			<div>
// 				<Gallery
// 					pictures={infoLodging.pictures}
// 				/>
// 				<div className="lodging">
// 					<div className="lodging__infosleft">
// 						<h1>{infoLodging.title}</h1>
// 						<p>{infoLodging.location}</p>
// 						<Tags
// 							tags={infoLodging.tags}
// 						/>
// 					</div>
// 					<div className="lodging__infosright">
// 						<Host
// 							name={infoLodging.host.name}
// 							picture={infoLodging.host.picture}
// 						/>
// 						<Rate 
// 							rating={infoLodging.rating}
// 						/> 
// 					</div>
// 				</div>
// 				<div className="collapse__lodging">
// 					<Collapse
// 						title="Description"
// 						content={infoLodging.description}
// 					/>
// 					<Collapse
// 						title="Équipements"
// 						content={infoLodging.equipments.map((equipement, index) => { 
// 							return <li key={index}>{equipement}</li>;
// 						})}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// };

// export default Lodging;

