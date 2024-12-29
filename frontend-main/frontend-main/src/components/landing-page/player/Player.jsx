function Player({ uri }) {
	window.onSpotifyIframeApiReady = (IFrameAPI) => {
		const element = document.getElementById("embed-iframe");
		const options = {
			uri: uri,
		};
		const callback = (EmbedController) => {};
		IFrameAPI.createController(element, options, callback);
	};

	return <div id="embed-iframe"></div>;
}

export default Player;
