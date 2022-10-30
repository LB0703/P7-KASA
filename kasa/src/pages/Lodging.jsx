//import { useState, useEffect } from "react";
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { getLodgingById } from "../api";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import Error404 from "./Error404.jsx"

const Lodging = () => {
	const params = useParams();
	const infoLodging = getLodgingById(params.id);

	if(infoLodging === false) {
		// @todo : faire un navigate() vers 404
		//<link onclick={() => Navigate("/Error404")}></link>
		return <Error404 />;
		//<Navigate to="/Error404" state={params.id} replace={false} />;
	}else {
		return (
			<div>
				<Carousel
					pictures={infoLodging.pictures}
				/>
				<div className="lodging">
					<div className="lodging__infosleft">
						<h1>{infoLodging.title}</h1>
						<p>{infoLodging.location}</p>
						<Tags
							tags={infoLodging.tags}
						/>
					</div>
				<div className="lodging__infosright">
				<Host
					name={infoLodging.host.name}
					picture={infoLodging.host.picture}
				/>
				
				 <Rate 
				 	rating={infoLodging.rate}
				 /> 
				</div>
				</div>
				<div className="collapse__lodging">
				<Collapse
					title="Description"
					content={infoLodging.description}
				/>
				<Collapse
					title="Équipements"
					content={infoLodging.equipments}
				/>
				</div>
			</div>
		);
	}
};

export default Lodging;

