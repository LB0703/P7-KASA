import'../scss/LodgingCard.scss'

const Card = ({cover, title}) => {
	return (
		<article className="card__containaire">
                  <div>
			<img className='card__img' src={cover} alt="Photos des appartements" />
			<div className='card__name'>
				<h1>{title}</h1>
			</div>
                  </div>
		</article>
	);
};

export default Card;