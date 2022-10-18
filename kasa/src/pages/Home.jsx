import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import LodgingCard from "../components/LodgingCard";

import Datas from "../../src/Datas.json"

const Home = () => {
	return (
		<div>
			<Banner />
			
			<div className="cards__container">
				{ Datas.map((accomodation) =>
				<div className="card__accomodation">
					<Link className="card__link"
					key={`${accomodation.id}`} to= {`/accomodation/${accomodation.id}`}>
						<LodgingCard
						key={`accomodation.id`}
						cover={accomodation.cover}
						title={accomodation.title}
						/>
					</Link>

				</div>
				)}

			</div>
			
		</div>
	);
};

export default Home;