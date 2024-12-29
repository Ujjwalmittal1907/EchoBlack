import './style.scss';
import { useState, useRef } from 'react';

type PlayListProps = {
	image: string;
	title: string;
	cost: number;
	percent: number;
	increasing: boolean;
	audioSrc: string;
};

export function PlayList(props: PlayListProps) {
	const sign = props.increasing ? '+' : '-';

	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement>(null);

	const togglePlayPause = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		setIsPlaying(!isPlaying);
	};
	return (
		<article className="playlist__card">
			<audio
				ref={audioRef}
				src={props.audioSrc}
				onEnded={() => setIsPlaying(false)}
			/>
			<div className="img__container">
				<img className="music__image" src={props.image} alt={props.image} />
				<button onClick={togglePlayPause} className="play__btn">
					<img
						src={`/icons/${!isPlaying ? 'play' : 'pause'}.svg`}
						alt=""
					/>
				</button>
			</div>
			<div className="card__details">
				<h3>{props.title}</h3>
				<div className="card__metrics">
					<div>
						<span>value</span>
						<p>{props.cost}mus</p>
					</div>
					<div>
						<span>flux</span>
						<p>
							{sign}
							{props.percent}%
						</p>
					</div>
				</div>
			</div>
		</article>
	);
}
