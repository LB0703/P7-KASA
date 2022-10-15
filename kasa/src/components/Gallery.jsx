import'../scss/Gallery.scss'

const Gallery = ({cover, title}) => {
	return (
		<article className="gallery">
			<img src={cover} alt="location" />
			<div className='gallery__name'>
				<h1>{title}</h1>
			</div>
		</article>
	);
};

export default Gallery;
