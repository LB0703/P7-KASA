//import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { getLodgingById } from "../api";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
//import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import Error404 from "./Error404.jsx"

const Lodging = () => {
	const params = useParams();
	const infoLodging = getLodgingById(params.id);

	if(infoLodging === false) {
		// @todo : faire un navigate() vers 404
		//<link onclick={() => Navigate("/Error404")}></link>
		return <Error404 />;
	}else {
		return (
			<div>
				<Carousel
					pictures={infoLodging.pictures}
				/>
				<div className="lodging__infos">
					<h1>{infoLodging.title}</h1>
					<p>{infoLodging.location}</p>
				</div>
				<Tags
					tags={infoLodging.tags}
				/>
				{/* <Rate /> */}
				<Host
					name={infoLodging.host.name}
					picture={infoLodging.host.picture}
				/>
				<div className="collapse__lodging">
				<Collapse
					title="Description"
					content={infoLodging.description}
				/>
				<Collapse
					title="Équipements"
					content={infoLodging.equipments.join('<br/>')}
				/>
				</div>
			</div>
		);
	}
};

export default Lodging;

