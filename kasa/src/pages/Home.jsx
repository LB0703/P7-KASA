import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Cards from "../components/Card";


const Home = () => {
	const [data, setData] = useState ([]);

	useEffect(() => {
		fetch("http://localhost:3000/lodgings.json", {
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
			<Banner />
			<div className="card__container">
				{ data && data.length>0 && data.map((lodging) =>
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