import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Gallery from "../components/Gallery";
import "../scss/components/_gallery.scss"
import { getLodgings } from "../api";
import { getLodgingById } from "../api";
import { getAboutUs } from "../api";

const Home = () => {
	const data = getLodgings();

	console.log(getLodgingById('toto'));
	console.log(getLodgingById('c67ab8a7'));
	console.log(getAboutUs());

	return (
		<div>
			<Banner />
			<div className="card__container">
				{ data.map((lodging) =>
					<Link className="card" key={`${lodging.id}`} to= {`/lodging/${lodging.id}`}>
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