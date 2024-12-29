import './style.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const elementRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const element = elementRef.current!;
			const triggerElement = document.getElementById("home");

			if (triggerElement) {
				const triggerElementRect = triggerElement.getBoundingClientRect();
				const triggerElementTop =
					triggerElementRect.bottom + window.scrollY;

				if (window.scrollY >= triggerElementTop) {
					element.classList.add('scrolled');
				} else {
					element.classList.remove('scrolled');
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<nav className="top__nav" ref={elementRef}>
			<div className="logo__container">
				<img src="/logo.png" />
				<p>Musico</p>
			</div>
			<div className={`links ${!showMenu && 'hidden'}`}>
				Dashboard
			</div>
			<Link to="/">
				Sign Out <img src="/icons/sign-in.svg" alt="sign-in" />
			</Link>
			<button onClick={() => setShowMenu(!showMenu)} className="menu__btn">
				<img src={`/icons/${!showMenu?"menu": "cancel"}.svg`} alt="" />
			</button>
		</nav>
	);
}
export default Header;
