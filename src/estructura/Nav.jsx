import Logo from "../assets/HsLogo.png";
import {
	Route,
	Routes,
	BrowserRouter,
	useNavigate,
	Link,
} from "react-router-dom";



function Nav() {
	const navegar = useNavigate()

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
					<button onClick={() => navegar("/")}>Hearthstone</button>
					</li>
					<li>
					<button onClick={() => navegar("/tutorial")}>Tutorial</button>
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
