import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { setNewToken } from "./features/tokenSlice";


var client_id = "cffb3d444fd64669a1986a03fe1aee3b";
var client_secret = "9cd9228a1a2e4f57b5040e745628383d";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/signup/all",
		element: <Auth />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

function App() {
	const dispatch = useDispatch();
    const token = useSelector((state) => state.token.value);
	const getToken = async () => {
		const result = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "Basic " + btoa(client_id + ":" + client_secret),
			},
			body: "grant_type=client_credentials",
		});

		const data = await result.json();
		const access_token = data.access_token;
		dispatch(setNewToken(access_token));
	};

	getToken();

	return <RouterProvider router={router} />;
}

export default App;
