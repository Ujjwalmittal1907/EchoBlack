import "./style.scss"

import Header from '../../components/dashboard/top-nav/Header';
import { useEffect, useState } from 'react';
import { PlayList } from '../../components/shared/playlist/PlayList';

interface RankingMetric {
	value: string;
	type: string;
}

interface Artist {
	name: string;
	spotifyUri: string;
	externalUrl: string;
}

interface Label {
	name: string;
	spotifyUri: string;
	externalUrl: string;
}

interface TrackMetadata {
	trackName: string;
	trackUri: string;
	displayImageUri: string;
	artists: Artist[];
	producers: string[];
	labels: Label[];
	songWriters: string[];
	releaseDate: string;
}

interface ChartEntryData {
	currentRank: number;
	previousRank: number;
	peakRank: number;
	peakDate: string;
	appearancesOnChart: number;
	consecutiveAppearancesOnChart: number;
	rankingMetric: RankingMetric;
	entryStatus: string;
	entryRank: number;
	entryDate: string;
}

interface RootObject {
	chartEntryData: ChartEntryData;
	missingRequiredFields: boolean;
	trackMetadata: TrackMetadata;
}
function Dashboard() {
	const [userMusics, setUserMusics] = useState<RootObject[]>([]);

	const fetchMusics = async () => {
		const url = 'https://spotify81.p.rapidapi.com/top_200_tracks';
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key':
					'e21dde824bmsh0fe59e91cee6823p1a20d9jsnb267e38a172c',
				'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
			},
		};

		try {
			const response = await fetch(url, options);
			const result = (await response.json()) as RootObject[];
			setUserMusics(result.flat());
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMusics();
	}, []);
	return (
		<section className="dashboard">
			<Header />
			<div className="cards__container">
				{userMusics.map((item, index) => (
					<PlayList
						image={item.trackMetadata.displayImageUri}
						title={item.trackMetadata.trackName}
						cost={353}
						increasing={Boolean(index % 2)}
						percent={index * 2}
                  audioSrc={item.trackMetadata.trackUri}
					/>
				))}
			</div>
		</section>
	);
}
export default Dashboard;
