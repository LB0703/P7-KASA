import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Gallery from "../components/Card";
//import "../styles/components/_gallery.scss"
import { getLodgings } from "../api";
//import "../styles/utils/_variables.scss";
//import { getLodgingById } from "../api";
//import { getAboutUs } from "../api";

const Home = () => {
	//const [dataLodging, setDataLodging] = useState ([]);
	// [ error404, setError404] = useState(false);

	const data = getLodgings();

	//useEffect(() =>{
	//	getLodgings();

	//},[])

	//if(error404) {return("error")}
	//console.log(getLodgingById('toto'));
	//.log(getLodgingById('c67ab8a7'));
	//console.log(getAboutUs());

	return (
		<div>
			<Banner />
			<div className="card__container">
				{ data.map((lodging) =>
					<Link className="card" key={`${lodging.id}`} to= {`/accomodation/${lodging.id}`}>
						<Gallery 
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