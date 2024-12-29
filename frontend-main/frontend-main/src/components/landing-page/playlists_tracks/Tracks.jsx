import { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { setNewStat } from "../../../features/tracksStatus";

function Tracks() {
	const [tracks, setTracks] = useState([]);
	const [playlist, setPlaylist] = useState({});
	const token = useSelector((state) => state.token.value);
	const id = useSelector((state) => state.playlist.value);
	const status = useSelector((state) => state.tracksStatus.value);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getPlaylist() {
			const response = await fetch(
				"https://api.spotify.com/v1/playlists/" + id,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);

			const data = await response.json();
			setPlaylist(data);
		}
		async function getTracks() {
			const response = await fetch(
				`https://api.spotify.com/v1/playlists/${id}/tracks?limit=10`,
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);

			const data = await response.json();
			const tracksArray = data.items;
			setTracks(tracksArray);
		}

		if (token !== "" && id !== "") {
			getPlaylist();
			getTracks();
		}
	}, [token]);

	function handleArtists(artists) {
		for (let index = 0; index < artists.length; index++) {
			let names = "";
			const artist = artists[index];
			names += "," + artist.name;
			return names;
		}
	}

	function checkIfPropsNotNull(props) {
		if (Object.keys(playlist) === 0) {
			return "null";
		} else {
			return playlist.props;
		}
	}

	return (
		<section
			className={status ? "playlist__tracks active" : "playlist__tracks"}
		>
			<img
				src="/icons/cancel.svg"
				alt="Cancel"
				className="cancelBtn"
				onClick={() => dispatch(setNewStat(false))}
			/>
			<div className="container">
				<div className="playlist_img">
					<img
						src={() => checkIfPropsNotNull(images[0].url)}
						alt={() => checkIfPropsNotNull(name)}
					/>
				</div>
				<div className="content">
					<h1>{playlist.name}</h1>
					<div className="info">
						<div className="owner">
							Made by{" "}
							<b>
								{() => checkIfPropsNotNull(owner.display_name)}
							</b>
						</div>
						<p>{() => checkIfPropsNotNull(tracks.total)} songs</p>
					</div>
					<div className="tracks">
						{tracks.length !== 0
							? tracks.map((track, index) => {
									<div className="track" key={index}>
										<img
											src={tracks.album.images[0].url}
											alt={track.name}
										/>
										<div className="text">
											<h3 className="name">
												{track.name}
											</h3>
											<div className="artist">
												{() =>
													handleArtists(track.artists)
												}
											</div>
										</div>
										<img
											src="/icons/play.svg"
											alt="play"
											className="icon"
										/>
									</div>;
							  })
							: ""}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Tracks;
