import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Nav from "../Nav";
import "./Heroes.css";
import Caballero from "../../assets/heroes/CaballeroMuerte.webp";
import Brujo from "../../assets/heroes/Brujo.webp";
import Picaro from "../../assets/heroes/Picaro.webp";
import CazadorDemonios from "../../assets/heroes/CazadorDemonios.webp";
import Cazador from "../../assets/heroes/Cazador.webp";
import Mago from "../../assets/heroes/Mago.webp";
import Chaman from "../../assets/heroes/Chaman.webp";
import Paladin from "../../assets/heroes/Paladin.webp";
import Sacerdote from "../../assets/heroes/Sacerdote.webp";
import Guerrero from "../../assets/heroes/Guerrero.webp";
import Druida from "../../assets/heroes/Druida.webp";

function Heroes() {
	return (
		<>
			<div className="paginaHeroes">
				<Nav />
				<div className="grid">
					<div>
						<a href="/heroes/caballero-muerte">
							<img src={Caballero} />
						</a>
					</div>
					<div>
						<a href="/heroes/brujo">
							<img src={Brujo} />
						</a>
					</div>
					<div>
						<a href="/heroes/picaro">
							<img src={Picaro} />
						</a>
					</div>
					<div>
						<a href="/heroes/cazador-demonios">
							<img src={CazadorDemonios} />
						</a>
					</div>
					<div>
						<a href="/heroes/cazador">
							<img src={Cazador} />
						</a>
					</div>
					<div>
						<a href="/heroes/mago">
							<img src={Mago} />
						</a>
					</div>
					<div>
						<a href="/heroes/chaman">
							<img src={Chaman} />
						</a>
					</div>
					<div>
						<a href="/heroes/paladin">
							<img src={Paladin} />
						</a>
					</div>
					<div>
						<a href="/heroes/sacerdote">
							<img src={Sacerdote} />
						</a>
					</div>
					<div>
						<a href="/heroes/guerrero">
							<img src={Guerrero} />
						</a>
					</div>
					<div>
						<a href="/heroes/druida">
							<img src={Druida} />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Heroes;
