import Logo from "../assets/HsLogo.png";
import {
	Route,
	Routes,
	BrowserRouter,
	useNavigate,
	Link,
} from "react-router-dom";

function Nav() {
	const navegar = useNavigate();

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
						<button onClick={() => navegar("/")}>
							Hearthstone
						</button>
					</li>
					<li>
						<button onClick={() => navegar("/tutorial")}>
							Tutorial
						</button>
					</li>
					<li>
						<button onClick={() => navegar("/album")}>Album</button>
					</li>
					<li>
						<button onClick={() => navegar("/heroes")}>
							Heroes
						</button>
					</li>
					<li>
						<button onClick={() => navegar("/modes")}>Modes</button>
					</li>
					<li>
						<button onClick={() => navegar("/profiles")}>
							Profiles
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}
export default Nav;
