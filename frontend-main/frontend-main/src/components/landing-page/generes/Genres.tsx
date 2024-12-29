import "./style.scss"


type GenresCardProps = {
	name: string;
	image: string;
};

const topGenres: GenresCardProps[] = [
	{
		name: 'Pop',
		image: '/images/pop.jfif',
	},
	{
		name: 'Rock',
		image: '/images/rock.jfif',
	},
	{
		name: 'Hip Hop',
		image: '/images/hippop.jfif',
	},
	{
		name: 'Country',
		image: '/images/country.jfif',
	},
	{
		name: 'Electronic',
		image: '/images/electronic.jfif',
	},
	{
		name: 'R&B',
		image: '/images/rnb.jfif',
	},
	{
		name: 'Jazz',
		image: '/images/jazz.jfif',
	},
	{
		name: 'Classical',
		image: '/images/classical.jfif',
	},
];

function GenereCard(props: GenresCardProps) {
	return (
		<article className="genres__card">
			<img src={props.image} alt="" />
			<p>{props.name}</p>
		</article>
	);
}
function Genres() {
	return (
		<section className="genere__section" id="genres">
			<h1>Explore Vast Genres of Music</h1>
			<div className="genres__container">
				{topGenres.map((genere, index) => (
					<GenereCard {...genere} key={index} />
				))}
			</div>
		</section>
	);
}
export default Genres;
