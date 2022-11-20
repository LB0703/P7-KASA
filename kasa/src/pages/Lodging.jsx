import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";



const Lodging = () => {

	const { id } = useParams();
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
		const getData = () => {
			fetch("logements.json", {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (logements) {
				const logement = logements.find((item) => item.id === id);
				setInfoLodging(logement)
			})
			.catch(function (error) {
				console.log("error")
			})
		}
	
		
	
		getData()
	}, [id]);
	

	if(id === false) {
		navigate("/404");
	}
	else {
		setInfoLodging(id);
	}

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
































