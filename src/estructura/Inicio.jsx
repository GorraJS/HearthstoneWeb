import {
	Route,
	Routes,
	BrowserRouter,
	useNavigate,
	Link,
} from "react-router-dom";
import Nav from "./Nav";
import Titulo from "../assets/HearthStoneTitle.webp";
import "./Inicio.css";

function Inicio() {
	return (
		<>
			<Nav />
			<div className="image-container">
				<img src={Titulo} alt="Hearthstone Title" />
			</div>
			<h1 className="texto"><strong>Juego de Cartas</strong></h1>
		</>
	);
}

export default Inicio;
