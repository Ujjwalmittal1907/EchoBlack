import './style.scss';

type ArtistCardProps = {
	name: string;
	image: string;
};

const topArtists: ArtistCardProps[] = [
	{
		name: 'Beyoncé',
		image: '/images/beyonce.jfif',
	},
	{
		name: 'Taylor Swift',
		image: '/images/taylor.jfif',
	},
	{
		name: 'Ed Sheeran',
		image: '/images/sheeran.jfif',
	},
	{
		name: 'Rihanna',
		image: '/images/rihanna.jfif',
	},
	{
		name: 'Drake',
		image: '/images/drake.jfif',
	},
	{
		name: 'Adele',
		image: '/images/adele.jfif',
	},
	{
		name: 'Justin Bieber',
		image: '/images/bieber.jfif',
	},
	{
		name: 'Ariana Grande',
		image: '/images/ariana.jfif',
	},
];

function ArtistsCard(props: ArtistCardProps) {
	return (
		<article className="article__card">
			<img src={props.image} alt="" />
			<p>{props.name}</p>
		</article>
	);
}
function Artists() {
	return (
		<section className="artists__section">
			<h1>Invest in Your Creators Content</h1>
			<div className="artists__container">
				{topArtists.map((artists, index) => (
					<ArtistsCard {...artists} key={index} />
				))}
			</div>
		</section>
	);
}
export default Artists;
