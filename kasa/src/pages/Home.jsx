import React, { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import Banner from "../components/Banner"
import Cards from "../components/Card";
import { getLodgings } from "../api";

const Home = () => {
	const [data, setData] = useState ([]);

	useEffect(() => {
		setData(getLodgings);
	}, []);
	
	return (
		<div>
			<Banner />
			<div className="card__container">
				{ data.map((lodging) =>
					<Link className="card" key={`${lodging.id}`} to= {`/accomodation/${lodging.id}`}>
						<Cards 
							key={`lodging.id`}
							cover={lodging.cover}
							title={lodging.title}
						/>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Home;