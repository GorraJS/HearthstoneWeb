import Nav from "./Nav";
import Titulo from "../assets/HearthStoneTitle.webp";
import "./Inicio.css";

function Inicio() {
	return (
		<>
			<Nav />
			<div className="image-container">
				<img src={Titulo} alt="Hearthstone Title" />
				<div class="grid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</>
	);
}

export default Inicio;
