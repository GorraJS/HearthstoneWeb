import Logo from "../assets/HsLogo.png";
import {
	Route,
	Routes,
	BrowserRouter,
	useNavigate,
	Link,
} from "react-router-dom";

function Nav() {
	return (
		<>
			<nav className="nav">
				<ul>
					<li>
						<img
							src={Logo}
							alt="Logo de la aplicación"
							width={120}
							height={120}
						/>
						<a href="/">Hearthstone</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/tutorial" className="outline">
							Tutorial
						</a>
					</li>
					<li>
						<a href="/album" className="outline">
							Album
						</a>
					</li>
					<li>
						<a href="/heroes" className="outline">
							Heroes
						</a>
					</li>
					<li>
						<a href="/modes" className="outline">
							Modes
						</a>
					</li>
					<li>
						<a href="/profiles" className="outline">
							Profiles
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Nav;
