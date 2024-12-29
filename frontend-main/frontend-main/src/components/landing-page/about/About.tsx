import './style.scss';

function About() {
	return (
		<section className="about__section" id='about'>
			<h1>What is Musico ?</h1>
			<article>
				<div className="description">
					<p>
						Musico is a decentralized platform for trading and staking the
						Musico token. It allows users to explore, invest in various
						music genres, and support creators. Creators can upload
						content, and users can invest, earning potential ownership
						rights.
					</p>
					<p>
						A liquidity pool enables staking and locking up Musico tokens
						for investment. Users contribute tokens to the pool, earning
						rewards from invested content's success. Seamless audio
						integration lets users listen to content before investing.
					</p>
				</div>
				<div className="image__container">
					<img src="/images/headset.png" alt="" />
				</div>
			</article>
		</section>
	);
}
export default About;
