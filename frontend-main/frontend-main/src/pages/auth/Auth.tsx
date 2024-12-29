import { Fragment } from 'react/jsx-runtime';
import './auth.scss';
import TopNav from '../../components/landing-page/header/Header';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
	return (
		<Fragment>
			<TopNav />

			<section className="auth__page">
				<div>
					<h1>For Audience</h1>
					<p>Sign up automatically by connecting your wallet</p>
					<button onClick={()=>navigate("/dashboard")}>Connect Wallet</button>
				</div>
				<div>
					<h1>For Creator</h1>
					<p>
						Upload your content by sign up and creating your profile on
						musico
					</p>
					<button  onClick={()=>navigate("/dashboard")}>Sign up</button>
				</div>
			</section>
		</Fragment>
	);
}
export default Auth;
