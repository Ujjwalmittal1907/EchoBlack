import { useNavigate } from "react-router-dom";
import "./style.scss";

function Hero() {
   const navigate = useNavigate();
	return (
		<section className="hero__section" id="home">
         <img className="hero__bg" src="/images/hero-bg.jpg" alt="" />
			<div className="hero__details">
				<h1>LISTEN, TRADE AND EARN ON AUDIO CONTENT</h1>
            <p>Discover a revolutionary platform that allows creators to monetize and engage with audiences through an innovative token-based trading system.</p>
            <button onClick={()=>navigate("/signup/all")}>Get Started <img src="/icons/arrow-right.svg" alt="" /></button>
			</div>
         <div className="hero__img__container">
            <div className="hero__img">
               <img className="mobile" src="/images/hero-img-1.png" alt="" />
               <img className="listen" src="/images/hero-img-2.png" alt="" />

            </div>
         </div>
		</section>
	);
}
export default Hero;
