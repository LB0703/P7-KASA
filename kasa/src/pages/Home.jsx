import { Link } from "react-router-dom";
import Banner from "../components/Banner"
import Gallery from "../components/Gallery";
import "../scss/Gallery.scss"
import Datas from "../../src/Datas.json"

const Home = () => {
	return (
		<div>
			<Banner />
		
			<div className="card__container">
				{ Datas.map((accomodation) =>
				
					<Link key={`${accomodation.id}`} to= {`/accomodation/${accomodation.id}`}>
						<Gallery 
							key={`accomodation.id`}
							cover={accomodation.cover}
							title={accomodation.title}
						/>
					</Link>

				)}

			</div>
			
		</div>
	);
};

export default Home;